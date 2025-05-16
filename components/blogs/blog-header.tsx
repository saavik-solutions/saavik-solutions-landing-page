import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

export default function BlogHeader({ post }: { post: any }) {
  return (
    <div className="relative w-full bg-black pb-12 pt-20 text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <div className="mb-10">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/blogs" className="text-sm font-medium text-gray-400 hover:text-white">
                      Blog
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm font-medium text-gray-300">Current Article</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Categories */}
          <div className="mb-6 flex flex-wrap gap-2">
            {post.categories.map((category: string, index: number) => (
              <Link
                key={index}
                href={`/blogs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full bg-red-600 px-4 py-1 text-xs font-medium text-white hover:bg-red-700"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="mb-8 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{post.title}</h1>

          {/* Meta Information */}
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>By {post.author.name}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-8 h-[450px] w-full overflow-hidden rounded-lg">
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

