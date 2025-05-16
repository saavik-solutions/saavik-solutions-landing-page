"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { GetServerSideProps, NextPage } from "next"

// ----- Types -----
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  tags: string[];
  category: string;
  publishedAt: string;
}

interface BlogCategoriesProps {
  categories: string[];
  blogPosts: BlogPost[];
}

// ----- Server-side data fetching -----
export const getServerSideProps: GetServerSideProps<BlogCategoriesProps> = async () => {
  try {
    const strapiURL =
      process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337'

    // Fetch categories
    const categoriesRes = await fetch(
      `${strapiURL}/api/categories?sort[0]=name:asc`
    )
    if (!categoriesRes.ok) {
      throw new Error(`Failed to fetch categories: ${categoriesRes.status}`)
    }
    const categoriesData = await categoriesRes.json()

    // Fetch blog posts
    const postsRes = await fetch(
      `${strapiURL}/api/articles?populate=image,tags,category&sort[0]=publishedAt:desc&pagination[limit]=10`
    )
    if (!postsRes.ok) {
      throw new Error(`Failed to fetch posts: ${postsRes.status}`)
    }
    const postsData = await postsRes.json()

    // Format categories
    const categories: string[] = categoriesData.data.map(
      (cat: any) => cat.attributes.name
    )
    categories.unshift("All")

    // Format blog posts
    const blogPosts: BlogPost[] = postsData.data.map((post: any) => ({
      id: post.id,
      title: post.attributes.title,
      excerpt: post.attributes.excerpt ?? post.attributes.title,
      slug: post.attributes.slug,
      image:
        post.attributes.image.data?.attributes.url
          ? `${strapiURL}${post.attributes.image.data.attributes.url}`
          : '/placeholder.svg',
      tags: post.attributes.tags.data.map(
        (tag: any) => tag.attributes.name
      ),
      category:
        post.attributes.category.data?.attributes.name ?? 'Uncategorized',
      publishedAt: post.attributes.publishedAt,
    }))

    return {
      props: {
        categories,
        blogPosts,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      props: {
        categories: ["All"],
        blogPosts: [],
      },
    }
  }
}

// ----- Animation variants -----
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

const dropdownVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } },
  },
}

// ----- Component -----
const BlogCategories: NextPage<BlogCategoriesProps> = ({
  categories,
  blogPosts,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts)
  const [loading, setLoading] = useState<boolean>(false)

  // Filter posts when category changes
  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      if (selectedCategory === 'All') {
        setFilteredPosts(blogPosts)
      } else {
        setFilteredPosts(
          blogPosts.filter(
            (post) => post.category === selectedCategory
          )
        )
      }
      setLoading(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [selectedCategory, blogPosts])

  // Memoized handler
  const handleCategoryClick = useCallback(
    (category: string) => {
      setSelectedCategory(category)
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setIsDropdownOpen(false)
      }
    },
    []
  )

  return (
    <div className="mt-12 flex flex-col lg:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:w-[260px]">
        <div className="overflow-hidden rounded-t-lg">
          <div className="bg-red-600 p-4">
            <h3 className="text-lg font-bold text-white">All Categories</h3>
          </div>
          <div className="h-[500px] overflow-y-auto bg-gray-900 category-scrollbar">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category, idx) => (
                <motion.li key={idx} variants={itemVariants}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`block w-full p-3 text-left text-sm transition-colors hover:bg-gray-800 hover:text-white ${
                      selectedCategory === category
                        ? 'bg-gray-800 text-white'
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
        <div className="overflow-hidden rounded-md">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex w-full items-center justify-between bg-red-600 p-4 text-white"
          >
            <h3 className="text-lg font-bold">{selectedCategory}</h3>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
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
                className="max-h-[300px] overflow-y-auto bg-gray-900 category-scrollbar"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <ul>
                  {categories.map((category, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`block w-full p-3 text-left text-sm transition-colors hover:bg-gray-800 hover:text-white ${
                          selectedCategory === category
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

      {/* Blog Posts List */}
      <section className="w-full lg:pl-6 lg:flex-1">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            <span className="text-red-600">{selectedCategory}</span> Articles
          </h2>
          <p className="text-sm text-gray-500">
            {filteredPosts.length}{' '}
            {filteredPosts.length === 1 ? 'article' : 'articles'} found
          </p>
        </header>

        <div className="h-[600px] overflow-y-auto pr-2 category-scrollbar">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-40 items-center justify-center"
              >
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-red-600" />
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
                key="posts"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 w-full overflow-hidden md:h-[160px] md:w-[200px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105 md:rounded-l-xl"
                        />
                        <span className="absolute bottom-0 left-0 bg-red-600 px-3 py-1 text-xs font-bold text-white">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-red-600">
                            {post.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag, idx) => (
                              <span
                                key={idx}
                                className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                                +{post.tags.length - 2}
                              </span>
                            )}
                          </div>
                          <Link
                            href={`/blogs/${post.slug}`}
                            className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-red-700 hover:shadow-md"
                          >
                            Read More
                          </Link>
                        </div>
                        <time className="mt-3 text-xs text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default BlogCategories
