"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way businesses develop and implement enterprise software solutions.",
    category: "Technology",
    date: "Apr 15, 2025",
    image: "/images/home-blog-1.jpeg",
    slug: "ai-enterprise-software",
  },
  {
    id: 2,
    title: "5 Ways Digital Transformation Is Reshaping Customer Experience",
    excerpt:
      "Learn how companies are leveraging digital transformation strategies to create exceptional customer experiences.",
    category: "Digital Strategy",
    date: "Apr 10, 2025",
    image: "/images/home-blog-2.jpeg",
    slug: "digital-transformation-cx",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications with Modern Frameworks",
    excerpt:
      "Explore the best practices and technologies for developing web applications that can scale with your business needs.",
    category: "Web Development",
    date: "Apr 5, 2025",
    image: "/images/home-blog-3.jpeg",
    slug: "scalable-web-applications",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-black py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Latest <span className="bg-gradient-to-r from-[#6A43E7] to-[#E879F9] bg-clip-text text-transparent">Insights</span> & News
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base"
            >
              Stay updated with the latest trends, technologies, and strategies in the IT industry through our expert
              articles and insights.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="mt-4 self-start rounded-full bg-gradient-to-r from-[#6A43E7] to-[#E879F9] px-8 py-3 text-sm font-medium uppercase text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              VIEW ALL POSTS
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6A43E7]/20 p-[2px]"
            >
              {/* Spinning Gradient Background for Animated Border */}
              <div 
                className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#6A43E7_85%,#E879F9_100%)] z-0" 
                style={{ animationDelay: `-${index * 2.6}s` }}
              />
              
              {/* Inner Content Container */}
              <div className="relative z-10 h-full w-full rounded-[10px] bg-gray-950 overflow-hidden flex flex-col transition-colors duration-300 group-hover:bg-gray-900">
                <div className="relative h-48 md:h-64 w-full overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill={true}
                  className="object-cover transition-transform duration-500 md:group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-[#6A43E7] to-[#E879F9] px-4 py-1 text-xs font-semibold uppercase text-white shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold leading-tight mb-4 md:mb-0 md:group-hover:mb-4 transition-all duration-300">
                  <Link href={`/blogs/${post.slug}`} className="hover:text-[#E879F9] transition-colors duration-300">
                    {post.title}
                  </Link>
                </h3>
                <div className="max-h-[200px] opacity-100 md:max-h-0 md:opacity-0 overflow-hidden transition-all duration-500 ease-in-out md:group-hover:max-h-[200px] md:group-hover:opacity-100">
                  <p className="mb-4 text-xs md:text-sm text-gray-400">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs md:text-sm text-gray-400">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}