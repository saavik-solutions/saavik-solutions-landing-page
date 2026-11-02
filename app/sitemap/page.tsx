import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { getAllPosts } from "@/lib/getPosts"
import { 
  Compass, 
  Layers, 
  Users, 
  Briefcase, 
  BookOpen, 
  ShieldCheck, 
  ArrowUpRight, 
  ExternalLink,
  Code2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sitemap | Saavik Solutions",
  description: "Explore the complete directory of pages, services, career opportunities, and technology insights across Saavik Solutions.",
}

export default function SitemapPage() {
  const posts = getAllPosts() as Array<{ slug: string; title?: string }>

  const mainPages = [
    { title: "Home", href: "/", description: "Overview of premier IT services and software development solutions." },
    { title: "About Us", href: "/about", description: "Our company mission, technical expertise, and vision." },
    { title: "Services", href: "/services", description: "Comprehensive IT services from cloud to AI solutions." },
    { title: "Careers", href: "/careers", description: "Culture, work benefits, and life at Saavik Solutions." },
    { title: "Job Openings", href: "/openings", description: "Explore open job listings, internships, and opportunities." },
    { title: "Blogs & Insights", href: "/blogs", description: "Technical articles, industry news, and digital strategy guides." },
    { title: "Contact Us", href: "/contact-us", description: "Get a free consultation, quote, or visit our office." },
  ]

  const aboutSubpages = [
    { title: "Our Leadership & Team", href: "/about/team", description: "Meet the engineers, architects, and leaders behind Saavik." },
    { title: "Mission & Vision", href: "/about/mission", description: "Our driving core values, philosophy, and future aspirations." },
  ]

  const serviceCategories = [
    { title: "Web & App Development", href: "/services", description: "Scalable modern web applications, APIs, and portals." },
    { title: "Software Solutions", href: "/services", description: "Custom enterprise software aligned with business objectives." },
    { title: "AI & Machine Learning", href: "/services", description: "Intelligent predictive models and automation pipelines." },
    { title: "Cloud Architecture & Migration", href: "/services", description: "Resilient, secure cloud deployments on AWS & GCP." },
    { title: "ERP & CRM Integration", href: "/services", description: "Custom business management systems and workflows." },
    { title: "IT Staffing Solutions", href: "/services", description: "Elite tech talent augmentation and dedicated teams." },
  ]

  const legalPages = [
    { title: "Privacy Policy", href: "/privacy-policy", description: "How we collect, protect, and handle data across our services." },
    { title: "Terms of Service", href: "/terms", description: "Legal terms, service obligations, and commercial agreements." },
    { title: "Raw XML Sitemap", href: "/sitemap.xml", description: "Machine-readable XML sitemap for search engines." },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-black text-white">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Compass className="h-3.5 w-3.5 text-purple-400" />
              <span>NAVIGATION DIRECTORY</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Website{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sitemap
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Browse through our complete website structure, service directories, career listings, and technical articles.
            </p>

            <Link
              href="/sitemap.xml"
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-medium text-purple-400 hover:text-purple-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full transition-colors"
            >
              <span>View Machine-Readable XML Sitemap</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sitemap Sections Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* 1. Main Pages */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <Layers className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Main Navigation Pages</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainPages.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-300 hover:bg-white/[0.06] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. Company & About */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <Users className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Company & About</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutSubpages.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. Core Services & Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <Code2 className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white tracking-tight">IT Services & Solutions</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceCategories.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. Blog Articles */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white tracking-tight">Published Insights & Articles</h2>
                </div>
                <Link href="/blogs" className="text-xs text-purple-400 hover:underline">
                  View All &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 p-4 transition-all duration-200 hover:bg-white/[0.05] flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-gray-300 group-hover:text-purple-300 transition-colors line-clamp-1">
                      {post.title}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 shrink-0 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* 5. Legal & Policies */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <ShieldCheck className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Legal & Compliance</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {legalPages.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 p-5 transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
