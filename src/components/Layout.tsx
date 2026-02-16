import { useState, useEffect } from 'react'
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

  const toggleMenu = () => setMenuOpen((o) => !o)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu on route change (e.g. after clicking a link)
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  return (
    <>
      <header className="header">
        <Link to="/" className="logo" onClick={closeMenu}>
          Portfolio
        </Link>
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        {/* Backdrop: tap outside to close */}
        <div
          className={`nav-backdrop ${menuOpen ? 'nav-backdrop-visible' : ''}`}
          onClick={closeMenu}
          role="presentation"
          aria-hidden="true"
        />
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
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
        <p>© {new Date().getFullYear()} Khaleel  Portfolio. Built with React & TypeScript.</p>
      </footer>
    </>
  )
}
