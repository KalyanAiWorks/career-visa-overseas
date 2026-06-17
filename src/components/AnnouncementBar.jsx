import { useState } from 'react'
import { X, Flame, ArrowRight } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="bg-accent text-white relative z-50">
      <div className="container-main">
        <div className="flex items-center justify-between py-2.5 gap-3">
          <div className="flex items-center gap-2 text-sm font-body flex-1 min-w-0">
            <Flame size={15} className="flex-shrink-0 text-white" />
            <span className="font-bold truncate">
              Urgent Hiring: 500+ positions open in UAE right now.
            </span>
            <a
              href="#register"
              className="hidden sm:inline-flex items-center gap-1 text-white font-bold underline underline-offset-2 hover:no-underline whitespace-nowrap"
            >
              Apply Now <ArrowRight size={13} />
            </a>
          </div>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close announcement"
            className="flex-shrink-0 text-white/70 hover:text-white transition-colors p-0.5"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
