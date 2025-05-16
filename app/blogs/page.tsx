'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturedBlogs from "@/components/blogs/featured-blogs"
import TrendingNews from "@/components/blogs/trending-news"
import BlogCategories from "@/components/blogs/blog-categories"
import LetsDiscuss from "@/components/lets-discuss"

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-black text-black">
        <Navbar />
      </div>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <FeaturedBlogs />
          <TrendingNews trendingPosts={[]} />
          <BlogCategories categories={[]} blogPosts={[]} />
        </div>
      </div>
      <LetsDiscuss />
      <Footer />
    </main>
  )
}

