import { CheckCircle, Award, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'

const highlights = [
  'Government licensed & Ministry-of-External-Affairs approved',
  '15,000+ workers deployed to Gulf countries since 2014',
  'Active employer network across all 6 GCC nations',
  'End-to-end support: registration → visa → deployment',
  'Zero hidden fees for candidates — 100% transparent',
  'Dedicated post-placement support helpline',
]


function CountStat({ end, suffix, label }) {
  const [count, ref] = useCountUp(end, 2000)
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-heading font-black text-accent mb-1">{count.toLocaleString()}{suffix}</div>
      <div className="text-white/60 font-body text-xs uppercase tracking-wide">{label}</div>
    </div>
  )
}

export default function About() {
  const titleRef = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — image + stats */}
          <div ref={titleRef} className="animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden bg-primary mb-6" style={{ minHeight: 280 }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Career Visa office team"
                loading="lazy"
                className="w-full h-72 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/10 border border-white/20 rounded-2xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <Award size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm">MEA Licensed Agency</div>
                    <div className="text-white/60 text-xs">Govt. of India — Ministry of External Affairs</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 grid grid-cols-3 divide-x divide-white/10"
              style={{ background: 'linear-gradient(135deg, #0a1628, #0f2040)' }}
            >
              <CountStat end={15000} suffix="+" label="Workers Deployed" />
              <CountStat end={200}   suffix="+" label="Employers"        />
              <CountStat end={98}    suffix="%" label="Success Rate"     />
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="section-badge">About Career Visa</div>
            <h2 className="section-title text-left mb-5">
              Hyderabad's Most Trusted Overseas Recruitment Consultancy
            </h2>
            <p className="text-muted font-body text-base leading-relaxed mb-5">
              Established over a decade ago, Career Visa is a Ministry-of-External-Affairs–approved
              overseas manpower recruitment firm. We specialize in sourcing, screening, and deploying
              skilled Indian workers to reputable employers across the GCC region.
            </p>
            <p className="text-muted font-body text-base leading-relaxed mb-7">
              Whether you are a blue-collar technician, a hospitality professional, or a healthcare
              worker, our dedicated team walks with you from registration to your first day on the job.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary font-body text-base">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#register" className="btn-primary">
              Start Your Gulf Career <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
