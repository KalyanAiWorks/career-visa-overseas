import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const posts = [
  {
    title: 'How to Get a Gulf Job in 2026: The Complete Step-by-Step Guide',
    excerpt: 'Everything you need to know — from choosing the right trade to cracking the interview and getting your visa stamped. The definitive guide for Indian workers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    date: 'June 5, 2026',
    readTime: '8 min read',
    tag: 'Career Guide',
    tagColor: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Documents Needed for UAE Work Visa: Complete Checklist 2026',
    excerpt: 'A step-by-step document checklist for Indian workers applying for a UAE work visa — from attestation to GAMCA medical and emigration clearance.',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
    date: 'May 28, 2026',
    readTime: '5 min read',
    tag: 'Visa Tips',
    tagColor: 'bg-green-50 text-green-600',
  },
  {
    title: 'Top 10 Highest-Paying Jobs in Saudi Arabia for Indian Workers',
    excerpt: 'From oil & gas to healthcare and IT — discover which trades pay the most in the Kingdom, with salary ranges updated for 2026 and what qualifications you need.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    date: 'May 15, 2026',
    readTime: '6 min read',
    tag: 'Salary Guide',
    tagColor: 'bg-amber-50 text-amber-600',
  },
]

function BlogCard({ post, delay }) {
  const ref = useScrollAnimation()
  return (
    <article
      ref={ref}
      className="animate-on-scroll card overflow-hidden p-0 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={`${post.title} — Career Visa Overseas Blog`}
          loading="lazy"
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full ${post.tagColor}`}>{post.tag}</span>
        </div>
        <h3 className="text-primary font-heading font-bold text-base sm:text-lg leading-snug mb-2 sm:mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-muted font-body text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex flex-col min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between gap-3 pt-3 border-t border-border">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted text-xs sm:text-sm">
            <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
          </div>
          <a href="#" className="text-accent font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all min-h-11">
            Read <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function BlogSection() {
  return (
    <section id="blog" className="py-8 sm:py-20" style={{ background: '#f4f6f9' }}>
      <div className="container-main">
        <div className="text-center mb-6 sm:mb-14">
          <div className="inline-block bg-accent/10 text-accent font-body text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">Insights & Guides</div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-black text-primary mb-2 sm:mb-3">Latest News & Resources</h2>
          <p className="hidden sm:block text-muted font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expert guides, visa tips, and salary information to help you prepare for your Gulf career.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} delay={i * 100} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <a href="#" className="btn-secondary">View All Articles</a>
        </div>
      </div>
    </section>
  )
}
