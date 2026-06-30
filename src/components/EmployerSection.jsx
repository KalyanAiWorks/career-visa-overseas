import { Users, Zap, DollarSign, UserCheck, ArrowRight, TrendingUp, Clock, Star, Send, Briefcase } from 'lucide-react'
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

const jobCategories = [
  'Construction & Engineering',
  'Healthcare',
  'Hospitality & Hotels',
  'Security Services',
  'Facility Management',
  'Oil & Gas',
  'IT & Technology',
  'Logistics & Warehouse',
  'Other',
]

const gulfCountries = [
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Qatar', flag: '🇶🇦' },
  { name: 'Kuwait', flag: '🇰🇼' },
  { name: 'Oman', flag: '🇴🇲' },
  { name: 'Bahrain', flag: '🇧🇭' },
  { name: 'USA', flag: '🇺🇸' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Romania', flag: '🇷🇴' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Other', flag: '🌍' },
]

function BenefitCard({ benefit, delay }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-xl sm:rounded-2xl p-2 sm:p-5 hover:bg-white/10 transition-colors duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2 sm:mb-4">
        <span className="scale-50 sm:scale-100">{benefit.icon}</span>
      </div>
      <h3 className="text-white font-heading font-bold text-xs sm:text-base mb-0 sm:mb-2">{benefit.title}</h3>
      <p className="hidden sm:block text-white/60 font-body text-sm leading-relaxed sm:line-clamp-none line-clamp-2">{benefit.desc}</p>
    </div>
  )
}

export default function EmployerSection() {
  const ref = useScrollAnimation()
  return (
    <section
      id="employer"
      className="py-8 sm:py-20 relative overflow-hidden"
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
        aria-hidden="true"
        role="img"
        aria-label="Professional team collaboration — Career Visa Overseas employer partnerships"
      />
      <div className="container-main relative z-10">
        {/* Top: heading + key stats */}
        <div className="text-center mb-6 sm:mb-14" ref={ref}>
          <div className="inline-block bg-accent/10 text-accent font-body text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide sm:!bg-accent/10 sm:!text-accent sm:!border sm:!border-accent/20">For Employers</div>
          <h2 className="text-lg sm:text-3xl md:text-4xl font-heading font-black text-white mb-2 sm:mb-4">
            Partner With Career Visa —{' '}
            <span className="text-gradient">Reliable Indian Manpower</span> On Demand
          </h2>
          <p className="hidden sm:block text-white/60 font-body text-base max-w-xl mx-auto leading-relaxed">
            We supply verified, skilled Indian workers across all major trades and professions.
            Fast mobilization. Full compliance. Trusted by 200+ Gulf employers.
          </p>

          {/* Key stats - 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-2 mt-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col sm:flex-row items-center sm:justify-center gap-1 sm:gap-3 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-2 sm:px-5 py-2 sm:py-4 min-w-0 text-center sm:text-left">
                <span className="text-accent flex-shrink-0 w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center scale-75 sm:scale-100">{s.icon}</span>
                <div className="min-w-0">
                  <div className="text-accent font-heading font-black text-base sm:text-2xl md:text-3xl">{s.value}</div>
                  <div className="text-white/50 text-[8px] sm:text-xs font-body uppercase tracking-wide leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid: benefits + Employer Form */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {benefits.map((b, i) => (
              <BenefitCard key={b.title} benefit={b} delay={i * 100} />
            ))}
          </div>

          {/* Employer Enquiry Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-heading font-black text-white mb-2">
              Request Manpower Quote
            </h3>
            <p className="text-white/60 font-body text-xs sm:text-sm mb-4 sm:mb-6">
              Fill in your details and our team will get back to you within 2 hours.
            </p>

            <form
              className="space-y-3 sm:space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for your enquiry! We will contact you within 2 hours.')
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-white/70 font-body text-[10px] sm:text-xs uppercase tracking-wide mb-1 sm:mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[44px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/70 font-body text-[10px] sm:text-xs uppercase tracking-wide mb-1 sm:mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[44px]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-white/70 font-body text-[10px] sm:text-xs uppercase tracking-wide mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="company@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[44px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/70 font-body text-[10px] sm:text-xs uppercase tracking-wide mb-1 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 89785 37368"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[44px]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-white/70 font-body text-[10px] sm:text-xs uppercase tracking-wide mb-1 sm:mb-2">
                    Country *
                  </label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[44px] appearance-none"
                    required
                  >
                    <option value="" className="bg-primary text-white/70">Select country</option>
                    {gulfCountries.map((country) => (
                      <option key={country.name} value={country.name} className="bg-primary">
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 font-body text-[10px] sm:text-xs uppercase tracking-wide mb-1 sm:mb-2">
                    Workers Needed *
                  </label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[44px] appearance-none"
                    required
                  >
                    <option value="" className="bg-primary text-white/70">Select</option>
                    <option value="1-10" className="bg-primary">1-10 workers</option>
                    <option value="11-50" className="bg-primary">11-50 workers</option>
                    <option value="51-100" className="bg-primary">51-100 workers</option>
                    <option value="100+" className="bg-primary">100+ workers</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 font-body text-[10px] sm:text-xs uppercase tracking-wide mb-1 sm:mb-2">
                  Job Category *
                </label>
                <select
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-body text-sm text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[44px] appearance-none"
                  required
                >
                  <option value="" className="bg-primary text-white/70">Select job category</option>
                  {jobCategories.map((cat) => (
                    <option key={cat} value={cat} className="bg-primary">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white font-heading font-bold px-6 py-3 sm:py-4 rounded-xl hover:bg-accent-dark hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[48px] mt-2"
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                Submit Enquiry
              </button>

              <p className="text-white/40 font-body text-xs text-center">
                Or email us directly at <a href="mailto:info@careervisaoverseas.com" className="text-accent hover:underline">info@careervisaoverseas.com</a> or <a href="mailto:hr@careervisaoverseas.com" className="text-accent hover:underline">hr@careervisaoverseas.com</a>
              </p>
            </form>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
            <span className="text-accent font-heading font-black text-2xl sm:text-3xl">200+</span>
            <span className="text-white/50 font-body text-sm sm:text-base leading-snug">Gulf employers<br />trust our placements</span>
          </div>
        </div>
      </div>
    </section>
  )
}
