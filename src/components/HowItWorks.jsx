import { ClipboardList, Search, Handshake, Plane, Clock } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  {
    num: '01',
    icon: <ClipboardList size={26} />,
    title: 'Register With Us',
    desc: 'Submit your CV and documents through our free online form or visit our Hyderabad office. Registration is completely free for all candidates.',
    time: '1 day',
  },
  {
    num: '02',
    icon: <Search size={26} />,
    title: 'Profile Screening',
    desc: 'Our expert recruiters review your profile, verify qualifications, and match you with suitable vacancies from our live employer database.',
    time: '2–3 days',
  },
  {
    num: '03',
    icon: <Handshake size={26} />,
    title: 'Interview & Offer',
    desc: 'Attend a face-to-face or video interview with the employer. Receive your official job offer letter with full salary and benefit details.',
    time: '7–14 days',
  },
  {
    num: '04',
    icon: <Plane size={26} />,
    title: 'Visa & Deployment',
    desc: 'We coordinate your medical, GAMCA clearance, emigration check, and visa stamping — then send you off with a pre-departure briefing.',
    time: '15–25 days',
  },
]

function StepCard({ step, index }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="animate-on-scroll flex flex-col items-center text-center relative"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step number + icon */}
      <div className="relative mb-3 sm:mb-6 z-10">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-accent/10 scale-125" />
        <div className="relative w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-primary flex items-center justify-center shadow-overlay border-4 border-white">
          <span className="text-accent scale-50 sm:scale-100">{step.icon}</span>
        </div>
        {/* Step number badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center shadow-card border-2 border-white">
          <span className="text-white font-heading font-black text-[8px] sm:text-xs">{step.num}</span>
        </div>
      </div>

      <h3 className="text-primary font-heading font-bold text-sm sm:text-lg mb-1 sm:mb-2">{step.title}</h3>
      <p className="text-muted font-body text-xs sm:text-base leading-relaxed mb-2 sm:mb-3 max-w-xs line-clamp-2">{step.desc}</p>

      {/* Time pill - hidden on mobile */}
      <div className="hidden sm:flex items-center gap-1.5 bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
        <Clock size={12} className="text-accent" />
        <span className="text-accent font-bold text-xs">{step.time}</span>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useScrollAnimation()

  return (
    <section id="how-it-works" className="py-8 sm:py-20" style={{ background: '#f4f6f9' }}>
      <div className="container-main">
        <div className="text-center mb-6 sm:mb-16" ref={titleRef}>
          <div className="inline-block bg-accent/10 text-accent font-body text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">Process</div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2 sm:mb-3">How It Works</h2>
          <p className="hidden sm:block text-muted font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our proven 4-step process gets you from application to deployment.
          </p>
          {/* Average time badge - hidden on mobile */}
          <div className="hidden sm:inline-flex max-w-full flex-wrap items-center justify-center gap-2 bg-primary text-white rounded-full px-4 sm:px-5 py-2 mt-4 shadow-card">
            <Clock size={15} className="text-accent" />
            <span className="font-body text-sm font-bold text-center leading-snug">Average deployment time: <span className="text-accent">30–45 days</span></span>
          </div>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Horizontal connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] z-0">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            {/* Dashes between steps */}
            <div className="flex justify-between absolute inset-0 -top-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="absolute" style={{ left: `${25 + i * 25}%`, transform: 'translateX(-50%)' }}>
                  <div className="w-3 h-3 rounded-full bg-accent/40 border-2 border-accent" />
                </div>
              ))}
            </div>
          </div>

          {/* Steps grid — 2 columns on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-10 relative z-10">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-14">
          <a href="#register" className="btn-primary shadow-glow">
            Start My Application
          </a>
        </div>
      </div>
    </section>
  )
}
