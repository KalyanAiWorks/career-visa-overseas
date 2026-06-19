import { Users, Zap, DollarSign, UserCheck, ArrowRight, TrendingUp, Clock, Star } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const benefits = [
  {
    icon: <UserCheck size={22} />,
    title: 'Pre-Verified Talent',
    desc: 'Every candidate undergoes skills testing, background check, and document verification before presentation.',
  },
  {
    icon: <Users size={22} />,
    title: 'Dedicated Account Manager',
    desc: 'A single point of contact who understands your requirements and manages your entire hiring cycle.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Fast Turnaround',
    desc: 'Mobilize bulk manpower within 30–45 days for urgent project requirements. Proven track record.',
  },
  {
    icon: <DollarSign size={22} />,
    title: 'Competitive Rates',
    desc: 'Transparent pricing with no hidden charges. Flexible billing for both ongoing and project-based supply.',
  },
]


const stats = [
  { value: '15 days', label: 'Avg. Hiring Time',  icon: <Clock size={18} /> },
  { value: '95%',     label: 'Retention Rate',    icon: <TrendingUp size={18} /> },
  { value: '4.8/5',   label: 'Satisfaction Score',icon: <Star size={18} /> },
]

function BenefitCard({ benefit, delay }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
        {benefit.icon}
      </div>
      <h3 className="text-white font-heading font-bold text-base mb-2">{benefit.title}</h3>
      <p className="text-white/60 font-body text-base leading-relaxed">{benefit.desc}</p>
    </div>
  )
}

export default function EmployerSection() {
  const ref = useScrollAnimation()
  return (
    <section
      id="employer"
      className="py-14 sm:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1e36 50%, #061020 100%)' }}
    >
      {/* BG texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=60')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container-main relative z-10">
        {/* Top: heading + key stats */}
        <div className="text-center mb-14" ref={ref}>
          <div className="section-badge !bg-accent/10 !text-accent !border !border-accent/20">For Employers</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-4">
            Partner With Career Visa —{' '}
            <span className="text-gradient">Reliable Indian Manpower</span> On Demand
          </h2>
          <p className="text-white/60 font-body text-base max-w-xl mx-auto leading-relaxed">
            We supply verified, skilled Indian workers across all major trades and professions.
            Fast mobilization. Full compliance. Trusted by 200+ Gulf employers.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-center sm:justify-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 min-w-0">
                <span className="text-accent flex-shrink-0">{s.icon}</span>
                <div className="text-left min-w-0">
                  <div className="text-accent font-heading font-black text-lg sm:text-xl">{s.value}</div>
                  <div className="text-white/50 text-xs font-body uppercase tracking-wide leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid: benefits + CTA */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <BenefitCard key={b.title} benefit={b} delay={i * 100} />
            ))}
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-heading font-black text-white mb-4">
              Ready to hire?<br />
              <span className="text-accent">Get a free manpower quote.</span>
            </h3>
            <p className="text-white/60 font-body text-base leading-relaxed mb-8">
              Fill in your requirement and our team will get back to you within 2 hours with a
              tailored proposal including candidate profiles and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#register"
                className="bg-accent text-white font-heading font-black text-sm sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-accent-dark hover:shadow-glow hover:scale-105 transition-all inline-flex items-center justify-center gap-2 min-h-11 w-full sm:w-auto text-center leading-tight"
              >
                Request Manpower Quote <ArrowRight size={18} />
              </a>
              <a href="mailto:info@careervisaoverseas.com" className="btn-outline justify-center">
                Email Us
              </a>
            </div>

            {/* Client logos */}
            <div className="mt-10">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
                <span className="text-accent font-heading font-black text-2xl">200+</span>
                <span className="text-white/50 font-body text-sm leading-snug">Gulf employers<br />trust our placements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
