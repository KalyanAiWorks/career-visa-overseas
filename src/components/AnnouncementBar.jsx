import { useEffect, useRef, useState } from 'react'
import { X, Flame, ArrowRight } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  const barRef = useRef(null)

  useEffect(() => {
    if (!visible || !barRef.current) {
      document.documentElement.style.setProperty('--announcement-bar-height', '0px')
      return
    }

    const updateHeight = () => {
      const height = Math.ceil(barRef.current?.getBoundingClientRect().height || 0)
      document.documentElement.style.setProperty('--announcement-bar-height', `${height}px`)
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(barRef.current)
    window.addEventListener('resize', updateHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeight)
      document.documentElement.style.setProperty('--announcement-bar-height', '0px')
    }
  }, [visible])

  if (!visible) return null
  return (
    <div ref={barRef} className="fixed top-0 left-0 right-0 bg-accent text-white z-[60]">
      <div className="container-main">
        <div className="flex items-center justify-between py-0 gap-2 sm:gap-3 min-h-[44px]">
          <div className="flex items-center gap-2 text-sm font-body flex-1 min-w-0 leading-snug">
            <Flame size={14} className="flex-shrink-0 text-white" />
            <span className="font-bold min-w-0">
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
            className="flex-shrink-0 text-white/70 hover:text-white transition-colors min-w-11 min-h-11 flex items-center justify-center rounded-lg hover:bg-white/10"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
