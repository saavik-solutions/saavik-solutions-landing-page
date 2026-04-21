"use client"

import { useEffect, useRef, useState } from "react"
//import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
//import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Search, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"


const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
    height: 'auto',
    opacity: 1,
    transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } },
  },
}

const categories = [
  "All",
  "AI & Technology",
  "Mechine Learning",
  "Web Development",
  "Perfomance",
  "Design & UX",
  "SEO",
  "Node.js",
  "React.js",
  "Branding",
  "Social Media",
  "Test",
  "Marketing Strategy",
  "Content Creation",
]

export default function BlogClient({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const filteredPosts = posts.filter((post) => {
    if (!post.title) return false;
    
  const matchesCategory =
    activeCategory === "All" || post.tags?.includes(activeCategory);

  const title = post.title || "";
  const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});
const postsPerPage = 6;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

const paginatedPosts = filteredPosts.slice(
  (currentPage - 1) * postsPerPage,
  currentPage * postsPerPage
); 
useEffect(() => {
  setCurrentPage(1);
}, [searchQuery, activeCategory]);
const topRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  setLoading(true);
  const timeout = setTimeout(() => {
    setLoading(false);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 300); // adjust duration if needed

  return () => clearTimeout(timeout);
}, [currentPage]);
  // Removed duplicate setIsDropdownOpen function

  return (
    <div className="bg-white m-none">
      {/* Header Section */}
      <section className="bg-black m-none">
        <div className="container">
          <motion.div
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Saavik Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A43E7] via-[#7F38E8] to-[#E879F9] sm:inline">Blogs</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest insights on AI technology, digital marketing trends, and industry best
              practices
            </p>
            <div className="relative max-w-md mx-auto mt-8">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search Articles"
        value={searchQuery}
        className="pl-10 pr-4 py-2 bg-background border border-[#D1D5DB] rounded-md focus:border-[#6A43E7] focus:ring-0 focus:outline-none transition-colors duration-300"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

          </motion.div>
        </div>
      </section>
      
      {/* Categories */}
 {/* <FeaturedBlogs/>  */}
<div className="container mt-12 flex flex-col lg:flex-row"> 
      
{/* Desktop Sidebar */}
<aside className="hidden lg:block lg:w-[260px]">
  <div className="overflow-hidden rounded-xl shadow-md">
    <div className="bg-gradient-to-r from-[#6A43E7] to-[#7F38E8] p-4 rounded-t-xl">
      <h3 className="text-lg font-bold text-white">Categories</h3>
    </div>
    <div className="h-[500px] overflow-y-auto bg-gray-900 category-scrollbar rounded-b-xl">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="divide-y divide-gray-800"
      >
        {categories.map((category, idx) => (
          <motion.li key={idx} variants={itemVariants}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`block w-full p-3 text-left text-sm font-medium transition-colors duration-200 hover:bg-gray-500 hover:text-white ${
                activeCategory === category
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-300'
              }`}
            >
              {category}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </div>
</aside>
{/* Mobile Dropdown */}
<div className="mb-6 lg:hidden">
  <div className="overflow-hidden rounded-xl shadow-md">
    <button
      onClick={() => setIsDropdownOpen((prev: boolean) => !prev)}
      className="flex w-full items-center justify-between bg-gradient-to-r from-[#6A43E7] to-[#7F38E8] p-4 text-white rounded-t-xl"
    >
      <h3 className="text-lg font-bold">{activeCategory || "Select Category"}</h3>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
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
          className="max-h-[300px] overflow-y-auto bg-gray-900 category-scrollbar rounded-b-xl"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ul className="divide-y divide-gray-800">
            {categories.map((category, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    setActiveCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className={`block w-full p-3 text-left text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
                    activeCategory === category
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300'
                  }`}
                >
                  {category}
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
<section className="w-full pt-12 lg:pl-6 lg:flex-1">
  <header className="flex items-center justify-between mb-4">
    <h2 className="text-gray-500 text-xl font-bold">
      <span className="text-purple-700">{activeCategory}</span> Articles
    </h2>
    <p className="text-xl text-gray-700">
      {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
    </p>
  </header>

  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex h-40 items-center justify-center"
        >
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-purple-600" />
        </motion.div>
      ) : filteredPosts.length === 0 ? (
        <motion.div
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex h-40 flex-col items-center justify-center text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <p className="text-gray-500">No articles found in this category.</p>
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
  <div className="grid grid-cols-2 ml-3 mr-3 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {paginatedPosts.map((post) => (
  <motion.article
    key={post.id || post.slug}
    variants={itemVariants}
    className="group flex flex-col h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#160d32] via-[#23113e] to-[#23113e] sm:inline shadow-md transition-transform duration-300 hover:scale-[1.02] text-white"
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <Link href={`/blogs/${post.slug}`} className="flex flex-col h-full w-full">
      {/* Image */}
      <div className="relative h-56 w-full">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="bg-gray-300 h-full w-full" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-1 flex-grow p-6 text-white">
        <h3 className="text-xl font-extrabold leading-tight line-clamp-2 group-hover:text-white-800 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-white-200 line-clamp-2">{post.excerpt}</p>
        <div className="flex justify-between text-sm text-white-900">
          <span>{post.author}</span>
          {post.date && (
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
        </div>

        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-2 mb-3">
            {post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-xs font-semibold bg-white text-purple-800 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        {post.readTime && (
          <p className="mt-2 text-xs italic text-right text-purple-300">
            {post.readTime} min read
          </p>
        )}
      </div>
    </Link>
  </motion.article>
))}

  </div> 
</motion.div>

      )}
    </AnimatePresence>
  </div>
 {totalPages > 1 && (
  <div className="flex justify-center items-center gap-4 mt-8 text-white">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-purple-700 rounded disabled:opacity-50 hover:bg-purple-800 transition"
    >
      Prev
    </button>

    <div className="flex gap-1">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded text-sm font-semibold ${
            currentPage === i + 1
              ? 'bg-purple-500 text-white'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          } transition`}
        >
          {i + 1}
        </button>
      ))}
    </div>

    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-purple-700 rounded disabled:opacity-50 hover:bg-purple-800 transition"
    >
      Next
    </button>
  </div>
)}
</section>
</div>      
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <Button size="icon" className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
</div>    
  )
}