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
          alt={post.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.tagColor}`}>{post.tag}</span>
        </div>
        <h3 className="text-primary font-heading font-bold text-lg leading-snug mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-muted font-body text-base leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex flex-col min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between gap-3 pt-4 border-t border-border">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted text-sm">
            <span className="flex items-center gap-1"><Calendar size={13} />{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
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
    <section id="blog" className="py-14 sm:py-20" style={{ background: '#f4f6f9' }}>
      <div className="container-main">
        <div className="text-center mb-14">
          <div className="section-badge">Insights & Guides</div>
          <h2 className="section-title">Latest News & Resources</h2>
          <p className="section-subtitle">
            Expert guides, visa tips, and salary information to help you prepare for your Gulf career.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} delay={i * 100} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="btn-secondary">View All Articles</a>
        </div>
      </div>
    </section>
  )
}
