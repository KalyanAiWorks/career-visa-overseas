import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading]   = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true),  1400)
    const t2 = setTimeout(() => setVisible(false), 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center px-4 text-center"
      style={{
        background: 'linear-gradient(135deg, #0a1628, #0f2040)',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* Logo mark */}
      <div className="relative mb-5">
        <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center shadow-glow">
          <span className="text-white font-heading font-black text-3xl">CV</span>
        </div>
        {/* Spinner ring */}
        <div
          className="absolute -inset-3 rounded-[28px] border-2 border-transparent"
          style={{
            borderTopColor: '#f5a623',
            borderRightColor: 'rgba(245,166,35,0.3)',
            animation: 'spin 0.9s linear infinite',
          }}
        />
      </div>
      <div className="text-white font-heading font-bold text-xl tracking-wide mb-1">Career Visa</div>
      <div className="text-accent font-body text-xs sm:text-sm tracking-wide uppercase leading-snug">Your Gateway to Global Careers</div>
      {/* Progress bar */}
      <div className="mt-8 w-40 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full"
          style={{ animation: 'progressLoad 1.4s ease-out forwards' }}
        />
      </div>
      <style>{`
        @keyframes progressLoad {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
