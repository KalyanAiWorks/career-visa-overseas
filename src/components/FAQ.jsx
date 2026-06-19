import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqs = [
  {
    q: 'What documents do I need to apply for a Gulf job?',
    a: 'You need a valid passport (minimum 2-year validity), educational/skill certificates, experience letters, passport-size photographs, and a medical fitness certificate. For healthcare roles, additional professional licences may be required. We will guide you on the exact checklist based on your trade and destination country.',
  },
  {
    q: 'How long does the entire visa process take?',
    a: 'Typically 30–45 days from job offer to deployment. The breakdown: document attestation (7–10 days), employer visa application (10–15 days), medical + GAMCA clearance (3–5 days), and visa stamping + emigration (5–7 days). Express timelines are possible for urgent employer requirements.',
  },
  {
    q: 'Is Career Visa a government-licensed recruitment agency?',
    a: 'Yes. Career Visa is registered and licensed by the Ministry of External Affairs (MEA), Government of India under the Emigration Act 1983. Our licence number is available on request and verifiable on the MEA eMigrate portal.',
  },
  {
    q: 'Do candidates have to pay any fees?',
    a: 'Registration and profile screening are completely FREE for candidates. Service charges, if any (for specific categories), are disclosed upfront before you sign any agreement. We comply fully with MEA fee regulations and never charge hidden amounts.',
  },
  {
    q: 'Can I apply if I have no prior Gulf work experience?',
    a: 'Yes, many employers accept freshers or candidates with only Indian work experience. Roles in construction, hospitality, and facility management regularly hire freshers. Our team will honestly assess your profile and only send you for roles where you have a strong chance.',
  },
  {
    q: 'What is the average salary package in Gulf countries?',
    a: 'Salaries vary by trade and country. As a general guide — skilled technicians (AED 1,800–3,500/mo in UAE), nurses (SAR 4,000–7,000/mo in KSA), IT professionals (AED 4,000–8,000/mo in UAE). Most packages include free accommodation, transportation, and medical insurance on top of the basic salary.',
  },
  {
    q: 'How do I track my application status after registering?',
    a: 'After registration you will receive an SMS/email with your unique Application ID. Our team will call you within 24 hours. You can also WhatsApp us at any time for a status update. We aim for full transparency at every stage of the process.',
  },
  {
    q: 'What happens if my visa is rejected or I face issues abroad?',
    a: 'Visa rejections are rare but possible due to employer requirements or policy changes. In such cases, we immediately re-shortlist you for alternate employers at no extra charge. For issues faced abroad, we have a 24/7 helpline and coordinate with the employer and Indian Embassy to resolve problems swiftly.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-accent shadow-card' : 'border-border'}`}>
      <button
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-surface transition-colors min-h-[52px]"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-bold text-sm sm:text-base ${isOpen ? 'text-accent' : 'text-primary'}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-surface text-muted'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <div
        className="faq-answer"
        style={{
          maxHeight: isOpen ? '900px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-muted font-body text-sm sm:text-base leading-relaxed">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useScrollAnimation()
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-14" ref={ref}>
          <div className="section-badge">Frequently Asked Questions</div>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            Got questions about working in the Gulf? We've answered the most common ones below.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-muted font-body text-base mb-4">Still have questions?</p>
          <a
            href="https://wa.me/918978537368?text=Hi%20Career%20Visa%20Overseas%2C%20I%20have%20a%20question%20about%20Gulf%20jobs."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
