import { useEffect, useState } from 'react'

const PARTICLES = [
  { id: 0,  top: '13%', left: '17%', delay: '0.2s', size: 3, dur: '2.8s' },
  { id: 1,  top: '7%',  left: '55%', delay: '0.9s', size: 2, dur: '3.3s' },
  { id: 2,  top: '15%', left: '83%', delay: '1.4s', size: 4, dur: '2.6s' },
  { id: 3,  top: '38%', left: '4%',  delay: '0.5s', size: 2, dur: '3.0s' },
  { id: 4,  top: '52%', left: '94%', delay: '1.1s', size: 3, dur: '2.4s' },
  { id: 5,  top: '67%', left: '9%',  delay: '1.7s', size: 2, dur: '3.5s' },
  { id: 6,  top: '77%', left: '53%', delay: '0.7s', size: 4, dur: '2.7s' },
  { id: 7,  top: '65%', left: '89%', delay: '1.3s', size: 2, dur: '3.1s' },
  { id: 8,  top: '29%', left: '27%', delay: '2.0s', size: 2, dur: '2.9s' },
  { id: 9,  top: '61%', left: '73%', delay: '0.4s', size: 3, dur: '2.5s' },
  { id: 10, top: '19%', left: '92%', delay: '1.6s', size: 2, dur: '3.4s' },
  { id: 11, top: '83%', left: '25%', delay: '0.8s', size: 3, dur: '2.2s' },
  { id: 12, top: '87%', left: '76%', delay: '1.9s', size: 2, dur: '3.7s' },
  { id: 13, top: '4%',  left: '41%', delay: '2.3s', size: 2, dur: '2.8s' },
  { id: 14, top: '44%', left: '48%', delay: '2.6s', size: 2, dur: '3.2s' },
  { id: 15, top: '91%', left: '60%', delay: '1.0s', size: 3, dur: '2.6s' },
]

export default function LoadingScreen() {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 3500)
    const t2 = setTimeout(() => setPhase('gone'), 4400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 16px', textAlign: 'center', overflow: 'hidden',
        background: 'radial-gradient(ellipse 90% 90% at 50% 48%, #1a2744 0%, #0d1630 55%, #0a1628 100%)',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.9s cubic-bezier(0.4,0,0.2,1)' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'auto',
      }}
    >
      {/* Full-screen ambient gold pulse */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 40% at 50% 46%, rgba(255,200,50,0.10) 0%, transparent 70%)',
        animation: 'cvAmbient 3s ease-in-out infinite',
      }} />

      {/* Particle sparkles */}
      {PARTICLES.map((p) => (
        <div key={p.id} style={{
          position: 'absolute',
          top: p.top, left: p.left,
          width: p.size, height: p.size,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffffff 0%, #ffd700 50%, transparent 100%)',
          boxShadow: `0 0 ${p.size * 3}px ${p.size}px rgba(255,210,0,0.7)`,
          opacity: 0,
          animation: `cvSparkle ${p.dur} ease-in-out ${p.delay} infinite`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* ── Logo ring assembly ── */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 38 }}>

        {/* Soft volumetric glow behind logo */}
        <div style={{
          position: 'absolute',
          width: 220, height: 220, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,200,50,0.28) 0%, rgba(255,170,0,0.12) 45%, transparent 70%)',
          animation: 'cvGlowPulse 2.5s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Outer slow orbit ring + orbiting glowing bead */}
        <div style={{
          position: 'absolute',
          width: 208, height: 208, borderRadius: '50%',
          border: '1px solid rgba(255,200,50,0.14)',
          animation: 'cvOrbit 9s linear infinite',
        }}>
          <div style={{
            position: 'absolute', top: -5, left: '50%',
            transform: 'translateX(-50%)',
            width: 10, height: 10, borderRadius: '50%',
            background: '#ffd700',
            boxShadow: '0 0 10px 3px rgba(255,215,0,1), 0 0 24px 8px rgba(255,180,0,0.6), 0 0 40px 14px rgba(255,150,0,0.2)',
          }} />
        </div>

        {/* SVG conic-style gradient spinner ring */}
        <svg
          viewBox="0 0 172 172"
          style={{
            position: 'absolute', width: 172, height: 172,
            overflow: 'visible',
            animation: 'cvRingSpin 2.2s linear infinite',
          }}
        >
          <defs>
            <linearGradient id="ls-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#ffd700" stopOpacity="1"   />
              <stop offset="35%"  stopColor="#ffc107" stopOpacity="0.8" />
              <stop offset="70%"  stopColor="#ff8c00" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0"   />
            </linearGradient>
            <filter id="ls-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <circle cx="86" cy="86" r="82"
            fill="none"
            stroke="url(#ls-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#ls-glow)"
          />
        </svg>

        {/* Counter-rotating inner accent ring */}
        <svg
          viewBox="0 0 130 130"
          style={{
            position: 'absolute', width: 130, height: 130,
            overflow: 'visible',
            animation: 'cvRingSpinRev 4s linear infinite',
          }}
        >
          <defs>
            <linearGradient id="ls-gold2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#fff4aa" stopOpacity="0.9" />
              <stop offset="50%"  stopColor="#ffc107" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0"   />
            </linearGradient>
          </defs>
          <circle cx="65" cy="65" r="60"
            fill="none"
            stroke="url(#ls-gold2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Logo image with glow */}
        <div style={{
          position: 'relative', zIndex: 2,
          animation: 'cvLogoReveal 1.6s cubic-bezier(0.16,1,0.3,1) forwards',
          opacity: 0,
        }}>
          <img
            src="/images/logo-mark.png"
            alt="Career Visa"
            style={{
              height: 96, width: 'auto',
              filter: 'drop-shadow(0 0 20px rgba(255,200,50,0.85)) drop-shadow(0 0 55px rgba(255,180,0,0.45)) drop-shadow(0 0 4px rgba(255,255,200,0.6))',
              animation: 'cvLogoGlow 2.5s ease-in-out 1.6s infinite',
            }}
          />
        </div>
      </div>

      {/* Brand name + shimmer */}
      <div style={{
        animation: 'cvSlideUp 0.85s cubic-bezier(0.16,1,0.3,1) 1.0s forwards',
        opacity: 0, marginBottom: 10,
        position: 'relative',
      }}>
        <div style={{
          fontWeight: 900,
          fontSize: 'clamp(20px, 5vw, 30px)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          display: 'inline-block',
        }}>
          Career Visa&nbsp;<span style={{ color: '#ffd700', textShadow: '0 0 20px rgba(255,215,0,0.7)' }}>Overseas</span>
          {/* Shimmer streak */}
          <span style={{
            position: 'absolute', top: 0, left: '-120%',
            width: '70%', height: '100%',
            background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%)',
            animation: 'cvShimmer 3.5s ease-in-out 2.2s infinite',
            pointerEvents: 'none',
            mixBlendMode: 'overlay',
          }} />
        </div>
      </div>

      {/* Gold rule */}
      <div style={{
        width: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.8), transparent)',
        marginBottom: 12,
        animation: 'cvRuleExpand 0.7s ease-out 1.4s forwards',
      }} />

      {/* Tagline */}
      <div style={{
        animation: 'cvSlideUp 0.85s cubic-bezier(0.16,1,0.3,1) 1.6s forwards',
        opacity: 0, marginBottom: 60,
      }}>
        <span style={{
          color: 'rgba(255,205,55,0.9)',
          fontSize: 'clamp(10px, 2.5vw, 12px)',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}>
          Your Gateway to Global Careers
        </span>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 3,
        background: 'rgba(255,255,255,0.04)',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #b8860b 0%, #ffd700 45%, #fff4aa 75%, #ffd700 100%)',
          boxShadow: '0 0 12px rgba(255,210,0,1), 0 0 28px rgba(255,180,0,0.6)',
          animation: 'cvProgress 3.5s cubic-bezier(0.06,0,0.25,1) 0.15s forwards',
          width: 0,
        }} />
      </div>

      <style>{`
        @keyframes cvLogoReveal {
          0%   { opacity:0; transform:scale(0.42); filter:blur(8px); }
          60%  { opacity:1; transform:scale(1.06); filter:blur(0px); }
          100% { opacity:1; transform:scale(1.00); filter:blur(0px); }
        }
        @keyframes cvLogoGlow {
          0%,100% {
            filter: drop-shadow(0 0 20px rgba(255,200,50,0.85))
                    drop-shadow(0 0 55px rgba(255,180,0,0.45))
                    drop-shadow(0 0 4px rgba(255,255,200,0.6));
          }
          50% {
            filter: drop-shadow(0 0 34px rgba(255,210,50,1.0))
                    drop-shadow(0 0 80px rgba(255,180,0,0.7))
                    drop-shadow(0 0 120px rgba(255,150,0,0.3))
                    drop-shadow(0 0 6px rgba(255,255,220,0.9));
          }
        }
        @keyframes cvGlowPulse {
          0%,100% { transform:scale(0.95); opacity:0.7; }
          50%     { transform:scale(1.18); opacity:1.0; }
        }
        @keyframes cvAmbient {
          0%,100% { opacity:0.55; }
          50%     { opacity:1.0;  }
        }
        @keyframes cvRingSpin {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes cvRingSpinRev {
          from { transform:rotate(0deg); }
          to   { transform:rotate(-360deg); }
        }
        @keyframes cvOrbit {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes cvSlideUp {
          0%   { opacity:0; transform:translateY(18px); }
          100% { opacity:1; transform:translateY(0);    }
        }
        @keyframes cvRuleExpand {
          to { width:52px; }
        }
        @keyframes cvShimmer {
          0%   { left:-120%; }
          100% { left: 220%; }
        }
        @keyframes cvProgress {
          0%   { width:0%;   }
          12%  { width:12%;  }
          40%  { width:48%;  }
          72%  { width:78%;  }
          100% { width:100%; }
        }
        @keyframes cvSparkle {
          0%,100% { opacity:0;    transform:scale(0.3) translateY(0px);   }
          30%     { opacity:1.0;  transform:scale(1.3) translateY(-10px); }
          65%     { opacity:0.45; transform:scale(0.8) translateY(-5px);  }
        }
      `}</style>
    </div>
  )
}
