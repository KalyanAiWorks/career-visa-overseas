import { useEffect, useState } from 'react'
import { X, CheckCircle } from 'lucide-react'

const notifications = [
  { name: 'Ravi K.', city: 'Hyderabad', job: 'Electrician', dest: 'Dubai, UAE', time: '2 hours ago' },
  { name: 'Priya S.', city: 'Vijayawada', job: 'Staff Nurse', dest: 'Riyadh, KSA', time: '5 hours ago' },
  { name: 'Mohammed A.', city: 'Hyderabad', job: 'Welder', dest: 'Doha, Qatar', time: 'Yesterday' },
  { name: 'Suresh R.', city: 'Warangal', job: 'Security Guard', dest: 'Kuwait City', time: 'Yesterday' },
]

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Don't show if dismissed in this session
    if (sessionStorage.getItem('popup_dismissed')) return
    const t = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible) return
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % notifications.length)
    }, 5000)
    return () => clearInterval(t)
  }, [visible])

  function dismiss() {
    setVisible(false)
    sessionStorage.setItem('popup_dismissed', '1')
  }

  if (!visible) return null
  const n = notifications[current]

  return (
    <div
      className="fixed bottom-24 left-4 sm:left-6 z-50 max-w-xs"
      style={{ animation: 'fadeUp 0.4s ease-out' }}
    >
      <div className="bg-white rounded-2xl shadow-overlay border border-border p-4 flex gap-3 items-start">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
          <span className="text-white font-heading font-black text-sm">
            {n.name.charAt(0)}
          </span>
        </div>
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
            <span className="text-green-600 font-bold text-xs">Just Placed!</span>
          </div>
          <p className="text-primary font-body text-sm leading-snug">
            <span className="font-bold">{n.name}</span> from {n.city} got placed as{' '}
            <span className="font-bold">{n.job}</span> in <span className="font-bold">{n.dest}</span>
          </p>
          <p className="text-muted text-xs mt-1">{n.time} · Join 5,000+ placed candidates</p>
          <a
            href="#register"
            onClick={dismiss}
            className="inline-block mt-2 bg-accent text-white font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Register Free →
          </a>
        </div>
        {/* Close */}
        <button
          onClick={dismiss}
          className="flex-shrink-0 text-muted hover:text-primary transition-colors"
          aria-label="Close notification"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  )
}
