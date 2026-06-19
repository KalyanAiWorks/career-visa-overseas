import { useEffect, useState } from 'react'

const PARTICLES = [
  { id: 0, top: '13%', left: '17%', delay: '0.2s', size: 3, dur: '2.8s' },
  { id: 1, top: '7%', left: '55%', delay: '0.9s', size: 2, dur: '3.3s' },
  { id: 2, top: '15%', left: '83%', delay: '1.4s', size: 4, dur: '2.6s' },
  { id: 3, top: '38%', left: '4%', delay: '0.5s', size: 2, dur: '3.0s' },
  { id: 4, top: '52%', left: '94%', delay: '1.1s', size: 3, dur: '2.4s' },
  { id: 5, top: '67%', left: '9%', delay: '1.7s', size: 2, dur: '3.5s' },
  { id: 6, top: '77%', left: '53%', delay: '0.7s', size: 4, dur: '2.7s' },
  { id: 7, top: '65%', left: '89%', delay: '1.3s', size: 2, dur: '3.1s' },
  { id: 8, top: '29%', left: '27%', delay: '2.0s', size: 2, dur: '2.9s' },
  { id: 9, top: '61%', left: '73%', delay: '0.4s', size: 3, dur: '2.5s' },
  { id: 10, top: '19%', left: '92%', delay: '1.6s', size: 2, dur: '3.4s' },
  { id: 11, top: '83%', left: '25%', delay: '0.8s', size: 3, dur: '2.2s' },
  { id: 12, top: '87%', left: '76%', delay: '1.9s', size: 2, dur: '3.7s' },
  { id: 13, top: '4%', left: '41%', delay: '2.3s', size: 2, dur: '2.8s' },
  { id: 14, top: '44%', left: '48%', delay: '2.6s', size: 2, dur: '3.2s' },
  { id: 15, top: '91%', left: '60%', delay: '1.0s', size: 3, dur: '2.6s' },
]

export default function LoadingScreen() {
  const [phase, setPhase] = useState('enter')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Progress bar completes at 3s, then fade out
    const t1 = setTimeout(() => setPhase('exit'), 3000)
    const t2 = setTimeout(() => setPhase('gone'), 3800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!mounted || phase === 'gone') return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, #1a2744 0%, #0f1d35 40%, #0a1628 100%)',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'auto',
      }}
    >
      {/* Full-screen ambient gold pulse */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 45% 35% at 50% 45%, rgba(255, 200, 50, 0.12) 0%, transparent 70%)',
          animation: 'cvAmbient 2.5s ease-in-out infinite',
        }}
      />

      {/* Particle sparkles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffffff 0%, #ffd700 50%, transparent 100%)',
            boxShadow: `0 0 ${p.size * 4}px ${p.size * 1.5}px rgba(255, 210, 0, 0.6)`,
            opacity: 0,
            animation: `cvSparkle ${p.dur} ease-in-out ${p.delay} infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── Logo ring assembly ── */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
        }}
      >
        {/* Soft volumetric glow behind logo */}
        <div
          style={{
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 200, 50, 0.32) 0%, rgba(255, 170, 0, 0.15) 40%, transparent 70%)',
            animation: 'cvGlowPulse 2s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />

        {/* Outer slow orbit ring + orbiting glowing bead */}
        <div
          style={{
            position: 'absolute',
            width: 180,
            height: 180,
            borderRadius: '50%',
            border: '1.5px solid rgba(255, 200, 50, 0.18)',
            animation: 'cvOrbit 8s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -6,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#ffd700',
              boxShadow: '0 0 12px 4px rgba(255, 215, 0, 1), 0 0 28px 10px rgba(255, 180, 0, 0.5), 0 0 48px 18px rgba(255, 150, 0, 0.25)',
            }}
          />
        </div>

        {/* SVG conic-style gradient spinner ring */}
        <svg
          viewBox="0 0 160 160"
          style={{
            position: 'absolute',
            width: 160,
            height: 160,
            overflow: 'visible',
            animation: 'cvRingSpin 2s linear infinite',
          }}
        >
          <defs>
            <linearGradient id="ls-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffc107" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#ff8c00" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
            </linearGradient>
            <filter id="ls-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="76"
            fill="none"
            stroke="url(#ls-gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#ls-glow)"
          />
        </svg>

        {/* Counter-rotating inner accent ring */}
        <svg
          viewBox="0 0 120 120"
          style={{
            position: 'absolute',
            width: 120,
            height: 120,
            overflow: 'visible',
            animation: 'cvRingSpinRev 3.5s linear infinite',
          }}
        >
          <defs>
            <linearGradient id="ls-gold2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff4aa" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ffc107" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="url(#ls-gold2)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Logo image with glow */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            animation: 'cvLogoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0,
          }}
        >
          <img
            src="/images/logo-mark.png"
            alt="Career Visa"
            style={{
              height: 80,
              width: 'auto',
              filter: 'drop-shadow(0 0 24px rgba(255, 200, 50, 0.9)) drop-shadow(0 0 60px rgba(255, 180, 0, 0.5)) drop-shadow(0 0 6px rgba(255, 255, 200, 0.7))',
              animation: 'cvLogoGlow 2s ease-in-out 1.2s infinite',
            }}
          />
        </div>
      </div>

      {/* Brand name + shimmer */}
      <div
        style={{
          animation: 'cvSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards',
          opacity: 0,
          marginBottom: 8,
          position: 'relative',
        }}
      >
        <div
          style={{
            fontWeight: 900,
            fontSize: 'clamp(22px, 6vw, 32px)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            display: 'inline-block',
          }}
        >
          Career Visa&nbsp;<span style={{ color: '#ffd700', textShadow: '0 0 24px rgba(255, 215, 0, 0.8)' }}>Overseas</span>
          {/* Shimmer streak */}
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: '-120%',
              width: '60%',
              height: '100%',
              background: 'linear-gradient(105deg, transparent 25%, rgba(255, 255, 255, 0.6) 50%, transparent 75%)',
              animation: 'cvShimmer 3s ease-in-out 1.8s infinite',
              pointerEvents: 'none',
              mixBlendMode: 'overlay',
            }}
          />
        </div>
      </div>

      {/* Gold rule */}
      <div
        style={{
          width: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.9), transparent)',
          marginBottom: 10,
          animation: 'cvRuleExpand 0.6s ease-out 1s forwards',
        }}
      />

      {/* Tagline */}
      <div
        style={{
          animation: 'cvSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards',
          opacity: 0,
          marginBottom: 40,
        }}
      >
        <span
          style={{
            color: 'rgba(255, 205, 55, 0.95)',
            fontSize: 'clamp(11px, 3vw, 13px)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Your Gateway to Global Careers
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #b8860b 0%, #ffd700 40%, #fff4aa 70%, #ffd700 100%)',
            boxShadow: '0 0 14px rgba(255, 210, 0, 1), 0 0 32px rgba(255, 180, 0, 0.6)',
            animation: 'cvProgress 3s cubic-bezier(0.1, 0, 0.2, 1) forwards',
            width: 0,
          }}
        />
      </div>

      <style>{`
        @keyframes cvLogoReveal {
          0% { opacity: 0; transform: scale(0.5); filter: blur(10px); }
          50% { opacity: 1; transform: scale(1.08); filter: blur(0px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0px); }
        }
        @keyframes cvLogoGlow {
          0%, 100% {
            filter: drop-shadow(0 0 24px rgba(255, 200, 50, 0.9))
              drop-shadow(0 0 60px rgba(255, 180, 0, 0.5))
              drop-shadow(0 0 6px rgba(255, 255, 200, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 38px rgba(255, 210, 50, 1))
              drop-shadow(0 0 90px rgba(255, 180, 0, 0.75))
              drop-shadow(0 0 140px rgba(255, 150, 0, 0.35))
              drop-shadow(0 0 8px rgba(255, 255, 220, 1));
          }
        }
        @keyframes cvGlowPulse {
          0%, 100% { transform: scale(0.92); opacity: 0.65; }
          50% { transform: scale(1.22); opacity: 1; }
        }
        @keyframes cvAmbient {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes cvRingSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cvRingSpinRev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes cvOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cvSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes cvRuleExpand {
          to { width: 60px; }
        }
        @keyframes cvShimmer {
          0% { left: -120%; }
          100% { left: 220%; }
        }
        @keyframes cvProgress {
          0% { width: 0%; }
          15% { width: 15%; }
          45% { width: 55%; }
          75% { width: 85%; }
          100% { width: 100%; }
        }
        @keyframes cvSparkle {
          0%, 100% { opacity: 0; transform: scale(0.3) translateY(0px); }
          30% { opacity: 1; transform: scale(1.4) translateY(-12px); }
          65% { opacity: 0.4; transform: scale(0.9) translateY(-6px); }
        }
      `}</style>
    </div>
  )
}
