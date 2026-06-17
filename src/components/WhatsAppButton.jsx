import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hello%20Career%20Visa%2C%20I%20am%20interested%20in%20Gulf%20job%20opportunities."
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <span
        className={`bg-primary text-white font-body font-bold text-sm px-4 py-2.5 rounded-2xl shadow-overlay transition-all duration-300 whitespace-nowrap pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
        }`}
      >
        💬 Chat with us!
      </span>

      {/* Button */}
      <div className="relative flex-shrink-0">
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-full opacity-60"
          style={{
            background: '#25D366',
            animation: 'pulseRing 2s ease-out infinite',
          }}
        />
        <span
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background: '#25D366',
            animation: 'pulseRing 2s ease-out 0.7s infinite',
          }}
        />
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-overlay transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{ background: '#25D366' }}
        >
          <MessageCircle size={27} className="text-white" fill="white" />
        </div>
      </div>
    </a>
  )
}
