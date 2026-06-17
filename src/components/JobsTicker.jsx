import { Briefcase } from 'lucide-react'

const jobs = [
  { title: 'Electrician',         loc: 'Dubai, UAE',             flag: '🇦🇪', hot: true  },
  { title: 'Staff Nurse',         loc: 'Riyadh, Saudi Arabia',   flag: '🇸🇦', hot: true  },
  { title: 'Welder',              loc: 'Doha, Qatar',            flag: '🇶🇦', hot: false },
  { title: 'Security Guard',      loc: 'Kuwait City, Kuwait',    flag: '🇰🇼', hot: false },
  { title: 'IT Support Engineer', loc: 'London, UK',             flag: '🇬🇧', hot: true  },
  { title: 'Warehouse Operator',  loc: 'Toronto, Canada',        flag: '🇨🇦', hot: false },
  { title: 'Hotel Receptionist',  loc: 'Singapore',              flag: '🇸🇬', hot: false },
  { title: 'Construction Worker', loc: 'Berlin, Germany',        flag: '🇩🇪', hot: false },
  { title: 'Catering Staff',      loc: 'Sydney, Australia',      flag: '🇦🇺', hot: false },
  { title: 'Factory Worker',      loc: 'Warsaw, Poland',         flag: '🇵🇱', hot: false },
  { title: 'Nurse',               loc: 'Bucharest, Romania',     flag: '🇷🇴', hot: false },
  { title: 'Chef',                loc: 'Kuala Lumpur, Malaysia', flag: '🇲🇾', hot: false },
  { title: 'Pipe Fitter',         loc: 'Muscat, Oman',           flag: '🇴🇲', hot: false },
  { title: 'Housekeeping',        loc: 'Abu Dhabi, UAE',         flag: '🇦🇪', hot: true  },
  { title: 'Driver',              loc: 'Manama, Bahrain',        flag: '🇧🇭', hot: false },
  { title: 'HVAC Technician',     loc: 'Manchester, UK',         flag: '🇬🇧', hot: true  },
  { title: 'Scaffolder',          loc: 'Jeddah, Saudi Arabia',   flag: '🇸🇦', hot: false },
  { title: 'Plumber',             loc: 'Vancouver, Canada',      flag: '🇨🇦', hot: false },
  { title: 'Lab Technician',      loc: 'Melbourne, Australia',   flag: '🇦🇺', hot: false },
]

// Exactly 2 copies — translateX(-50%) lands at the start of the second copy,
// creating a perfect seamless loop.
const track = [...jobs, ...jobs]

function TickerItem({ job }) {
  return (
    <div className="flex items-center gap-2.5 px-5 flex-shrink-0 select-none">
      <span className="text-lg leading-none">{job.flag}</span>
      <span className="text-white font-heading font-bold text-sm whitespace-nowrap">
        {job.title}
      </span>
      <span className="text-white/40 text-sm">·</span>
      <span className="text-white/70 font-body text-sm whitespace-nowrap">
        {job.loc}
      </span>
      {job.hot && (
        <span className="bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide ml-1">
          HOT
        </span>
      )}
      <span className="text-white/20 text-base mx-2">•</span>
    </div>
  )
}

export default function JobsTicker() {
  return (
    <div className="bg-primary border-y border-white/10" style={{ overflow: 'hidden' }}>
      <div className="flex items-stretch">

        {/* Static "LIVE JOBS" label */}
        <div className="flex-shrink-0 bg-accent flex items-center gap-2 px-4 z-10">
          <Briefcase size={13} className="text-white" />
          <span className="text-white font-heading font-black text-[11px] uppercase tracking-widest whitespace-nowrap">
            Live Jobs
          </span>
        </div>

        {/* Scrolling track */}
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div className="ticker-scroll py-3">
            {track.map((job, i) => (
              <TickerItem key={i} job={job} />
            ))}
          </div>
        </div>

        {/* Apply CTA */}
        <a
          href="#register"
          className="flex-shrink-0 hidden md:flex items-center bg-accent hover:bg-accent-dark transition-colors px-5 text-white font-heading font-bold text-xs uppercase tracking-wide whitespace-nowrap"
        >
          Apply →
        </a>

      </div>
    </div>
  )
}
