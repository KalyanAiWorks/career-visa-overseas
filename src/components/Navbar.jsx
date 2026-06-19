import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Jobs',       href: '#jobs' },
  { label: 'Countries',  href: '#countries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact',    href: '#register' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-0' : 'bg-primary/90 py-0'
      }`}
      style={{ top: 'var(--announcement-bar-height, 0px)' }}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <a href="#home" onClick={() => setMenuOpen(false)} className="flex items-center flex-shrink-0 group min-h-11">
            <img
              src="/images/logo-mark.png"
              alt="Career Visa"
              style={{ width: 'auto' }}
              className="h-[50px] sm:h-[56px] group-hover:opacity-90 transition-opacity"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/75 hover:text-accent font-body text-[13px] font-bold px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/5 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Show phone icon only on mobile, full text on larger screens */}
            <a
              href="tel:+918978537368"
              className="hidden sm:flex md:hidden lg:flex items-center gap-1.5 text-accent font-body text-sm hover:text-accent-light transition-colors min-h-[44px] px-2"
              aria-label="Call +91 89785 37368"
            >
              <Phone size={16} />
              <span className="font-bold hidden md:inline">+91 89785 37368</span>
            </a>
            {/* Mobile-friendly call button */}
            <a
              href="tel:+918978537368"
              className="sm:hidden flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              aria-label="Call now"
            >
              <Phone size={20} />
            </a>
            {/* Mobile-friendly Register button */}
            <a
              href="#register"
              className="hidden sm:inline-flex btn-primary !py-2 !px-3 sm:!px-4 text-xs min-h-[44px]"
            >
              Register Free
            </a>
            <a
              href="#register"
              className="sm:hidden flex items-center justify-center px-3 py-2 min-h-[44px] bg-accent text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-accent-dark transition-colors"
            >
              Register
            </a>
            <button
              className="lg:hidden text-white w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ background: 'rgba(10,22,40,0.97)', backdropFilter: 'blur(16px)' }}
        >
          <div
            className="container-main py-4 flex flex-col gap-1 overflow-y-auto"
            style={{ maxHeight: 'calc(100dvh - var(--announcement-bar-height, 0px) - 4rem)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-accent font-body text-sm px-4 py-3 rounded-xl transition-colors hover:bg-white/5 font-bold uppercase tracking-wide min-h-11 flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 justify-center"
            >
              Register Free — It's 100% Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
