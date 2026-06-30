import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react'

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
  { label: 'Register / Apply',  href: '#register' },
]

const socialLinks = [
  { icon: <FacebookIcon />,  href: 'https://www.facebook.com/careervisaoverseas',          label: 'Facebook'  },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/careervisaoverseas',         label: 'Instagram' },
  { icon: <LinkedInIcon />,  href: 'https://www.linkedin.com/company/career-visa-overseas',label: 'LinkedIn'  },
  { icon: <MessageCircle size={17} />, href: 'https://wa.me/918978537368',                 label: 'WhatsApp'  },
]


export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main footer grid */}
      <div className="container-main py-8 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {/* Brand column - full width on mobile */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex mb-4 sm:mb-5">
              <img
                src="/images/logo.png"
                alt="Career Visa"
                style={{ height: 36, width: 'auto', mixBlendMode: 'lighten' }}
                className="sm:h-[48px] hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-5">
              A government-licensed overseas manpower recruitment consultancy based in Hyderabad, India.
              Placing skilled workers across the Gulf since 2014.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
                >
                  <span className="scale-90 sm:scale-100">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-heading font-black text-xs uppercase tracking-widest mb-3 sm:mb-5">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:block sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                     className="text-white/50 hover:text-accent font-body text-xs sm:text-sm transition-colors flex items-center gap-2 min-h-11 sm:min-h-11">
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
                { href: 'tel:+918978537368', icon: <Phone size={15} />, label: 'Phone', value: '+91 89785 37368' },
                { href: 'mailto:info@careervisaoverseas.com', icon: <Mail size={15} />, label: 'Email', value: 'info@careervisaoverseas.com' },
                { href: 'mailto:hr@careervisaoverseas.com', icon: <Mail size={15} />, label: 'HR Email', value: 'hr@careervisaoverseas.com' },
                { href: 'https://wa.me/918978537368', icon: <MessageCircle size={15} />, label: 'WhatsApp', value: '+91 89785 37368' },
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
            <h4 className="text-white font-heading font-black text-xs uppercase tracking-widest mb-3 sm:mb-5">Our Location</h4>
            {/* Hidden on mobile */}
            <div className="hidden sm:block rounded-2xl overflow-hidden border border-white/10 shadow-card">
              <iframe
                title="Career Visa Overseas Office — Chanda Nagar, Hyderabad"
                src="https://maps.google.com/maps?q=17.495333,78.327698&z=17&output=embed"
                width="100%"
                height="180"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=17.495333,78.327698"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent font-body text-xs mt-1 sm:mt-2 hover:underline bg-white/5 border border-white/10 rounded-xl px-3 py-2 sm:bg-transparent sm:border-0 sm:px-0 sm:py-0"
            >
              <MapPin size={11} className="sm:hidden" />
              <ExternalLink size={11} className="hidden sm:block" /> Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-main py-3 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
          <p className="text-white/30 font-body text-[10px] sm:text-xs px-4 sm:px-0">
            © 2026 Career Visa Overseas. <span className="sm:hidden"><br /></span>All rights reserved. Licensed Overseas Recruitment Agency
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1 flex-shrink-0">
            <a href="#" className="text-white/30 hover:text-accent font-body text-[10px] sm:text-xs transition-colors min-h-[36px] sm:min-h-[44px] flex items-center">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-accent font-body text-[10px] sm:text-xs transition-colors min-h-[36px] sm:min-h-[44px] flex items-center">Terms</a>
            <a href="#" className="text-white/30 hover:text-accent font-body text-[10px] sm:text-xs transition-colors min-h-[36px] sm:min-h-[44px] flex items-center">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
