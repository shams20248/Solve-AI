import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const plans = [
    { key: 'starter', name: 'Starter', monthlyCents: 19900, maxUsers: 3, features: ['dashboard', 'invoices', 'basic_reports'] },
    { key: 'professional', name: 'Professional', monthlyCents: 49900, maxUsers: 15, features: ['dashboard', 'invoices', 'advanced_reports', 'ai_insights', 'team'] },
    { key: 'enterprise', name: 'Enterprise', monthlyCents: 99900, maxUsers: 100, features: ['all', 'api', 'priority_support', 'sso'] }
  ]
  for (const plan of plans) await prisma.plan.upsert({ where: { key: plan.key }, update: plan, create: plan })
  const company = await prisma.company.upsert({ where: { id: 'demo-company' }, update: {}, create: { id: 'demo-company', name: 'شركة سحاب', billingEmail: 'billing@solveai.com' } })
  const passwordHash = await bcrypt.hash('admin123', 12)
  await prisma.user.upsert({ where: { email: 'admin@solveai.com' }, update: {}, create: { name: 'محمد السالم', email: 'admin@solveai.com', passwordHash, role: 'COMPANY_ADMIN', companyId: company.id } })
  const plan = await prisma.plan.findUniqueOrThrow({ where: { key: 'professional' } })
  await prisma.subscription.upsert({ where: { companyId: company.id }, update: {}, create: { companyId: company.id, planId: plan.id, status: 'TRIALING' } })
}

main().finally(() => prisma.$disconnect())
