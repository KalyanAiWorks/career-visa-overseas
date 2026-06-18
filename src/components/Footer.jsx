import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Award, Shield, Send, ExternalLink } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const quickLinks = [
  { label: 'About Us',          href: '#about' },
  { label: 'Job Categories',    href: '#jobs' },
  { label: 'Countries We Serve',href: '#countries' },
  { label: 'How It Works',      href: '#how-it-works' },
  { label: 'For Employers',     href: '#employer' },
  { label: 'FAQ',               href: '#faq' },
  { label: 'Blog & Guides',     href: '#blog' },
  { label: 'Register / Apply',  href: '#register' },
]

const socialLinks = [
  { icon: <FacebookIcon />,  href: '#',                               label: 'Facebook'  },
  { icon: <InstagramIcon />, href: '#',                               label: 'Instagram' },
  { icon: <LinkedInIcon />,  href: '#',                               label: 'LinkedIn'  },
  { icon: <MessageCircle size={17} />, href: 'https://wa.me/91XXXXXXXXXX', label: 'WhatsApp' },
]

const certBadges = [
  { icon: <Shield size={15} />,  label: 'MEA Licensed',     sub: 'Ministry of External Affairs' },
  { icon: <Award size={15} />,   label: 'ISO 9001:2015',    sub: 'Quality Certified'            },
  { icon: <Shield size={15} />,  label: 'Govt. Approved',   sub: 'Emigration Act 1983'          },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subDone, setSubDone] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email) setSubDone(true)
  }

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10" style={{ background: 'rgba(245,166,35,0.08)' }}>
        <div className="container-main py-7 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h3 className="font-heading font-black text-lg text-white mb-1">Get Latest Gulf Job Alerts</h3>
              <p className="text-white/50 font-body text-sm">New openings delivered to your inbox every week — free.</p>
            </div>
            {subDone ? (
              <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/30 rounded-xl px-4 sm:px-5 py-3 text-green-400 font-bold text-sm sm:text-base text-center">
                ✓ Subscribed! Watch your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col min-[390px]:flex-row gap-2 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 min-w-0 md:w-64 bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-3 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-accent transition-colors min-h-11"
                />
                <button type="submit" className="btn-primary flex-shrink-0 w-full min-[390px]:w-auto">
                  <Send size={15} />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-main py-12 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex mb-5">
              <img
                src="/images/logo.png"
                alt="Career Visa"
                style={{ height: 48, width: 'auto' }}
                className="hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-5">
              A government-licensed overseas manpower recruitment consultancy based in Hyderabad, India.
              Placing skilled workers across the Gulf since 2014.
            </p>

            {/* Certification badges */}
            <div className="space-y-2 mb-5">
              {certBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-3 py-2">
                  <span className="text-accent flex-shrink-0">{b.icon}</span>
                  <div>
                    <div className="text-white font-bold text-xs">{b.label}</div>
                    <div className="text-white/40 text-[10px]">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-heading font-black text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                     className="text-white/50 hover:text-accent font-body text-sm transition-colors flex items-center gap-2 min-h-11">
                    <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-black text-xs uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { href: 'tel:+91XXXXXXXXXX', icon: <Phone size={15} />, label: 'Phone', value: '+91 XXXXXXXXXX' },
                { href: 'mailto:info@careervisa.in', icon: <Mail size={15} />, label: 'Email', value: 'info@careervisa.in' },
                { href: 'https://wa.me/91XXXXXXXXXX', icon: <MessageCircle size={15} />, label: 'WhatsApp', value: '+91 XXXXXXXXXX' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                     className="flex items-start gap-3 text-white/50 hover:text-accent transition-colors group min-h-11">
                    <span className="mt-0.5 flex-shrink-0 group-hover:text-accent">{item.icon}</span>
                    <div>
                      <div className="text-white/30 font-body text-[10px] uppercase tracking-wide mb-0.5">{item.label}</div>
                      <div className="font-body text-sm">{item.value}</div>
                    </div>
                  </a>
                </li>
              ))}
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white/30 font-body text-[10px] uppercase tracking-wide mb-0.5">Office</div>
                    <div className="font-body text-sm">H.No 2-94, 3rd Floor, Gangaram,<br />Annapurna Enclave, Chanda Nagar,<br />Serilingampalle (M), Hyderabad,<br />Telangana 500050</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-heading font-black text-xs uppercase tracking-widest mb-5">Our Location</h4>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-card">
              <iframe
                title="Career Visa Office Location — Chanda Nagar, Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.3456!3d17.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAnnapurna%20Enclave%2C%20Chanda%20Nagar%2C%20Serilingampalle%2C%20Hyderabad%2C%20Telangana%20500050!5e0!3m2!1sen!2sin!4v1718000000000"
                width="100%"
                height="180"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=H.No+2-94,+3rd+Floor,+Gangaram,+Annapurna+Enclave,+Chanda+Nagar,+Serilingampalle,+Hyderabad,+Telangana+500050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent font-body text-xs mt-2 hover:underline"
            >
              <ExternalLink size={11} /> Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/30 font-body text-[11px] sm:text-xs">
            © 2026 Career Visa. All rights reserved.<br className="sm:hidden" /> Licensed Overseas Recruitment Agency | MEA Reg. No: XXXXXXXXX
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 flex-shrink-0">
            <a href="#" className="text-white/30 hover:text-accent font-body text-xs transition-colors min-h-[44px] flex items-center">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-accent font-body text-xs transition-colors min-h-[44px] flex items-center">Terms</a>
            <a href="#" className="text-white/30 hover:text-accent font-body text-xs transition-colors min-h-[44px] flex items-center">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
