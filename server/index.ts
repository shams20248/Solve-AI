import 'dotenv/config'
import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient, Role } from '@prisma/client'
import { z } from 'zod'

const app = express()
const prisma = new PrismaClient()
const port = Number(process.env.PORT || 4000)
const jwtSecret = process.env.JWT_SECRET || 'development-secret'
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

type AuthRequest = Request & { user?: { id: string; companyId: string | null; role: Role } }
const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ message: 'تسجيل الدخول مطلوب' })
  try {
    req.user = jwt.verify(token, jwtSecret) as AuthRequest['user']
    next()
  } catch { return res.status(401).json({ message: 'جلسة غير صالحة' }) }
}
const companyOnly = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user?.companyId) return res.status(403).json({ message: 'لا توجد شركة مرتبطة بالحساب' })
  next()
}
const asyncRoute = (handler: (req: AuthRequest, res: Response) => Promise<unknown>) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(handler(req as AuthRequest, res)).catch(next)

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'solve-ai-api' }))
app.post('/api/auth/login', asyncRoute(async (req, res) => {
  const body = z.object({ email: z.string().email(), password: z.string().min(6) }).parse(req.body)
  const user = await prisma.user.findUnique({ where: { email: body.email }, include: { company: true } })
  if (!user || !(await bcrypt.compare(body.password, user.passwordHash))) return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' })
  const token = jwt.sign({ id: user.id, companyId: user.companyId, role: user.role }, jwtSecret, { expiresIn: '7d' })
  return res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, company: user.company } })
}))
app.get('/api/me', auth, asyncRoute(async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.id }, include: { company: { include: { subscription: { include: { plan: true } } } } } })
  return res.json(user)
}))
app.get('/api/dashboard', auth, companyOnly, asyncRoute(async (req, res) => {
  const companyId = req.user!.companyId!
  const [invoices, expenses, paid] = await Promise.all([
    prisma.invoice.findMany({ where: { companyId }, orderBy: { createdAt: 'desc' }, take: 10, include: { customer: true } }),
    prisma.expense.aggregate({ where: { companyId }, _sum: { amountCents: true } }),
    prisma.invoice.aggregate({ where: { companyId, status: 'PAID' }, _sum: { amountCents: true } })
  ])
  const income = paid._sum.amountCents || 0
  const expense = expenses._sum.amountCents || 0
  return res.json({ balanceCents: income - expense, incomeCents: income, expenseCents: expense, profitCents: income - expense, invoices })
}))
app.get('/api/plans', asyncRoute(async (_req, res) => res.json(await prisma.plan.findMany({ orderBy: { monthlyCents: 'asc' } })))
app.get('/api/subscription', auth, companyOnly, asyncRoute(async (req, res) => res.json(await prisma.subscription.findUnique({ where: { companyId: req.user!.companyId! }, include: { plan: true } }))))
app.post('/api/invoices', auth, companyOnly, asyncRoute(async (req, res) => {
  const body = z.object({ number: z.string().min(2), amountCents: z.number().int().positive(), customerId: z.string().optional(), dueDate: z.string().datetime().optional() }).parse(req.body)
  return res.status(201).json(await prisma.invoice.create({ data: { ...body, companyId: req.user!.companyId!, dueDate: body.dueDate ? new Date(body.dueDate) : undefined } }))
}))
app.post('/api/expenses', auth, companyOnly, asyncRoute(async (req, res) => {
  const body = z.object({ category: z.string().min(2), vendor: z.string().optional(), amountCents: z.number().int().positive(), spentAt: z.string().datetime().optional() }).parse(req.body)
  return res.status(201).json(await prisma.expense.create({ data: { ...body, companyId: req.user!.companyId!, spentAt: body.spentAt ? new Date(body.spentAt) : undefined } }))
}))
app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof z.ZodError) return res.status(400).json({ message: 'بيانات غير صالحة', details: error.flatten() })
  console.error(error)
  return res.status(500).json({ message: 'حدث خطأ داخلي' })
})
app.listen(port, () => console.log(`Solve AI API running on http://localhost:${port}`))
