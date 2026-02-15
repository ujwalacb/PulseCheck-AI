import { Outlet, Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/patient-input', label: 'New Triage' },
  { path: '/triage', label: 'Triage Results' },
  { path: '/history', label: 'Patient History' },
  { path: '/admin', label: 'Admin' },
]

export default function Layout() {
  const location = useLocation()

  return (
    <>
      <header className="layout-header">
        <div className="container layout-inner">
          <Link to="/patient-input" className="logo">
            <span className="logo-icon">◆</span>
            <span>PulseCheck AI</span>
          </Link>
          <nav className="nav">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={location.pathname === path ? 'nav-link active' : 'nav-link'}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link to="/history" className="btn btn-ghost">History</Link>
            <Link to="/" className="btn btn-secondary">Sign out</Link>
          </div>
        </div>
      </header>
      <main className="layout-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}
