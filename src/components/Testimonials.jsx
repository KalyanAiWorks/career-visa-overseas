import { useState, useEffect, useRef, useCallback } from 'react'
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Electrician',
    location: 'Dubai, UAE',
    flag: '🇦🇪',
    text: 'Career Visa helped me secure a construction job in Dubai within just 45 days. The entire process was smooth — from document collection to visa stamping. They called me with every update. 100% recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    salary: 'AED 2,800/mo',
    placed: 'Feb 2026',
  },
  {
    name: 'Priya Sharma',
    role: 'Staff Nurse',
    location: 'Riyadh, Saudi Arabia',
    flag: '🇸🇦',
    text: 'Professional and reliable service. They helped me get my nursing job at a reputed hospital in Saudi Arabia. All document attestation and visa work was handled perfectly. Very thankful!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    salary: 'SAR 5,500/mo',
    placed: 'Jan 2026',
  },
  {
    name: 'Mohammed Rafi',
    role: 'Welder (6G)',
    location: 'Doha, Qatar',
    flag: '🇶🇦',
    text: 'Best consultancy in Hyderabad for Gulf jobs, no doubt. They are transparent about fees and never made any false promises. I got placed in Qatar within 40 days. My family is very happy!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    salary: 'QAR 3,200/mo',
    placed: 'Mar 2026',
  },
  {
    name: 'Suresh Reddy',
    role: 'Security Guard',
    location: 'Kuwait City, Kuwait',
    flag: '🇰🇼',
    text: 'They handled everything from the interview call to visa stamping. I did not have to worry about a single document. Career Visa is a truly trustworthy agency. Already referred 3 friends!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    salary: 'KWD 185/mo',
    placed: 'Apr 2026',
  },
  {
    name: 'Lakshmi Devi',
    role: 'Housekeeping Supervisor',
    location: 'Abu Dhabi, UAE',
    flag: '🇦🇪',
    text: 'I got placed in a 5-star hotel in Abu Dhabi through Career Visa. The salary package and benefits are exactly what they promised. The pre-departure briefing prepared me very well for life abroad.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    salary: 'AED 2,100/mo',
    placed: 'Dec 2025',
  },
  {
    name: 'Venkatesh Naidu',
    role: 'Pipe Fitter',
    location: 'Muscat, Oman',
    flag: '🇴🇲',
    text: 'Trusted agency with genuine connections to employers in Oman. The pre-departure briefing was very helpful — I knew exactly what to expect when I arrived. No surprise fees, no delays.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
    salary: 'OMR 400/mo',
    placed: 'Nov 2025',
  },
]

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-card border border-border h-full flex flex-col gap-3 sm:gap-4">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="fill-accent text-accent sm:w-[14px] sm:h-[14px]" />
          ))}
        </div>
        <div className="flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 flex-shrink-0">
          <CheckCircle size={8} className="text-green-500 sm:w-3.5 sm:h-3.5" />
          <span className="text-green-600 font-bold text-[9px] sm:text-[10px] uppercase tracking-wide whitespace-nowrap">Verified</span>
        </div>
      </div>

      <div className="relative flex-1">
        <Quote size={14} className="text-accent/20 absolute -top-1 -left-1 sm:w-5 sm:h-5" />
        <p className="text-muted font-body text-xs sm:text-base leading-relaxed pl-3 sm:pl-4 line-clamp-4 sm:line-clamp-none">"{t.text}"</p>
      </div>

      {/* Salary + date - hidden on mobile */}
      <div className="hidden sm:flex flex-wrap gap-2">
        <span className="bg-accent/10 text-accent font-bold text-[10px] sm:text-xs px-2 py-1 rounded-full">{t.salary}</span>
        <span className="bg-surface text-muted font-bold text-[10px] sm:text-xs px-2 py-1 rounded-full">Placed {t.placed}</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 border-t border-border pt-3 sm:pt-4">
        <img
          src={t.avatar}
          alt={`${t.name} — ${t.role} placed by Career Visa Overseas in ${t.location}`}
          loading="lazy"
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-accent/20"
        />
        <div className="flex-1 min-w-0">
          <div className="text-primary font-heading font-bold text-xs sm:text-sm">{t.name}</div>
          <div className="text-muted font-body text-[10px] sm:text-xs leading-snug">{t.role} · {t.location} {t.flag}</div>
        </div>
        {/* Video placeholder - hidden on mobile */}
        <button
          aria-label="Watch video testimonial"
          className="hidden sm:flex w-11 h-11 rounded-full bg-primary items-center justify-center hover:bg-accent transition-colors group flex-shrink-0"
        >
          <Play size={13} className="text-white group-hover:scale-110 transition-transform" fill="white" />
        </button>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const total = testimonials.length
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const autoRef = useRef(null)
  const titleRef = useScrollAnimation()

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const go = useCallback((dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((c) => (c + dir + total) % total)
    setTimeout(() => setIsAnimating(false), 450)
  }, [isAnimating, total])

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => go(1), 5000)
    return () => clearInterval(autoRef.current)
  }, [go])

  // On mobile, show 1 card at a time. On larger screens, show 3 cards.
  const VISIBLE = isMobile ? 1 : 3
  const visible = Array.from({ length: VISIBLE }, (_, i) => (current + i) % total)

  return (
    <section id="testimonials" className="py-8 sm:py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-6 sm:mb-14" ref={titleRef}>
          <div className="inline-block bg-accent/10 text-accent font-body text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">Success Stories</div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2 sm:mb-3">What Our Placed Candidates Say</h2>
          <p className="hidden sm:block text-muted font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real stories from real people whose lives changed through Career Visa.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            style={{ transition: 'opacity 0.4s ease' }}
          >
            {visible.map((idx, pos) => (
              <div
                key={`${idx}-${pos}`}
                className="animate-fade-in"
              >
                <TestimonialCard t={testimonials[idx]} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full border-2 border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots - show fewer on mobile */}
            <div className="flex gap-2">
              {testimonials.slice(0, isMobile ? total : 1).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (!isAnimating) { setIsAnimating(true); setCurrent(i); setTimeout(() => setIsAnimating(false), 450) } }}
                  className="w-11 h-11 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-all duration-300"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-accent'
                      : 'w-2.5 h-2.5 bg-border hover:bg-accent/40'
                    }`}
                  />
                </button>
              ))}
              {!isMobile && Array.from({ length: Math.min(total - 1, 2) }, (_, i) => (
                <button
                  key={`hidden-${i}`}
                  className="hidden"
                  aria-hidden="true"
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full border-2 border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
