import { CheckCircle, Award, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'

const highlights = [
  'Government Approved Licensed',
  '15,000+ workers deployed to Gulf countries since 2015',
  'Active employer network across all 6 GCC nations',
  'End-to-end support: registration → visa → deployment',
  'Zero hidden fees for candidates — 100% transparent',
  'Dedicated post-placement support helpline',
]


function CountStat({ end, suffix, label }) {
  const [count, ref] = useCountUp(end, 2000)
  return (
    <div ref={ref} className="text-center px-2 py-1">
      <div className="text-xl sm:text-3xl font-heading font-black text-accent mb-1">{count.toLocaleString()}{suffix}</div>
      <div className="text-white/60 font-body text-[10px] sm:text-xs uppercase tracking-wide leading-tight">{label}</div>
    </div>
  )
}

export default function About() {
  const titleRef = useScrollAnimation()

  return (
    <section id="about" className="py-8 sm:py-20 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* Left — image + stats */}
          <div ref={titleRef} className="animate-on-scroll">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-primary mb-4 sm:mb-6 min-h-[200px] sm:min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Career Visa office team"
                loading="lazy"
                className="w-full h-40 sm:h-72 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Award size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-heading font-bold text-xs sm:text-sm">Government Approved Licensed</div>
                    <div className="text-white/60 text-[10px] sm:text-xs">Licensed Overseas Recruitment Agency</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6 grid grid-cols-3 min-[390px]:grid-cols-3 gap-2 sm:gap-y-0 min-[390px]:divide-y-0 min-[390px]:divide-x divide-white/10"
              style={{ background: 'linear-gradient(135deg, #0a1628, #0f2040)' }}
            >
              <CountStat end={15000} suffix="+" label="Workers Deployed" />
              <CountStat end={200}   suffix="+" label="Employers"        />
              <CountStat end={98}    suffix="%" label="Success Rate"     />
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="inline-block bg-accent/10 text-accent font-body text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">About Career Visa</div>
            <h2 className="text-lg sm:text-3xl md:text-4xl font-heading font-black text-primary mb-3 sm:mb-5">
              Hyderabad's Most Trusted Overseas Recruitment Consultancy
            </h2>
            <p className="text-muted font-body text-sm sm:text-base leading-relaxed mb-3 sm:mb-5">
              Established over a decade ago, Career Visa is a government-approved
              overseas manpower recruitment firm. We specialize in sourcing, screening, and deploying
              skilled Indian workers to reputable employers across the GCC region.
            </p>
            <p className="text-muted font-body text-sm sm:text-base leading-relaxed mb-5 sm:mb-7">
              Whether you are a blue-collar technician, a hospitality professional, or a healthcare
              worker, our dedicated team walks with you from registration to your first day on the job.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]" />
                  <span className="text-primary font-body text-sm sm:text-base">{item}</span>
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
