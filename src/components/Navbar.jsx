import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

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
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-0' : 'bg-primary/90 py-0'
      }`}
      style={scrolled ? {} : {}}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <a href="#home" className="flex items-center flex-shrink-0 group">
            <img
              src="/images/logo-mark.png"
              alt="Career Visa"
              style={{ height: 40, width: 'auto', mixBlendMode: 'screen' }}
              className="group-hover:opacity-90 transition-opacity"
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
          <div className="flex items-center gap-3">
            <a
              href="tel:+91XXXXXXXXXX"
              className="hidden md:flex items-center gap-1.5 text-accent font-body text-sm hover:text-accent-light transition-colors"
            >
              <Phone size={14} />
              <span className="font-bold">+91 XXXXXXXXXX</span>
            </a>
            <a href="#register" className="btn-primary hidden sm:inline-flex !py-2 !px-4 text-xs">
              Register Free
            </a>
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-accent font-body text-sm px-4 py-3 rounded-xl transition-colors hover:bg-white/5 font-bold uppercase tracking-wide"
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
