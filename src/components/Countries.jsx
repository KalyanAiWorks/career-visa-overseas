import { MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const countries = [
  {
    name: 'United Arab Emirates', flag: '🇦🇪',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  },
  {
    name: 'Saudi Arabia', flag: '🇸🇦',
    cities: ['Riyadh', 'Jeddah', 'Dammam'],
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&q=80',
  },
  {
    name: 'Qatar', flag: '🇶🇦',
    cities: ['Doha'],
    image: 'https://images.unsplash.com/photo-1549927681-0b673b8243ab?w=600&q=80',
  },
  {
    name: 'Kuwait', flag: '🇰🇼',
    cities: ['Kuwait City'],
    image: 'https://images.unsplash.com/photo-1573504461584-46cffd1e017e?w=600&q=80',
  },
  {
    name: 'Oman', flag: '🇴🇲',
    cities: ['Muscat'],
    image: 'https://images.unsplash.com/photo-1567606404787-92b2cb8d1057?w=600&q=80',
  },
  {
    name: 'Bahrain', flag: '🇧🇭',
    cities: ['Manama'],
    image: 'https://images.unsplash.com/photo-1597659840241-37e2b7bdd0a7?w=600&q=80',
  },
  {
    name: 'United Kingdom', flag: '🇬🇧',
    cities: ['London', 'Manchester'],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
  },
  {
    name: 'Germany', flag: '🇩🇪',
    cities: ['Berlin', 'Munich'],
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
  },
  {
    name: 'Poland', flag: '🇵🇱',
    cities: ['Warsaw', 'Kraków'],
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600&q=80',
  },
  {
    name: 'Romania', flag: '🇷🇴',
    cities: ['Bucharest'],
    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=600&q=80',
  },
  {
    name: 'Singapore', flag: '🇸🇬',
    cities: ['Singapore'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80',
  },
  {
    name: 'Malaysia', flag: '🇲🇾',
    cities: ['Kuala Lumpur'],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
  },
  {
    name: 'Australia', flag: '🇦🇺',
    cities: ['Sydney', 'Melbourne'],
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80',
  },
  {
    name: 'Canada', flag: '🇨🇦',
    cities: ['Toronto', 'Vancouver'],
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80',
  },
]

function CountryCard({ country, delay }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="animate-on-scroll group relative overflow-hidden rounded-2xl shadow-card cursor-default"
      style={{
        transitionDelay: `${delay}ms`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,.22)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '' }}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={country.image}
          alt={`${country.name} skyline`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent pointer-events-none" />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-3xl leading-none block mb-1">{country.flag}</span>
        <h3 className="text-white font-heading font-black text-base leading-tight">{country.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <MapPin size={11} className="text-accent flex-shrink-0" />
          <span className="text-white/65 font-body text-xs">{country.cities.join(' · ')}</span>
        </div>
      </div>
    </div>
  )
}

export default function Countries() {
  return (
    <section id="countries" className="py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="section-badge">Global Placement</div>
          <h2 className="section-title">Countries We Place Candidates In</h2>
          <p className="section-subtitle">
            From the Gulf to Europe, Southeast Asia, and beyond — we connect Indian professionals
            with opportunities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {countries.map((country, i) => (
            <CountryCard key={country.name} country={country} delay={Math.min(i * 50, 350)} />
          ))}
        </div>
      </div>
    </section>
  )
}
