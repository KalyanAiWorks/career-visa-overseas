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
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
  },
  {
    name: 'Kuwait', flag: '🇰🇼',
    cities: ['Kuwait City'],
    image: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=600&q=80',
  },
  {
    name: 'Oman', flag: '🇴🇲',
    cities: ['Muscat'],
    image: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?w=600&q=80',
  },
  {
    name: 'Bahrain', flag: '🇧🇭',
    cities: ['Manama'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
  },
  {
    name: 'USA', flag: '🇺🇸',
    cities: ['New York', 'Houston', 'Chicago'],
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80',
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

function CountryCard({ country, delay, isMobileScroll = false }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`animate-on-scroll group relative overflow-hidden rounded-2xl shadow-card cursor-default ${isMobileScroll ? 'min-w-[180px] flex-shrink-0 snap-center' : ''}`}
      style={{
        transitionDelay: `${delay}ms`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,.22)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '' }}
    >
      {/* Image */}
      <div className="h-32 sm:h-44 lg:h-48 overflow-hidden">
        <img
          src={country.image}
          alt={`${country.name} skyline`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient overlay - darker for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <span className="text-xl sm:text-3xl leading-none block mb-0.5 sm:mb-1">{country.flag}</span>
        <h3 className="text-white font-heading font-black text-sm sm:text-base leading-tight">{country.name}</h3>
        <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
          <MapPin size={10} className="text-accent flex-shrink-0" />
          <span className="text-white/70 font-body text-xs sm:text-sm truncate">{country.cities.join(' · ')}</span>
        </div>
      </div>
    </div>
  )
}

export default function Countries() {
  return (
    <section id="countries" className="py-14 sm:py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="section-badge">Global Placement</div>
          <h2 className="section-title">Countries We Place Candidates In</h2>
          <p className="section-subtitle">
            From the Gulf to Europe, Southeast Asia, and beyond — we connect Indian professionals
            with opportunities worldwide.
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden relative -mx-4">
          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 px-4 pb-2">
            {countries.map((country, i) => (
              <CountryCard key={country.name} country={country} delay={Math.min(i * 50, 350)} isMobileScroll={true} />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {countries.map((country, i) => (
            <CountryCard key={country.name} country={country} delay={Math.min(i * 50, 350)} />
          ))}
        </div>
      </div>
    </section>
  )
}
