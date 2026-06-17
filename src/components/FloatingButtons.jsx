import { useState, useEffect, useRef } from 'react'

const WA_URL  = 'https://wa.me/91XXXXXXXXXX?text=Hi%20Career%20Visa%2C%20I%27m%20interested%20in%20overseas%20jobs'
const TEL_URL = 'tel:+91XXXXXXXXXX'

/* ── Icons ── */

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="30" height="30" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.809-6.237-2.161l-.436-.348-2.647.887.887-2.647-.348-.436A9.936 9.936 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
  )
}

function CallIcon({ shaking }) {
  return (
    <svg
      viewBox="0 0 24 24" width="24" height="24"
      fill="white" aria-hidden="true"
      style={{ animation: shaking ? 'phoneRing 0.7s ease-in-out' : undefined }}
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}

/* ── Sound waves (shown on call hover) ── */
function SoundWaves() {
  return (
    <>
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="absolute inset-0 rounded-full border-2 border-white/50 pointer-events-none"
          style={{ animation: `soundWave 1.2s ease-out ${i * 0.35}s infinite` }}
        />
      ))}
    </>
  )
}

/* ── Tooltip ── */
function Tooltip({ text }) {
  return (
    <div
      className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap
                 bg-gray-900 text-white font-body font-bold text-xs px-3 py-1.5
                 rounded-lg shadow-overlay pointer-events-none select-none"
      style={{ animation: 'chatSlideUp 0.2s ease-out' }}
    >
      {text}
      <span
        className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent"
        style={{ borderLeftColor: '#111827' }}
      />
    </div>
  )
}

/* ── Main component ── */
export default function FloatingButtons() {
  const [waHover,    setWaHover]    = useState(false)
  const [callHover,  setCallHover]  = useState(false)
  const [callShake,  setCallShake]  = useState(false)
  const [appeared,   setAppeared]   = useState(false)
  const shakeTimer = useRef(null)

  // Trigger entrance after mount
  useEffect(() => {
    const t = setTimeout(() => setAppeared(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Auto-shake call every 8s
  useEffect(() => {
    shakeTimer.current = setInterval(() => {
      setCallShake(true)
      setTimeout(() => setCallShake(false), 750)
    }, 8000)
    return () => clearInterval(shakeTimer.current)
  }, [])

  if (!appeared) return null

  return (
    <>
      {/* ── Call button ── */}
      <div
        className="fixed z-[9998]"
        style={{ bottom: 104, right: 24 }}
      >
        <div className="relative">
          <a
            href={TEL_URL}
            aria-label="Call Career Visa"
            className="fab-float flex items-center justify-center rounded-full relative overflow-hidden"
            style={{
              width:  callHover ? 52 : 52,
              height: 52,
              background: 'linear-gradient(135deg, #1a365d 0%, #2563eb 100%)',
              transform: callHover ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.2s cubic-bezier(.34,1.56,.64,1)',
              animationDelay: '0.8s',
              boxShadow: callHover
                ? '0 8px 24px rgba(37,99,235,0.5)'
                : '0 4px 16px rgba(37,99,235,0.35)',
            }}
            onMouseEnter={() => { setCallHover(true); setCallShake(true); setTimeout(() => setCallShake(false), 750) }}
            onMouseLeave={() => setCallHover(false)}
          >
            <CallIcon shaking={callShake} />
            {callHover && <SoundWaves />}
          </a>
          {callHover && <Tooltip text="Call Us Now" />}
        </div>
      </div>

      {/* ── WhatsApp button ── */}
      <div
        className="fixed z-[9999]"
        style={{ bottom: 24, right: 24 }}
      >
        <div className="relative">
          {/* Notification badge */}
          <span
            className="badge-pop absolute -top-1 -right-1 z-20 flex items-center justify-center
                       rounded-full bg-red-500 text-white font-black border-2 border-white
                       select-none pointer-events-none"
            style={{ width: 21, height: 21, fontSize: 10 }}
            aria-label="1 unread message"
          >
            1
          </span>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fab-float wa-pulse flex items-center justify-center rounded-full"
            style={{
              width: 60, height: 60,
              background: '#25D366',
              animationDelay: '0.5s',
              transform: waHover ? 'scale(1.2) rotate(15deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1)',
              boxShadow: waHover
                ? '0 8px 28px rgba(37,211,102,0.6)'
                : undefined,
            }}
            onMouseEnter={() => setWaHover(true)}
            onMouseLeave={() => setWaHover(false)}
          >
            <WaIcon />
          </a>
          {waHover && <Tooltip text="Chat on WhatsApp" />}
        </div>
      </div>
    </>
  )
}
