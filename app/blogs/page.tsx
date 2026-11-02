import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LetsDiscuss from "@/components/lets-discuss"
import { getAllPosts } from "@/lib/getPosts"
import BlogClient from "./BlogClient"

export default function BlogPage() {
  const posts = getAllPosts()

  return ( 
    <main className="min-h-screen bg-black">
      <div className="text-black">
        <Navbar />
      </div>
      <div>
        {/* ✅ safe JSON props only */}
        <BlogClient posts={posts} />
      </div>
      <LetsDiscuss />
      <Footer />
    </main>
  )
}
