import { useState, useEffect, useRef } from 'react'
import { UserPlus, Briefcase, ChevronDown, Shield, Award, Star, ArrowRight } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'

/* ─────────────────────────────────────────────
   PremiumCTA — rotating border + glow + shine
───────────────────────────────────────────── */
function PremiumCTA({ href, children, variant = 'primary', icon, jiggleOffset = 0 }) {
  const [hovered,  setHovered]  = useState(false)
  const [jiggling, setJiggling] = useState(false)
  const [shining,  setShining]  = useState(false)
  const timerRef = useRef(null)
  const isPrimary = variant === 'primary'

  // Jiggle every 5 s (primary only), staggered by jiggleOffset
  useEffect(() => {
    if (!isPrimary) return
    const boot = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setJiggling(true)
        setTimeout(() => setJiggling(false), 600)
      }, 5000)
    }, jiggleOffset)
    return () => { clearTimeout(boot); clearInterval(timerRef.current) }
  }, [isPrimary, jiggleOffset])

  function onEnter() {
    setHovered(true)
    setShining(true)
    setTimeout(() => setShining(false), 620)
  }

  const conicGold  = 'conic-gradient(from 0deg, #f5a623 0deg, #ffb740 55deg, #fff8e1 100deg, #ffb740 145deg, #f5a623 185deg, rgba(10,22,40,0) 215deg, rgba(10,22,40,0) 360deg)'
  const conicWhite = 'conic-gradient(from 0deg, rgba(255,255,255,0.9) 0deg, rgba(255,255,255,0.3) 60deg, transparent 110deg, rgba(255,255,255,0.3) 210deg, rgba(255,255,255,0.9) 270deg, transparent 360deg)'

  return (
    <div
      className="relative inline-flex flex-shrink-0 max-w-full"
      style={{ animation: jiggling ? 'btnJiggle 0.6s ease' : undefined }}
    >
      {/* ── Rotating gradient border ring ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: 13, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <div style={{
          position: 'absolute',
          width: '200%', height: '200%',
          top: '-50%', left: '-50%',
          background: isPrimary ? conicGold : conicWhite,
          animation: `rotateConic ${isPrimary ? '2.5s' : '3.5s'} linear infinite`,
          transformOrigin: 'center center',
        }} />
      </div>

      {/* ── Button ── */}
      <a
        href={href}
        className="relative overflow-hidden inline-flex items-center gap-2.5 font-heading font-bold text-sm sm:text-base uppercase tracking-wide w-full sm:w-auto justify-center sm:justify-start min-h-11 max-w-full"
        style={{
          zIndex: 1,
          margin: 2,
          borderRadius: 11,
          padding: '12px 18px',
          color: 'white',
          background: isPrimary
            ? (hovered ? '#ffb740' : '#f5a623')
            : (hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.04)'),
          border: isPrimary ? 'none' : '1.5px solid rgba(255,255,255,0.7)',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 0.22s cubic-bezier(.34,1.56,.64,1), background 0.18s ease, box-shadow 0.18s ease',
          animation: isPrimary
            ? 'btnGlow 2.2s ease-in-out infinite'
            : 'btnGlowWhite 2.8s ease-in-out infinite',
        }}
        onMouseEnter={onEnter}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Shine sweep */}
        {shining && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute', top: 0, bottom: 0,
              width: '45%',
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
              animation: 'btnShine 0.6s ease-out forwards',
              pointerEvents: 'none', zIndex: 2,
            }}
          />
        )}
        {/* Leading icon */}
        {icon && <span style={{ position: 'relative', zIndex: 3, flexShrink: 0 }}>{icon}</span>}
        {/* Label */}
        <span className="min-w-0 whitespace-normal text-center leading-tight" style={{ position: 'relative', zIndex: 3 }}>{children}</span>
        {/* Trailing arrow — slides on hover (primary only) */}
        {isPrimary && (
          <span style={{
            position: 'relative', zIndex: 3, flexShrink: 0,
            transition: 'transform 0.2s ease',
            transform: hovered ? 'translateX(5px)' : 'translateX(0)',
          }}>
            <ArrowRight size={17} />
          </span>
        )}
      </a>
    </div>
  )
}

/* Bouncing arrow pointer next to primary CTA */
function BouncingPointer() {
  return (
    <span
      aria-hidden="true"
      style={{ animation: 'pointerBounce 0.9s ease-in-out infinite', display: 'inline-flex', alignItems: 'center' }}
    >
      <svg viewBox="0 0 20 20" width="22" height="22" fill="none">
        <path d="M4 10h12M12 5l5 5-5 5" stroke="#f5a623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'

const rotatingJobs = [
  'Now Hiring: Electricians for Dubai  🇦🇪',
  'Now Hiring: Nurses for Saudi Arabia  🇸🇦',
  'Now Hiring: Security Guards for Qatar  🇶🇦',
  'Now Hiring: Welders for Oman  🇴🇲',
  'Now Hiring: IT Engineers for UAE  🇦🇪',
]

const trustBadges = [
  { icon: <Shield size={14} />, label: 'Govt. Licensed'      },
  { icon: <Award size={14} />,  label: 'ISO Certified'       },
  { icon: <Star size={14} />,   label: '10+ Years Experience'},
  { icon: <Shield size={14} />, label: 'MEA Approved'        },
]

function StatCounter({ end, suffix = '', label }) {
  const [count, ref] = useCountUp(end, 2200)
  return (
    <div ref={ref} className="text-center px-2 min-[390px]:px-3 sm:px-4 py-3">
      <div className="text-3xl sm:text-4xl font-heading font-black text-accent leading-none">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/50 font-body text-xs uppercase tracking-widest mt-1">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [jobIndex, setJobIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setJobIndex((i) => (i + 1) % rotatingJobs.length)
        setFade(true)
      }, 350)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: '#0a1628' }}
    >
      {/* ── Fallback image (behind video, shows if video fails) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${FALLBACK_IMG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* ── Video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(10,22,40,0.75)', zIndex: 2 }}
        aria-hidden="true"
      />

      {/* ── All hero content ── */}
      <div className="container-main relative py-28 sm:py-32 md:py-40 lg:py-44" style={{ zIndex: 3 }}>

        {/* Rotating jobs ticker */}
        <div
          className="inline-flex items-center gap-2 bg-white/5 border border-accent/20 rounded-full px-3 sm:px-4 py-2 mb-6 max-w-full overflow-hidden"
          style={{ transition: 'opacity 0.35s ease', opacity: fade ? 1 : 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span className="text-accent font-body text-xs sm:text-sm font-bold truncate">{rotatingJobs[jobIndex]}</span>
        </div>

        <h1 className="text-[1.75rem] min-[375px]:text-[2rem] min-[390px]:text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] mb-4 max-w-4xl">
          Your Gateway to
          <span className="block text-gradient">Global Careers</span>
          <span className="block text-white text-xl min-[375px]:text-2xl min-[390px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black opacity-90">Worldwide</span>
        </h1>

        <p className="text-white/70 font-body text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
          We connect skilled Indian workers with verified employers across 14+ countries
          in the Gulf, Europe, Asia Pacific &amp; North America. Registration is always free.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
          <PremiumCTA
            href="#register"
            variant="primary"
            icon={<UserPlus size={19} />}
            jiggleOffset={1500}
          >
            Register as Candidate — Free
          </PremiumCTA>

          <span className="hidden sm:inline-flex">
            <BouncingPointer />
          </span>

          <PremiumCTA
            href="#employer"
            variant="outline"
            icon={<Briefcase size={19} />}
          >
            Employer Enquiry
          </PremiumCTA>
        </div>

        {/* Stats — 2×2 on mobile, 4 cols on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/10 rounded-2xl bg-white/5 mb-8 overflow-hidden w-full sm:w-auto sm:inline-grid">
          <div className="border-r border-b sm:border-b-0 border-white/10">
            <StatCounter end={10}   suffix="+" label="Years Experience"  />
          </div>
          <div className="border-b sm:border-b-0 sm:border-r border-white/10">
            <StatCounter end={5000} suffix="+" label="Candidates Placed" />
          </div>
          <div className="border-r sm:border-r border-white/10">
            <StatCounter end={200}  suffix="+" label="Employer Partners" />
          </div>
          <div>
            <StatCounter end={6}    suffix=""  label="Gulf Countries"    />
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {trustBadges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 rounded-full px-2.5 sm:px-3 py-1.5 text-white/70 text-xs font-body font-bold"
            >
              <span className="text-accent">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#jobs-ticker"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        style={{ zIndex: 3 }}
      >
        <ChevronDown size={22} className="animate-bounce" />
      </a>
    </section>
  )
}
