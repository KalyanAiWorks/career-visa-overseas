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
]

function CategoryCard({ cat, delay }) {
  const ref = useScrollAnimation()
  return (
    <a
      href="#register"
      ref={ref}
      className="animate-on-scroll block group relative overflow-hidden rounded-2xl"
      style={{
        transitionDelay: `${delay}ms`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,.08)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.22)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.08)' }}
    >
      {/* Background image */}
      <div className="h-56 overflow-hidden">
        <img
          src={cat.image}
          alt={cat.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Dark gradient overlay — strong enough for white text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 pointer-events-none" />

      {/* Badge */}
      {cat.badge && (
        <div className="absolute top-3 right-3">
          <span className={`${cat.badgeColor} text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wide shadow`}>
            {cat.badge}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-heading font-black text-[15px] leading-snug mb-2">
          {cat.title}
        </h3>
        <ul className="space-y-0.5 mb-3">
          {cat.roles.map(role => (
            <li key={role} className="flex items-center gap-1.5 text-white/70 font-body text-xs">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {role}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-accent font-heading font-bold text-xs uppercase tracking-wide group-hover:gap-2 transition-all">
          Apply →
        </span>
      </div>
    </a>
  )
}

export default function JobCategories() {
  return (
    <section id="jobs" className="py-20" style={{ background: '#f4f6f9' }}>
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="section-badge">Opportunities</div>
          <h2 className="section-title">Job Categories We Recruit For</h2>
          <p className="section-subtitle">
            We specialize in sourcing verified talent across 10 key industries. Whatever your trade,
            we have the right opportunity for you worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} delay={Math.min(i * 60, 400)} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#register" className="btn-primary shadow-glow">
            Apply for a Job — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
