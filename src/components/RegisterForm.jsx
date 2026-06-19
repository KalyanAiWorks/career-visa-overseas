import { Send, Upload, CheckCircle, Lock, ChevronRight, ChevronLeft, Phone, User, Briefcase } from 'lucide-react'

const services = [
  'Overseas Job Placement',
  'Document Attestation',
  'Visa Processing',
  'Ticketing & Travel',
  'Emigration Support',
  'Medical Assistance',
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

const experienceLevels = [
  '0-1 years',
  '1-3 years',
  '3-5 years',
  '5-10 years',
  '10+ years',
]

const jobTypes = [
  'Engineer',
  'Doctor/Nurse',
  'IT Professional',
  'Accountant',
  'Sales/Marketing',
  'Electrician/Technician',
  'Driver',
  'Chef/Cook',
  'Helper/Laborer',
  'Security Guard',
  'Office Assistant',
  'Other',
]

export default function RegisterForm() {
  return (
    <section id="register" className="py-14 sm:py-20 bg-white">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-badge">Register Now</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-4">
              Start Your Career Journey
            </h2>
            <p className="text-muted font-body text-base sm:text-lg">
              Fill in your details below and our experts will contact you within 24 hours.
            </p>
          </div>

          <form
            className="bg-white rounded-2xl sm:rounded-3xl shadow-card border border-border p-6 sm:p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for registering! We will contact you soon.')
            }}
          >
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-muted font-body text-xs uppercase tracking-wide mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-border rounded-xl px-4 py-3.5 font-body text-base text-primary placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white min-h-[48px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-muted font-body text-xs uppercase tracking-wide mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 89785 37368"
                    className="w-full border border-border rounded-xl px-4 py-3.5 font-body text-base text-primary placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white min-h-[48px]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-muted font-body text-xs uppercase tracking-wide mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-border rounded-xl px-4 py-3.5 font-body text-base text-primary placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white min-h-[48px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-muted font-body text-xs uppercase tracking-wide mb-2">
                    Job Type *
                  </label>
                  <select
                    className="w-full border border-border rounded-xl px-4 py-3.5 font-body text-base text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white min-h-[48px]"
                    required
                  >
                    <option value="">Select job type</option>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-muted font-body text-xs uppercase tracking-wide mb-2">
                    Experience *
                  </label>
                  <select
                    className="w-full border border-border rounded-xl px-4 py-3.5 font-body text-base text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white min-h-[48px]"
                    required
                  >
                    <option value="">Select experience</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-muted font-body text-xs uppercase tracking-wide mb-2">
                  Preferred Country *
                </label>
                <select
                  className="w-full border border-border rounded-xl px-4 py-3.5 font-body text-base text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white min-h-[48px]"
                  required
                >
                  <option value="">Select country</option>
                  {gulfCountries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-muted font-body text-xs uppercase tracking-wide mb-2">
                  Upload Resume (Optional)
                </label>
                <label className="flex items-center gap-4 border-2 border-dashed border-border rounded-xl px-4 py-4 cursor-pointer hover:border-accent/60 transition-colors group min-h-[56px]">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Upload size={20} className="text-muted group-hover:text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-primary font-body text-base font-bold">
                      Click to upload your CV
                    </div>
                    <div className="text-muted font-body text-xs">PDF, DOC, DOCX — up to 5 MB</div>
                  </div>
                  <input type="file" accept=".pdf,.doc,.docx" className="sr-only" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white font-heading font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:bg-accent-dark hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[52px]"
              >
                <Send size={18} />
                Submit Application
              </button>

              <div className="flex items-start justify-center gap-2 text-muted text-xs font-body text-center leading-relaxed">
                <Lock size={14} className="mt-0.5 flex-shrink-0" />
                <span>Your data is 100% secure and never shared without your consent.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
