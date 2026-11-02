"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Search, MessageCircle, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react"

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

const dropdownVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } },
  },
}

const categories = [
  "All",
  "AI & Technology",
  "Machine Learning",
  "Web Development",
  "Performance",
  "Design & UX",
  "SEO",
  "Digital Marketing",
  "Branding",
  "Marketing Strategy",
  "Content Creation",
]

export default function BlogClient({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const filteredPosts = posts.filter((post) => {
    if (!post.title) return false

    const matchesCategory =
      activeCategory === "All" ||
      post.tags?.some((t: string) => t.toLowerCase() === activeCategory.toLowerCase()) ||
      (post.category && post.category.toLowerCase() === activeCategory.toLowerCase())

    const title = post.title || ""
    const excerpt = post.excerpt || ""
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      title.toLowerCase().includes(query) ||
      excerpt.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  const postsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory])

  const topRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
      topRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 250)

    return () => clearTimeout(timeout)
  }, [currentPage])

  return (
    <div className="w-full">
      {/* Hero Header Section */}
      <section className="relative w-full bg-black text-white pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Ambient Brand Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>LATEST ARTICLES & INSIGHTS</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Saavik Solutions{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Blogs
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI technology, digital marketing trends, and industry best practices.
            </p>

            <div className="relative max-w-lg mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-400" />
              <Input
                type="text"
                placeholder="Search articles by title, topic or keyword..."
                value={searchQuery}
                className="pl-12 pr-4 py-3 h-12 bg-white/10 text-white placeholder-gray-400 border border-white/15 rounded-full backdrop-blur-md focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:outline-none transition-all duration-300 text-sm md:text-base shadow-inner"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Blog Content Section */}
      <div className="bg-[#FAF9FD] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-[280px] shrink-0">
            <div className="sticky top-28 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-500 px-5 py-4 text-white">
                <h3 className="text-sm font-bold tracking-wider uppercase">Categories</h3>
              </div>
              <div className="max-h-[520px] overflow-y-auto category-scrollbar p-2">
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-1"
                >
                  {categories.map((category, idx) => {
                    const count =
                      category === "All"
                        ? posts.length
                        : posts.filter(
                            (p) =>
                              p.tags?.some((t: string) => t.toLowerCase() === category.toLowerCase()) ||
                              (p.category && p.category.toLowerCase() === category.toLowerCase())
                          ).length

                    return (
                      <motion.li key={idx} variants={itemVariants}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                            activeCategory === category
                              ? "bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/20"
                              : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                          }`}
                        >
                          <span>{category}</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              activeCategory === category
                                ? "bg-white/20 text-white font-semibold"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      </motion.li>
                    )
                  })}
                </motion.ul>
              </div>
            </div>
          </aside>

          {/* Mobile Dropdown */}
          <div className="mb-4 lg:hidden">
            <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex w-full items-center justify-between bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-500 px-5 py-3.5 text-white"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-purple-200">Category:</span>
                  <span className="font-semibold text-sm">{activeCategory}</span>
                </div>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="max-h-[300px] overflow-y-auto category-scrollbar p-2"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <ul className="space-y-1">
                      {categories.map((category, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => {
                              setActiveCategory(category)
                              setIsDropdownOpen(false)
                            }}
                            className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                              activeCategory === category
                                ? "bg-purple-600 text-white font-semibold"
                                : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                            }`}
                          >
                            <span>{category}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Posts Section */}
          <div ref={topRef} />
          <section className="w-full lg:flex-1 p-0">
            <header className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/80">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {activeCategory}
                </span>{" "}
                Articles
              </h2>
              <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
              </span>
            </header>

            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-64 items-center justify-center"
                >
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
                </motion.div>
              ) : filteredPosts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex h-64 flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
                >
                  <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">No articles found</h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    We couldn&apos;t find any articles matching your search. Try another category or different keywords.
                  </p>
                  <Button
                    onClick={() => {
                      setActiveCategory("All")
                      setSearchQuery("")
                    }}
                    className="mt-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-5 py-2 hover:scale-105 transition-transform"
                  >
                    View All Articles
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={`posts-page-${currentPage}-${activeCategory}-${searchQuery}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedPosts.map((post) => (
                      <motion.article
                        key={post.id || post.slug}
                        variants={itemVariants}
                        whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                      >
                        <Link href={`/blogs/${post.slug}`} className="flex flex-col h-full w-full">
                          {/* Card Thumbnail */}
                          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                            {post.image ? (
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 h-full w-full flex items-center justify-center">
                                <span className="text-purple-600 font-semibold text-sm">Saavik Solutions</span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Card Content */}
                          <div className="flex flex-col justify-between flex-1 p-5">
                            <div>
                              {/* Date & Read Time */}
                              <div className="flex items-center justify-between text-xs text-gray-400 mb-2.5">
                                {post.date && (
                                  <div className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5 text-purple-500" />
                                    <time>
                                      {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                      })}
                                    </time>
                                  </div>
                                )}
                                {post.readTime && (
                                  <div className="flex items-center gap-1 text-purple-600 font-medium">
                                    <Clock className="h-3 w-3" />
                                    <span>{post.readTime} min read</span>
                                  </div>
                                )}
                              </div>

                              {/* Title */}
                              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-snug mb-2">
                                {post.title}
                              </h3>

                              {/* Excerpt */}
                              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
                                {post.excerpt}
                              </p>
                            </div>

                            {/* Tags & Author */}
                            <div className="pt-3 border-t border-gray-100 mt-auto">
                              {Array.isArray(post.tags) && post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                  {post.tags.slice(0, 3).map((tag: string, index: number) => (
                                    <span
                                      key={index}
                                      className="text-[11px] font-medium bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full border border-purple-100"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-gray-500 truncate max-w-[140px]">
                                  {post.author}
                                </span>
                                <span className="font-semibold text-purple-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                  Read Article <ArrowRight className="h-3 w-3 inline" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-200 transition-all shadow-sm"
                >
                  Previous
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all ${
                        currentPage === i + 1
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-purple-600/30"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-200 transition-all shadow-sm"
                >
                  Next
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <Link href="/contact-us">
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-purple-600/30 transition-transform duration-300 hover:scale-110"
              aria-label="Contact us"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
