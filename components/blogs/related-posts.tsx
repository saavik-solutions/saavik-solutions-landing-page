import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

export default function RelatedPosts({ posts }: { posts: any[] }) {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold text-black">Related Articles</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
            <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-red-600">{post.title}</h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.publishedAt}</span>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

