import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = [
  {
    title: 'Construction & Engineering',
    roles: ['Laborers', 'Welders', 'Electricians', 'Plumbers', 'Carpenters'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    badge: 'Urgent',
    badgeColor: 'bg-red-500',
  },
  {
    title: 'Hospitality & Hotels',
    roles: ['Housekeeping', 'Kitchen Staff', 'Waiters', 'Front Desk'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    badge: null,
  },
  {
    title: 'Healthcare',
    roles: ['Nurses', 'Lab Technicians', 'Caregivers', 'Cleaners'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    badge: 'Hot',
    badgeColor: 'bg-orange-500',
  },
  {
    title: 'Security Services',
    roles: ['Security Guards', 'Supervisors', 'CCTV Operators'],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80',
    badge: null,
  },
  {
    title: 'Facility Management',
    roles: ['Cleaning', 'Maintenance', 'HVAC Technicians'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    badge: null,
  },
  {
    title: 'Oil & Gas',
    roles: ['Riggers', 'Scaffolders', 'Pipe Fitters', 'Safety Officers'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
    badge: 'Urgent',
    badgeColor: 'bg-red-500',
  },
  {
    title: 'Catering & Food Service',
    roles: ['Cooks', 'Helpers', 'Bakers', 'Baristas'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    badge: null,
  },
  {
    title: 'Logistics & Warehouse',
    roles: ['Drivers', 'Forklift Operators', 'Warehouse Staff'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    badge: null,
  },
  {
    title: 'IT & Technology',
    roles: ['Developers', 'Support Engineers', 'Network Admins'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    badge: 'Hot',
    badgeColor: 'bg-orange-500',
  },
  {
    title: 'Retail & Sales',
    roles: ['Sales Executives', 'Cashiers', 'Merchandisers'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    badge: null,
  },
  {
    title: 'Work Visa Services',
    roles: ['Work Permit Processing', 'Document Attestation', 'GAMCA Medical', 'Emigration Clearance'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    badge: 'New',
    badgeColor: 'bg-green-500',
  },
  {
    title: 'Student Visa Services',
    roles: ['University Admissions', 'Student Permits', 'Education Counseling', 'Course Selection'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    badge: 'New',
    badgeColor: 'bg-blue-500',
  },
  {
    title: 'Immigration',
    roles: ['Immigration Consulting', 'PR & Residency', 'Dependent Visas', 'Visa Extensions'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    badge: 'New',
    badgeColor: 'bg-green-500',
  },
]

function CategoryCard({ cat, delay }) {
  const ref = useScrollAnimation()
  return (
    <a
      href="#register"
      ref={ref}
      className="animate-on-scroll block group relative overflow-hidden rounded-xl sm:rounded-2xl"
      style={{
        transitionDelay: `${delay}ms`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,.08)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.22)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.08)' }}
    >
      {/* Background image */}
      <div className="h-32 sm:h-52 overflow-hidden">
        <img
          src={cat.image}
          alt={`${cat.title} overseas jobs from Hyderabad — Career Visa`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Dark gradient overlay — strong enough for white text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 pointer-events-none" />

      {/* Badge */}
      {cat.badge && (
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          <span className={`${cat.badgeColor} text-white text-[8px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded sm:rounded-lg uppercase tracking-wide shadow`}>
            {cat.badge}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
        <h3 className="text-white font-heading font-bold text-xs sm:text-[15px] leading-tight sm:leading-snug mb-1 sm:mb-2">
          {cat.title}
        </h3>
        {/* Role list - hidden completely on mobile */}
        <ul className="space-y-0.5 mb-2 hidden sm:block">
          {cat.roles.map(role => (
            <li key={role} className="flex items-center gap-1.5 text-white/70 font-body text-xs">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {role}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-accent font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wide group-hover:gap-2 transition-all">
          Apply →
        </span>
      </div>
    </a>
  )
}

export default function JobCategories() {
  const [showAll, setShowAll] = useState(false)
  const INITIAL_COUNT = 8
  const visibleCategories = showAll ? categories : categories.slice(0, INITIAL_COUNT)

  return (
    <section id="jobs" className="py-8 sm:py-20" style={{ background: '#f4f6f9' }}>
      <div className="container-main">
        <div className="text-center mb-6 sm:mb-14">
          <div className="inline-block bg-accent/10 text-accent font-body text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">Opportunities</div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2 sm:mb-3">Job Categories We Recruit For</h2>
          <p className="hidden sm:block text-muted font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We specialize in sourcing verified talent across 10 key industries. Whatever your trade,
            we have the right opportunity for you worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-5">
          {visibleCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} delay={Math.min(i * 60, 400)} />
          ))}
        </div>

        {/* View All button - only on mobile when not showing all */}
        {!showAll && categories.length > INITIAL_COUNT && (
          <div className="text-center mt-6 sm:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold px-4 py-2 rounded-xl transition-all active:scale-95 text-xs"
            >
              View All
              <ChevronDown size={16} />
            </button>
          </div>
        )}

        {/* CTA - hidden on mobile */}
        <div className="hidden sm:block text-center mt-12">
          <a href="#register" className="btn-primary shadow-glow">
            Apply for a Job — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
