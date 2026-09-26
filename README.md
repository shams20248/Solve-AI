@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-alt: #f7f9fc;
  --primary: #6d53f4;
  --primary-strong: #5639df;
  --primary-soft: #efebff;
  --success: #2fac7d;
  --success-soft: #ecfaf4;
  --warning: #ed9f46;
  --warning-soft: #fff4e8;
  --danger: #eb6d69;
  --danger-soft: #fff0ef;
  --text: #1d2535;
  --muted: #8a93a8;
  --border: #edf0f5;
  --shadow: 0 18px 40px rgba(35, 44, 69, 0.08);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(140deg, #f0f5ff 0%, #f7f9fc 45%, #eef2f8 100%);
  color: var(--text);
  direction: rtl;
}
button, input { font-family: inherit; }
button { cursor: pointer; }

#root { min-height: 100vh; }

.login-screen {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px;
  background:
    radial-gradient(circle at top right, rgba(109, 83, 244, 0.14), transparent 34%),
    radial-gradient(circle at bottom left, rgba(26, 30, 77, 0.08), transparent 30%),
    #f8f9fd;
}

.login-panel {
  width: min(1200px, 100%);
  min-height: 760px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(236, 239, 245, 0.9);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  overflow: hidden;
}

.login-visual {
  padding: 42px 42px 34px;
  background: linear-gradient(160deg, #0f172a 0%, #111d3b 25%, #1b2440 100%);
  color: #f4f7ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #9d84ff, #6542de);
  color: white;
  box-shadow: 0 8px 18px rgba(109, 83, 244, 0.45);
}

.brand-mark.large { width: 46px; height: 46px; }
.brand-top {
  font-size: 12px;
  letter-spacing: 1px;
  color: #c7d2ff;
  display: block;
  margin-bottom: 4px;
}
.brand-block h1 {
  margin: 0;
  font-size: clamp(30px, 2vw, 42px);
  line-height: 1.2;
}

.feature-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 18px;
  padding: 16px 18px;
}

.feature-card.feature-primary {
  background: linear-gradient(135deg, rgba(109, 83, 244, 0.2), rgba(94, 132, 255, 0.1));
}

.feature-card strong {
  display: block;
  font-size: 15px;
  margin-bottom: 3px;
}

.feature-card p, .feature-card small {
  margin: 0;
  color: rgba(223, 231, 255, 0.82);
  font-size: 11px;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.feature-card.small {
  min-height: 92px;
}

.mini-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.09);
}
.mini-icon.purple { background: rgba(124, 92, 252, 0.18); }
.mini-icon.green { background: rgba(57, 185, 138, 0.2); }

.insight-box {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 14px 16px;
}

.flash {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f5d063, #f2a73a);
  color: #1a1f2d;
}

.insight-box strong {
  display: block;
  font-size: 16px;
}

.insight-box p {
  margin: 3px 0 0;
  color: rgba(226, 232, 255, 0.75);
  font-size: 11px;
}

.login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 30px;
  background: rgba(255, 255, 255, 0.85);
}

.login-form {
  width: min(100%, 430px);
}

.login-topbar {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #eefaf4;
  border: 1px solid #dff4ea;
  color: #2c9b71;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 10px;
  font-weight: 700;
}

.heading-block { margin-bottom: 28px; }
.heading-block p {
  margin: 0 0 6px;
  color: var(--muted);
  font-size: 14px;
}
.heading-block h2 {
  margin: 0;
  font-size: 34px;
  letter-spacing: -0.5px;
}

.input-box {
  display: block;
  margin-bottom: 18px;
}

.input-box span {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: #4a5466;
  font-weight: 700;
}

.input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border);
  background: var(--panel-alt);
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--muted);
}

.input-wrap:focus-within {
  border-color: rgba(109, 83, 244, 0.4);
  box-shadow: 0 0 0 3px rgba(109, 83, 244, 0.08);
}

.input-wrap input {
  width: 100%;
  border: 0;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: var(--text);
}

.login-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 8px 0 18px;
}

.remember-me {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #687385;
  font-size: 12px;
}

.link-button {
  background: transparent;
  border: 0;
  color: var(--primary);
  font-size: 12px;
  font-weight: 700;
}

.error-box {
  background: #fff0f0;
  color: #b64e47;
  border: 1px solid #f7d6d6;
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 11px;
  margin-bottom: 16px;
}

.primary-button,
.secondary-button,
.outline-button,
.select-button,
.text-button,
.icon-button,
.more-button,
.close-menu,
.menu-button {
  border: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-button:active,
.secondary-button:active,
.outline-button:active,
.select-button:active,
.text-button:active,
.icon-button:active,
.more-button:active,
.close-menu:active,
.menu-button:active {
  transform: translateY(1px);
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  border-radius: 12px;
  padding: 12px 18px;
  box-shadow: 0 12px 24px rgba(109, 83, 244, 0.24);
  font-weight: 700;
}

.primary-button.wide {
  width: 100%;
  padding: 13px 18px;
  font-size: 14px;
}

.secondary-button,
.outline-button,
.select-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: #fff;
  color: #48546a;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 11px 14px;
  font-weight: 600;
}

.secondary-button {
  width: 100%;
  background: #f7f7ff;
  color: var(--primary);
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
  font-size: 10px;
  color: var(--muted);
  position: relative;
}

.divider::before {
  content: "";
  position: absolute;
  inset: 50% 0 auto 0;
  height: 1px;
  background: var(--border);
}

.divider span {
  position: relative;
  background: white;
  padding: 0 12px;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: rgba(255, 255, 255, 0.88);
  border-left: 1px solid var(--border);
  padding: 22px 16px 16px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 28px;
  font-weight: 800;
  color: #232d41;
  padding: 0 10px 22px;
}

.close-menu { display: none; }

.workspace-box,
.profile-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8f9fb;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 12px;
}

.workspace-box {
  margin-bottom: 20px;
}

.workspace-avatar,
.user-avatar,
.top-avatar {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: white;
}

.workspace-avatar {
  background: linear-gradient(135deg, #81d3ff, #3ca0f0);
}

.workspace-box div:nth-child(2),
.profile-box div:nth-child(2) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.workspace-box strong,
.profile-box strong {
  font-size: 12px;
}

.workspace-box small,
.profile-box small {
  color: var(--muted);
  font-size: 10px;
}

.menu-label {
  font-size: 10px;
  color: #a1a8b5;
  font-weight: 700;
  padding: 0 10px 10px;
}

.bottom-space { margin-top: 22px; }

.side-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  border: 0;
  background: transparent;
  color: #697587;
  border-radius: 12px;
  padding: 11px 12px;
  text-align: right;
  font-weight: 600;
}

.nav-item.active {
  background: var(--primary-soft);
  color: var(--primary);
}

.nav-item b {
  margin-right: auto;
  background: #e8e1ff;
  color: var(--primary);
  border-radius: 8px;
  padding: 2px 6px;
  font-size: 10px;
}

.sidebar-footer {
  display: flex;
  align-items: center;
  gap: 9px;
  background: #faf8ff;
  border: 1px solid #f1ebff;
  border-radius: 12px;
  padding: 12px 10px;
  margin-top: auto;
  margin-bottom: 18px;
}

.upgrade-icon {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #6a4fe6;
  background: #f0ebff;
}

.sidebar-footer div:nth-child(2) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebar-footer strong { font-size: 11px; }
.sidebar-footer small { font-size: 9px; color: var(--muted); }

.profile-box {
  background: white;
}

.user-avatar {
  background: linear-gradient(135deg, #bdeddd, #59c49c);
  color: #127b5a;
}

.main-panel {
  flex: 1;
  min-width: 0;
}

.topbar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  min-height: 82px;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid var(--border);
  padding: 0 32px;
}

.menu-button {
  display: none;
  background: transparent;
  color: #6e7788;
}

.crumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9aa6b9;
  font-size: 12px;
}

.crumbs strong {
  color: #2b3447;
}

.top-actions {
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 14px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 270px;
  background: #f7f9fc;
  border: 1px solid var(--border);
  border-radius: 11px;
  padding: 8px 12px;
  color: var(--muted);
}

.search-box input {
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-size: 12px;
  color: var(--text);
}

.icon-button {
  position: relative;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  background: #f7f9fc;
  color: #778097;
  border-radius: 10px;
  border: 1px solid var(--border);
}

.badge {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f15d5d;
  border: 2px solid white;
  top: 3px;
  right: 4px;
}

.top-avatar {
  background: linear-gradient(135deg, #7055f0, #5c48d7);
}

.alerts-box {
  position: absolute;
  left: 32px;
  top: 72px;
  width: 240px;
  padding: 14px 15px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow);
  z-index: 3;
}

.alerts-box strong {
  display: block;
  font-size: 12px;
  margin-bottom: 6px;
}

.alerts-box p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.page-wrap {
  padding: 30px 30px 18px;
  max-width: 1500px;
}

.page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--muted);
  font-size: 10px;
}

.page-header h1 {
  margin: 0;
  font-size: clamp(24px, 2vw, 32px);
}

.subheading {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 12px;
}

.small-gap { padding-inline: 16px; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 15px;
  margin-bottom: 18px;
}

.stat-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px 16px 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 120px;
  overflow: hidden;
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  flex: none;
}

.stat-icon.purple { background: #eeeaff; color: #7055ea; }
.stat-icon.green { background: #eafaf3; color: #2ea97f; }
.stat-icon.orange { background: #fff3e7; color: #e59447; }
.stat-icon.blue { background: #eaf3ff; color: #4b8be7; }

.stat-info {
  min-width: 0;
}

.stat-info p {
  margin: 0 0 4px;
  font-size: 10px;
  color: var(--muted);
}

.stat-value {
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.2px;
}

.stat-value small { font-size: 10px; color: var(--muted); }

.stat-info > span {
  display: block;
  margin-top: 4px;
  color: #eb6d69;
  font-size: 10px;
}

.stat-info > span.positive { color: var(--success); }

.stat-info > span small {
  display: inline-block;
  margin-right: 4px;
  color: var(--muted);
}

.sparkline {
  position: absolute;
  left: 16px;
  bottom: 14px;
  display: flex;
  align-items: end;
  gap: 3px;
  height: 30px;
  opacity: 0.8;
}

.sparkline span {
  width: 4px;
  background: linear-gradient(180deg, #d4c8ff, #a18af8);
  border-radius: 3px;
}

.sparkline span:nth-child(1) { height: 7px; }
.sparkline span:nth-child(2) { height: 15px; }
.sparkline span:nth-child(3) { height: 10px; }
.sparkline span:nth-child(4) { height: 18px; }
.sparkline span:nth-child(5) { height: 13px; }
.sparkline span:nth-child(6) { height: 25px; }

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(330px, 0.95fr);
  gap: 18px;
  margin-bottom: 18px;
}

.panel {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 18px;
}

.chart-panel {
  padding: 19px 18px 12px;
  min-height: 360px;
}

.panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.panel-header h2,
.insight-head h2 {
  margin: 0;
  font-size: 15px;
}

.panel-header p,
.insight-head p {
  font-size: 10px;
  color: var(--muted);
  margin: 4px 0 0;
}

.select-button {
  padding: 8px 10px;
  font-size: 10px;
  border-radius: 8px;
}

.legend {
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 20px 0 8px;
  font-size: 10px;
  color: #7b8798;
}

.legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.dot.income { background: var(--primary); }
.dot.expense { background: var(--success); }

.chart-box {
  height: 250px;
  direction: ltr;
}

.insight-panel {
  padding: 19px 18px;
}

.insight-head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ai-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(145deg, #efe6ff, #e4d9ff);
  color: #6a4fe6;
  display: grid;
  place-items: center;
}

.live-pill {
  margin-right: auto;
  background: #ebfaf3;
  color: #2e9f78;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 9px;
  font-weight: 700;
}

.insight-block {
  margin-top: 18px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #f8f5ff;
  border: 1px solid #efe9ff;
  border-radius: 12px;
  padding: 13px 12px;
}

.insight-badge {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: #e8e0ff;
  color: #6d52e6;
  display: grid;
  place-items: center;
}

.insight-block strong,
.insight-row strong {
  font-size: 11px;
}

.insight-block p,
.insight-row p {
  margin: 5px 0 0;
  font-size: 11px;
  color: #5f6980;
  line-height: 1.7;
}

.insight-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  margin-top: 8px;
}

.mini-icon.purple { background: #f0ecff; color: #7055ea; }
.mini-icon.amber { background: #fff3e7; color: #e59447; }

.text-button {
  margin-top: 15px;
  background: transparent;
  color: #634ae1;
  font-weight: 700;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
}

.table-panel {
  padding: 18px 20px 6px;
}

.outline-button {
  background: white;
}

.table-wrap {
  overflow: auto;
}

table {
  width: 100%;
  min-width: 670px;
  border-collapse: collapse;
}

th {
  text-align: right;
  padding: 11px 8px;
  color: #9aa4b8;
  font-size: 10px;
  font-weight: 600;
  border-bottom: 1px solid var(--border);
}

td {
  padding: 12px 8px;
  border-bottom: 1px solid #f1f3f7;
  font-size: 11px;
  color: #454d5e;
}

.invoice-id {
  color: #6955d6;
}

.client-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.client-box span {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  background: #f0edff;
  color: #6b52ea;
  display: grid;
  place-items: center;
  font-size: 10px;
  font-weight: 700;
}

.muted { color: #9ca7b8; }

.status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  font-size: 9px;
  padding: 5px 8px;
  font-weight: 700;
}

.status.success {
  color: #1d9b6c;
  background: var(--success-soft);
}

.status.warning {
  color: #c7832a;
  background: var(--warning-soft);
}

.status.danger {
  color: #d45d5a;
  background: var(--danger-soft);
}

.more-button {
  background: transparent;
  border: 0;
  color: #8a93a6;
  padding: 4px;
}

.footer-bar {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #9da6b4;
  font-size: 10px;
  padding: 22px 4px 8px;
}

@media (max-width: 1100px) {
  .login-panel {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .login-visual {
    min-height: 320px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .sidebar {
    position: fixed;
    top: 0;
    right: -280px;
    bottom: 0;
    z-index: 30;
    width: 260px;
    box-shadow: -12px 0 30px rgba(19, 24, 40, 0.16);
    transition: right 0.22s ease;
  }

  .sidebar.open {
    right: 0;
  }

  .close-menu {
    display: block;
    margin-right: auto;
    background: transparent;
    color: #7d879c;
  }

  .menu-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #f7f9fc;
    border: 1px solid var(--border);
    border-radius: 10px;
    width: 36px;
    height: 36px;
  }

  .topbar {
    padding: 0 18px;
  }

  .search-box {
    width: 36px;
    padding: 8px;
    overflow: hidden;
  }

  .search-box input { display: none; }

  .page-wrap {
    padding: 24px 16px 14px;
  }

  .page-header {
    display: block;
  }

  .primary-button.small-gap {
    margin-top: 14px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .chart-panel,
  .insight-panel,
  .table-panel {
    padding-left: 15px;
    padding-right: 15px;
  }

  .footer-bar {
    flex-direction: column;
    gap: 4px;
  }
}

@media (max-width: 460px) {
  .login-screen { padding: 16px; }
  .login-visual { padding: 24px 20px; }
  .login-form-wrap { padding: 22px 18px; }
  .heading-block h2 { font-size: 28px; }
  .brand-block h1 { font-size: 26px; }
  .feature-grid { grid-template-columns: 1fr; }
}
