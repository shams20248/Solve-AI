import { useMemo, useState } from 'react'
import {
  ArrowDownLeft,
  ArrowUpLeft,
  Bell,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronLeft,
  CircleHelp,
  CreditCard,
  FileBarChart,
  FileText,
  LayoutDashboard,
  Lock,
  Mail,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  WalletCards,
  X,
  Zap
} from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const chartData = [
  { month: 'يناير', income: 28000, expense: 15000 },
  { month: 'فبراير', income: 35000, expense: 19000 },
  { month: 'مارس', income: 31000, expense: 17000 },
  { month: 'أبريل', income: 42000, expense: 21000 },
  { month: 'مايو', income: 39000, expense: 24000 },
  { month: 'يونيو', income: 51000, expense: 27000 }
]

const transactions = [
  { id: '#INV-2406', client: 'شركة المدار للتقنية', date: '24 يونيو 2024', amount: '12,500 ر.س', status: 'مدفوعة', tone: 'success' },
  { id: '#INV-2405', client: 'مؤسسة آفاق التجارية', date: '22 يونيو 2024', amount: '8,750 ر.س', status: 'قيد الانتظار', tone: 'warning' },
  { id: '#INV-2404', client: 'شركة نواة الإبداع', date: '20 يونيو 2024', amount: '5,200 ر.س', status: 'متأخرة', tone: 'danger' },
  { id: '#INV-2403', client: 'استوديو لون', date: '18 يونيو 2024', amount: '3,800 ر.س', status: 'مدفوعة', tone: 'success' }
]

const navItems = [
  { label: 'نظرة عامة', icon: LayoutDashboard },
  { label: 'المعاملات', icon: WalletCards },
  { label: 'الفواتير', icon: FileText, count: '12' },
  { label: 'العملاء', icon: Users },
  { label: 'التقارير', icon: FileBarChart }
]

const defaultUser = {
  email: 'admin@solveai.com',
  password: 'admin123',
  name: 'محمد السالم'
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('نظرة عامة')
  const [showAlerts, setShowAlerts] = useState(false)
  const [formData, setFormData] = useState({ email: defaultUser.email, password: defaultUser.password })
  const [error, setError] = useState('')

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()

    if (formData.email.trim() === defaultUser.email && formData.password === defaultUser.password) {
      setError('')
      setIsLoggedIn(true)
      return
    }

    setError('البريد الإلكتروني أو كلمة المرور غير صحيحة. جرّب: admin@solveai.com / admin123')
  }

  const accountSummary = useMemo(() => ({
    balance: '128,450',
    income: '51,280',
    expense: '27,430',
    profit: '23,850'
  }), [])

  if (!isLoggedIn) {
    return (
      <div className="login-screen">
        <div className="login-panel">
          <div className="login-visual">
            <div className="brand-block">
              <div className="brand-mark large"><Sparkles size={22} /></div>
              <div>
                <span className="brand-top">Solve AI</span>
                <h1>منصة الأعمال الذكية</h1>
              </div>
            </div>

            <div className="feature-stack">
              <div className="feature-card feature-primary">
                <div className="mini-icon"><TrendingUp size={18} /></div>
                <div>
                  <strong>تحليل أداء الشركة</strong>
                  <p>توقعات ذكية وتقارير فورية</p>
                </div>
              </div>

              <div className="feature-grid">
                <div className="feature-card small">
                  <div className="mini-icon purple"><CreditCard size={18} /></div>
                  <div>
                    <strong>إدارة النقد</strong>
                    <small>تحصيل ومصروفات</small>
                  </div>
                </div>
                <div className="feature-card small">
                  <div className="mini-icon green"><BriefcaseBusiness size={18} /></div>
                  <div>
                    <strong>التقارير</strong>
                    <small>أداء فوري</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="insight-box">
              <div className="flash"><Zap size={14} /></div>
              <div>
                <strong>نمو +18.4%</strong>
                <p>أداء الشركة أعلى من المتوقع هذا الشهر</p>
              </div>
            </div>
          </div>

          <div className="login-form-wrap">
            <div className="login-topbar">
              <div className="chip"><ShieldCheck size={13} /> آمن ومؤمّن</div>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              <div className="heading-block">
                <p>مرحباً بعودتك</p>
                <h2>تسجيل الدخول</h2>
              </div>

              <label className="input-box">
                <span>البريد الإلكتروني</span>
                <div className="input-wrap">
                  <Mail size={18} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="admin@solveai.com"
                    required
                  />
                </div>
              </label>

              <label className="input-box">
                <span>كلمة المرور</span>
                <div className="input-wrap">
                  <Lock size={18} />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </label>

              <div className="login-options">
                <label className="remember-me"><input type="checkbox" defaultChecked /> تذكرني</label>
                <button type="button" className="link-button">نسيت كلمة المرور؟</button>
              </div>

              {error ? <div className="error-box">{error}</div> : null}

              <button type="submit" className="primary-button wide">
                دخول إلى لوحة التحكم
              </button>

              <div className="divider"><span>أو</span></div>

              <button type="button" className="secondary-button">
                إنشاء حساب جديد
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="brand-row">
          <div className="brand-mark"><Sparkles size={18} /></div>
          <span>Solve AI</span>
          <button className="close-menu" onClick={() => setSidebarOpen(false)}><X size={18} /></button>
        </div>

        <div className="workspace-box">
          <div className="workspace-avatar">س</div>
          <div>
            <strong>شركة سحاب</strong>
            <small>الحساب الرئيسي</small>
          </div>
          <ChevronDown size={16} />
        </div>

        <div className="menu-label">القائمة الرئيسية</div>
        <nav className="side-nav">
          {navItems.map(({ label, icon: Icon, count }) => (
            <button
              key={label}
              className={`nav-item ${activeTab === label ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(label)
                setSidebarOpen(false)
              }}
            >
              <Icon size={18} />
              <span>{label}</span>
              {count ? <b>{count}</b> : null}
            </button>
          ))}
        </nav>

        <div className="menu-label bottom-space">إدارة الحساب</div>
        <nav className="side-nav">
          <button className="nav-item"><Settings size={18} /><span>الإعدادات</span></button>
          <button className="nav-item"><CircleHelp size={18} /><span>مركز المساعدة</span></button>
        </nav>

        <div className="sidebar-footer">
          <div className="upgrade-icon"><Zap size={15} /></div>
          <div>
            <strong>تحسين الحساب</strong>
            <small>استكشف مزا��ا Solve Pro</small>
          </div>
          <ChevronLeft size={16} />
        </div>

        <div className="profile-box">
          <div className="user-avatar">م</div>
          <div>
            <strong>{defaultUser.name}</strong>
            <small>مدير الحساب</small>
          </div>
          <MoreHorizontal size={17} />
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <button className="menu-button" onClick={() => setSidebarOpen(true)}><Menu size={22} /></button>
          <div className="crumbs">
            <span>الرئيسية</span>
            <ChevronLeft size={15} />
            <strong>{activeTab}</strong>
          </div>

          <div className="top-actions">
            <div className="search-box">
              <Search size={17} />
              <input placeholder="ابحث في لوحة التحكم..." />
            </div>
            <button className="icon-button" onClick={() => setShowAlerts((prev) => !prev)}>
              <Bell size={18} />
              <span className="badge"></span>
            </button>
            <div className="top-avatar">م</div>
          </div>

          {showAlerts ? (
            <div className="alerts-box">
              <strong>الإشعارات</strong>
              <p>لديك فاتورة متأخرة تحتاج مراجعتها.</p>
            </div>
          ) : null}
        </header>

        <div className="page-wrap">
          <div className="page-header">
            <div>
              <p className="eyebrow">الأحد، 30 يونيو 2024</p>
              <h1>صباح الخير، {defaultUser.name} <span>👋</span></h1>
              <p className="subheading">إليك ملخص أداء شركتك اليوم.</p>
            </div>
            <button className="primary-button small-gap"><Plus size={18} />معاملة جديدة</button>
          </div>

          <section className="stats-grid">
            <StatCard title="الرصيد الحالي" value={accountSummary.balance} suffix="ر.س" change="+12.5%" icon={WalletCards} color="purple" positive />
            <StatCard title="إجمالي الدخل" value={accountSummary.income} suffix="ر.س" change="+8.2%" icon={ArrowDownLeft} color="green" positive />
            <StatCard title="إجمالي المصروفات" value={accountSummary.expense} suffix="ر.س" change="-3.1%" icon={ArrowUpLeft} color="orange" positive />
            <StatCard title="صافي الربح" value={accountSummary.profit} suffix="ر.س" change="+18.4%" icon={TrendingUp} color="blue" positive />
          </section>

          <div className="content-grid">
            <section className="panel chart-panel">
              <div className="panel-header">
                <div>
                  <h2>التدفق النقدي</h2>
                  <p>مؤشرات الأداء خلال آخر ستة أشهر</p>
                </div>
                <button className="select-button">آخر 6 أشهر <ChevronDown size={14} /></button>
              </div>

              <div className="legend">
                <span><i className="dot income"></i>الدخل</span>
                <span><i className="dot expense"></i>المصروفات</span>
              </div>

              <div className="chart-box">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 5, left: -15, bottom: 0 }}>
                    <defs>
                      <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c5cfc" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#7c5cfc" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="expenseFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#39b98a" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#39b98a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#edf0f5" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca5b6' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca5b6' }} tickFormatter={(value) => `${value / 1000}k`} orientation="right" />
                    <Tooltip
                      formatter={(value: number) => [`${Number(value).toLocaleString()} ر.س`, '']}
                      contentStyle={{
                        border: 'none',
                        borderRadius: 12,
                        boxShadow: '0 8px 25px rgba(24,30,39,0.12)',
                        fontFamily: 'Cairo, sans-serif',
                        fontSize: 12
                      }}
                    />
                    <Area type="monotone" dataKey="income" stroke="#7c5cfc" strokeWidth={2.5} fill="url(#incomeFill)" />
                    <Area type="monotone" dataKey="expense" stroke="#39b98a" strokeWidth={2.5} fill="url(#expenseFill)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="panel insight-panel">
              <div className="insight-head">
                <div className="ai-icon"><Bot size={20} /></div>
                <div>
                  <h2>رؤى Solve AI</h2>
                  <p>تحليل آلي لأداء نشاطك</p>
                </div>
                <span className="live-pill">● مباشر</span>
              </div>

              <div className="insight-block primary">
                <div className="insight-badge"><TrendingUp size={18} /></div>
                <div>
                  <strong>أداء رائع هذا الشهر!</strong>
                  <p>صافي ربحك ارتفع بنسبة <b>18.4%</b> مقارنة بالشهر الماضي.</p>
                </div>
              </div>

              <div className="insight-row">
                <div className="mini-icon purple"><ArrowDownLeft size={16} /></div>
                <div>
                  <strong>فرصة نمو</strong>
                  <p>دخلك من العملاء المتكررين يمثل 64% من إجمالي الدخل.</p>
                </div>
              </div>

              <div className="insight-row">
                <div className="mini-icon amber"><Bell size={16} /></div>
                <div>
                  <strong>تنبيه مهم</strong>
                  <p>لديك 8,750 ر.س في فواتير مستحقة خلال هذا الأسبوع.</p>
                </div>
              </div>

              <button className="text-button">عرض التحليل الكامل <ChevronLeft size={16} /></button>
            </section>
          </div>

          <section className="panel table-panel">
            <div className="panel-header">
              <div>
                <h2>آخر الفواتير</h2>
                <p>متابعة المعاملات الأخيرة وحالة الدفع</p>
              </div>
              <button className="outline-button">عرض الكل <ChevronLeft size={15} /></button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>رقم الفاتورة</th>
                    <th>العميل</th>
                    <th>تاريخ الإصدار</th>
                    <th>المبلغ</th>
                    <th>الحالة</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((item) => (
                    <tr key={item.id}>
                      <td><strong className="invoice-id">{item.id}</strong></td>
                      <td>
                        <div className="client-box">
                          <span>{item.client.charAt(0)}</span>
                          {item.client}
                        </div>
                      </td>
                      <td className="muted">{item.date}</td>
                      <td><strong>{item.amount}</strong></td>
                      <td><span className={`status ${item.tone}`}>{item.status}</span></td>
                      <td><button className="more-button"><MoreHorizontal size={18} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <footer className="footer-bar">
            <span>© 2024 Solve AI. جميع الحقوق محفوظة.</span>
            <span>آخر مزامنة: منذ دقيقتين</span>
          </footer>
        </div>
      </main>
    </div>
  )
}

function StatCard({
  title,
  value,
  suffix,
  change,
  icon: Icon,
  color,
  positive
}: {
  title: string
  value: string
  suffix: string
  change: string
  icon: typeof WalletCards
  color: 'purple' | 'green' | 'orange' | 'blue'
  positive?: boolean
}) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}><Icon size={18} /></div>
      <div className="stat-info">
        <p>{title}</p>
        <div className="stat-value">{value}<small>{suffix}</small></div>
        <span className={positive ? 'positive' : ''}>{change} <small>من الشهر الماضي</small></span>
      </div>
      <div className="sparkline">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default App
