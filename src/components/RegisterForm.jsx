import { useState } from 'react'
import { Send, Upload, CheckCircle, Lock, ChevronRight, ChevronLeft, Phone, Mail, User, Briefcase } from 'lucide-react'

const jobCategories = [
  'Construction & Engineering', 'Hospitality & Hotels', 'Healthcare',
  'Security Services', 'Facility Management', 'Oil & Gas',
  'Catering & Food Service', 'Logistics & Warehouse', 'IT & Technology', 'Retail & Sales',
]
const countries = ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Any Gulf Country']
const experienceOptions = ['Fresher (0 years)', '1–2 years', '3–5 years', '6–10 years', '10+ years']

const STEPS = [
  { label: 'Personal Info',    icon: <User size={14} /> },
  { label: 'Job Preferences',  icon: <Briefcase size={14} /> },
  { label: 'Documents',        icon: <Upload size={14} /> },
]

function validate(field, value) {
  if (!value || value.trim() === '') return false
  if (field === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  if (field === 'phone' || field === 'whatsapp') return /^[+\d\s-]{7,}$/.test(value)
  return value.length >= 2
}

function FieldWrapper({ label, required, children }) {
  return (
    <div>
      <label className="block text-muted font-body text-xs uppercase tracking-wide mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function RegisterForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')
  const [touched, setTouched] = useState({})
  const [form, setForm] = useState({
    name: '', phone: '', email: '', whatsapp: '',
    category: '', experience: '', country: '', cv: null,
  })

  function handleChange(e) {
    const { name, value, files } = e.target
    if (name === 'cv' && files?.[0]) {
      setFileName(files[0].name)
      setForm((f) => ({ ...f, cv: files[0] }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
    setTouched((t) => ({ ...t, [name]: true }))
  }

  function fieldClass(field) {
    if (!touched[field]) return 'input-field'
    return validate(field, form[field]) ? 'input-field input-valid' : 'input-field input-invalid'
  }

  function selectClass(field) {
    if (!touched[field]) return 'select-field'
    return form[field] ? 'select-field input-valid' : 'select-field input-invalid'
  }

  function step1Valid() {
    return validate('name', form.name) && validate('phone', form.phone) && validate('email', form.email)
  }

  function step2Valid() {
    return form.category !== '' && form.experience !== '' && form.country !== ''
  }

  function nextStep() {
    if (step === 0 && !step1Valid()) {
      setTouched({ name: true, phone: true, email: true })
      return
    }
    if (step === 1 && !step2Valid()) {
      setTouched((t) => ({ ...t, category: true, experience: true, country: true }))
      return
    }
    setStep((s) => Math.min(s + 1, 2))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="register" className="py-20 bg-white">
        <div className="container-main">
          <div className="max-w-md mx-auto text-center py-12">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5 animate-bounce-sm">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-heading font-black text-primary mb-3">Application Received!</h2>
            <p className="text-muted font-body text-base leading-relaxed mb-2">
              Thank you for registering with Career Visa.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 my-5 flex items-center gap-3">
              <Phone size={18} className="text-green-500 flex-shrink-0" />
              <span className="text-green-700 font-body text-base font-bold">
                We will call you within 24 hours!
              </span>
            </div>
            <p className="text-muted font-body text-sm">
              Meanwhile, join our WhatsApp channel for latest job updates.
            </p>
            <button className="btn-primary mt-6 mx-auto" onClick={() => { setSubmitted(false); setStep(0) }}>
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-20" style={{ background: '#f4f6f9' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <div className="section-badge">Apply Now</div>
          <h2 className="section-title">Candidate Registration</h2>
          <p className="section-subtitle">
            Fill in your details below. Our team will match you with the right opportunity.
            Registration is <span className="text-accent font-bold">100% free</span> for candidates.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Progress bar */}
          <div className="flex items-center gap-0 mb-8">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex-1 flex items-center">
                {/* Step bubble */}
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-heading font-black text-sm transition-all duration-300 ${
                    i < step  ? 'bg-green-500 text-white shadow-card' :
                    i === step? 'bg-accent text-white shadow-glow' :
                               'bg-border text-muted'
                  }`}>
                    {i < step ? <CheckCircle size={16} /> : i + 1}
                  </div>
                  <span className={`text-xs font-bold mt-1 whitespace-nowrap transition-colors hidden sm:block ${
                    i === step ? 'text-accent' : 'text-muted'
                  }`}>
                    {s.label}
                  </span>
                </div>
                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="flex-1 mx-1 h-0.5 transition-colors duration-300"
                       style={{ background: i < step ? '#22c55e' : '#e2e8f0' }} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-overlay p-8 sm:p-10">
            {/* Step label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                {STEPS[step].icon}
              </span>
              <span className="text-primary font-heading font-bold text-lg">{STEPS[step].label}</span>
              <span className="text-muted font-body text-sm ml-auto">Step {step + 1} of {STEPS.length}</span>
            </div>

            {/* Step 1: Personal Info */}
            {step === 0 && (
              <div className="grid sm:grid-cols-2 gap-5 animate-fade-in">
                <div className="sm:col-span-2">
                  <FieldWrapper label="Full Name" required>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                           placeholder="Enter your full name" className={fieldClass('name')} />
                  </FieldWrapper>
                </div>
                <FieldWrapper label="Phone Number" required>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                         placeholder="+91 XXXXXXXXXX" className={fieldClass('phone')} />
                </FieldWrapper>
                <FieldWrapper label="WhatsApp Number">
                  <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange}
                         placeholder="+91 XXXXXXXXXX" className={fieldClass('whatsapp')} />
                </FieldWrapper>
                <div className="sm:col-span-2">
                  <FieldWrapper label="Email Address" required>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                           placeholder="yourname@example.com" className={fieldClass('email')} />
                  </FieldWrapper>
                </div>
              </div>
            )}

            {/* Step 2: Job Preferences */}
            {step === 1 && (
              <div className="grid gap-5 animate-fade-in">
                <FieldWrapper label="Job Category" required>
                  <div className="relative">
                    <select name="category" value={form.category} onChange={handleChange} className={selectClass('category')}>
                      <option value="">Select category</option>
                      {jobCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none rotate-90" />
                  </div>
                </FieldWrapper>
                <FieldWrapper label="Years of Experience" required>
                  <div className="relative">
                    <select name="experience" value={form.experience} onChange={handleChange} className={selectClass('experience')}>
                      <option value="">Select experience</option>
                      {experienceOptions.map((e) => <option key={e} value={e}>{e}</option>)}
                    </select>
                    <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none rotate-90" />
                  </div>
                </FieldWrapper>
                <FieldWrapper label="Preferred Country" required>
                  <div className="relative">
                    <select name="country" value={form.country} onChange={handleChange} className={selectClass('country')}>
                      <option value="">Select country</option>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none rotate-90" />
                  </div>
                </FieldWrapper>
              </div>
            )}

            {/* Step 3: Documents */}
            {step === 2 && (
              <div className="animate-fade-in">
                <label className="block text-muted font-body text-xs uppercase tracking-wide mb-1.5">
                  Upload CV / Resume
                </label>
                <label className="flex items-center gap-4 border-2 border-dashed border-border rounded-2xl px-5 py-6 cursor-pointer hover:border-accent/60 transition-colors group mb-5">
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Upload size={20} className="text-muted group-hover:text-accent" />
                  </div>
                  <div>
                    <div className="text-primary font-body text-base font-bold">
                      {fileName || 'Click to upload your CV'}
                    </div>
                    <div className="text-muted font-body text-sm">PDF, DOC, DOCX — up to 5 MB</div>
                  </div>
                  <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} className="sr-only" />
                </label>

                {/* Summary */}
                <div className="bg-surface rounded-2xl p-4 text-sm font-body mb-5 space-y-2">
                  <div className="font-bold text-primary mb-2">Application Summary</div>
                  <div className="flex justify-between"><span className="text-muted">Name</span><span className="font-bold text-primary">{form.name}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Phone</span><span className="font-bold text-primary">{form.phone}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Category</span><span className="font-bold text-primary">{form.category}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Country</span><span className="font-bold text-primary">{form.country}</span></div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-7 gap-3">
              {step > 0 ? (
                <button type="button" onClick={() => setStep((s) => s - 1)}
                        className="flex items-center gap-2 text-muted font-bold text-sm hover:text-primary transition-colors">
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}

              {step < 2 ? (
                <button type="button" onClick={nextStep} className="btn-primary !py-3 !px-7">
                  Continue <ChevronRight size={16} />
                </button>
              ) : (
                <button type="submit" className="btn-primary !py-3 !px-7 shadow-glow">
                  <Send size={16} /> Submit Application
                </button>
              )}
            </div>

            {/* Security note */}
            <div className="flex items-center justify-center gap-2 mt-5 text-muted text-xs font-body">
              <Lock size={12} />
              <span>Your data is 100% secure and never shared without your consent.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
