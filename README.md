# Solve AI — منصة SaaS للشركات

هذا الإصدار يضيف طبقة Backend فعلية قابلة للتشغيل إلى واجهة Solve AI الحالية، مع قاعدة بيانات PostgreSQL، مصادقة JWT، الشركات، الخطط، الاشتراكات، الفواتير والمصروفات.

## التشغيل المحلي

1. انسخ ملف البيئة:

```bash
cp .env.example .env
```

2. شغّل PostgreSQL وأنشئ قاعدة بيانات باسم `solve_ai`، ثم ثبّت الحزم:

```bash
npm install
```

3. أنشئ الجداول والبيانات التجريبية:

```bash
npm run db:generate
npm run db:migrate -- --name init
npm run db:seed
```

4. شغّل الواجهة وواجهة API في طرفيتين:

```bash
npm run dev
npm run api:dev
```

- الواجهة: `http://localhost:5173`
- API: `http://localhost:4000`
- فحص الخدمة: `http://localhost:4000/api/health`

## الحساب التجريبي

- البريد: `admin@solveai.com`
- كلمة المرور: `admin123`

## API الحالي

- `POST /api/auth/login`
- `GET /api/me`
- `GET /api/dashboard`
- `GET /api/plans`
- `GET /api/subscription`
- `POST /api/invoices`
- `POST /api/expenses`

## ملاحظة الإنتاج

نظام الدفع المتكرر يحتاج تفعيل مزود دفع مناسب للسوق المستهدف مثل Stripe أو Tap/HyperPay، مع Webhooks موثقة وتخزين مفاتيح الإنتاج في أسرار الاستضافة، وليس داخل المستودع. كما يجب إضافة التحقق من البريد، استعادة كلمة المرور، تحديد معدل الطلبات، سجلات التدقيق، واختبارات قبل إطلاق الخدمة للعملاء.
