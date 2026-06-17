import { useState, useEffect, useRef } from 'react'
import { X, Send, Bot } from 'lucide-react'

const WELCOME = `👋 Hi! I'm the Career Visa Assistant.

I can help you with:
🔹 Finding jobs in your trade
🔹 Visa requirements for any country
🔹 Registration process
🔹 Salary expectations

How can I help you today?`

const AUTO_REPLY = `Thanks for your message! Our team will get back to you shortly. Meanwhile, you can register at the top of the page or WhatsApp us for instant support.`

/* ── Robot SVG with animated antenna ── */
function RobotSvg({ glowing }) {
  return (
    <svg viewBox="0 0 32 34" width="28" height="28" fill="none" aria-hidden="true">
      {/* Antenna stem */}
      <line x1="16" y1="1" x2="16" y2="7" stroke="#f5a623" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Antenna tip — blinks via CSS */}
      <circle
        cx="16" cy="1" r="2.5"
        fill={glowing ? '#fff' : '#f5a623'}
        className="antenna-dot"
        style={{ filter: glowing ? 'drop-shadow(0 0 4px #f5a623)' : undefined }}
      />
      {/* Head */}
      <rect x="5" y="7" width="22" height="17" rx="3.5"
            fill={glowing ? '#f7b84e' : '#f5a623'}
            style={{ transition: 'fill 0.3s' }}/>
      {/* Left eye */}
      <rect x="8.5" y="12" width="5.5" height="5" rx="1.5"
            fill={glowing ? '#0a1628' : '#1e293b'}/>
      {/* Right eye */}
      <rect x="18" y="12" width="5.5" height="5" rx="1.5"
            fill={glowing ? '#0a1628' : '#1e293b'}/>
      {/* Eye shine */}
      {glowing && <>
        <circle cx="11" cy="13.5" r="1" fill="white" opacity="0.7"/>
        <circle cx="20.5" cy="13.5" r="1" fill="white" opacity="0.7"/>
      </>}
      {/* Mouth */}
      <rect x="10" y="19.5" width="12" height="2" rx="1" fill="#0a1628" opacity="0.7"/>
      {/* Ears */}
      <rect x="2" y="11" width="3" height="9" rx="1.5" fill="#f5a623"/>
      <rect x="27" y="11" width="3" height="9" rx="1.5" fill="#f5a623"/>
      {/* Neck */}
      <rect x="13" y="24" width="6" height="3" rx="1" fill="#f5a623" opacity="0.8"/>
    </svg>
  )
}

/* ── Tooltip ── */
function Tooltip({ text }) {
  return (
    <div
      className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap
                 bg-gray-900 text-white font-body font-bold text-xs px-3 py-1.5
                 rounded-lg shadow-overlay pointer-events-none select-none"
      style={{ animation: 'chatSlideUp 0.2s ease-out' }}
    >
      {text}
      <span
        className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
        style={{ borderRightColor: '#111827' }}
      />
    </div>
  )
}

export default function ChatBot() {
  const [open,     setOpen]     = useState(false)
  const [closing,  setClosing]  = useState(false)
  const [input,    setInput]    = useState('')
  const [mounted,  setMounted]  = useState(false)
  const [btnHover, setBtnHover] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: WELCOME, ts: Date.now() },
  ])
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350)
  }, [open])

  function handleOpen()  {
    setClosing(false)
    setOpen(true)
  }
  function handleClose() {
    setClosing(true)
    setTimeout(() => { setOpen(false); setClosing(false) }, 320)
  }

  function handleSend() {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { from: 'user', text, ts: Date.now() }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: AUTO_REPLY, ts: Date.now() }])
    }, 900)
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  if (!mounted) return null

  return (
    <>
      {/* ── Chat window ── */}
      {open && (
        <div
          className="fixed z-[9998] flex flex-col rounded-2xl overflow-hidden shadow-overlay"
          style={{
            bottom: 92, left: 24,
            width: 'min(350px, calc(100vw - 48px))',
            height: 500,
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(10,22,40,0.08)',
            animation: closing
              ? 'chatSlideDown 0.32s ease-in forwards'
              : 'chatSlideUp 0.38s cubic-bezier(.34,1.3,.64,1) forwards',
          }}
          role="dialog"
          aria-label="Career Visa chat assistant"
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #0a1628 0%, #112444 100%)' }}
          >
            <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
              <RobotSvg glowing={false} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-heading font-black text-sm">Career Visa Assistant</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-pulse" />
                <span className="text-white/50 font-body text-xs">Online — replies instantly</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 flex-shrink-0"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#e2e8f0 transparent' }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                    <Bot size={13} className="text-accent" />
                  </div>
                )}
                <div
                  className="max-w-[78%] px-3.5 py-2.5 rounded-2xl font-body text-sm leading-relaxed whitespace-pre-wrap"
                  style={msg.from === 'user'
                    ? { background: '#0a1628', color: 'white', borderBottomRightRadius: 5 }
                    : { background: '#f4f6f9', color: '#1e293b', borderBottomLeftRadius: 5 }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex-shrink-0 border-t border-gray-100 p-3 flex gap-2 bg-white">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm text-primary placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0 active:scale-90"
              style={{
                background:  input.trim() ? '#f5a623' : '#e2e8f0',
                transform:   input.trim() ? 'scale(1)' : undefined,
              }}
            >
              <Send size={15} color={input.trim() ? 'white' : '#94a3b8'} />
            </button>
          </div>
        </div>
      )}

      {/* ── Trigger button ── */}
      <div
        className="fixed z-[9999]"
        style={{ bottom: 24, left: 24 }}
      >
        <div className="relative">
          <button
            onClick={open ? handleClose : handleOpen}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            aria-label={open ? 'Close chat' : 'Ask Career Visa AI'}
            className="fab-float flex items-center justify-center rounded-full"
            style={{
              width: 56, height: 56,
              background: 'linear-gradient(135deg, #0a1628 0%, #112444 100%)',
              border: '2px solid rgba(245,166,35,0.4)',
              animationDelay: '1.1s',
              transform: btnHover ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s cubic-bezier(.34,1.56,.64,1), border-color 0.2s',
              borderColor: btnHover ? 'rgba(245,166,35,0.75)' : 'rgba(245,166,35,0.4)',
              boxShadow: btnHover
                ? '0 8px 24px rgba(245,166,35,0.35)'
                : '0 4px 14px rgba(10,22,40,0.4)',
              animation: 'floatUD 3.2s ease-in-out 1.1s infinite, bounceIn 0.55s 1.1s cubic-bezier(.34,1.56,.64,1) both',
            }}
          >
            {open
              ? <X size={22} color="#f5a623" />
              : <RobotSvg glowing={btnHover} />
            }
          </button>

          {/* Gold notification dot */}
          {!open && (
            <span
              className="dot-pulse absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white pointer-events-none"
              style={{ background: '#f5a623' }}
              aria-hidden="true"
            />
          )}

          {/* Tooltip */}
          {btnHover && !open && <Tooltip text="Ask Career Visa AI" />}
        </div>
      </div>
    </>
  )
}
