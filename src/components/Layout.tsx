import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/skill', label: 'Skill' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <Link to="/" className="logo" onClick={closeMenu}>
          Portfolio
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Portfolio. Built with React & TypeScript.</p>
      </footer>
    </>
  )
}
