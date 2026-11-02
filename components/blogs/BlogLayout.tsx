import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'

export default function BlogLayout({
  children,
  frontMatter,
}: {
  children: React.ReactNode
  frontMatter: any
}) {
  return (
    <article className="pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 mb-8 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to all articles
      </Link>

      <header className="mb-10 text-center">
        {frontMatter.category && (
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
            {frontMatter.category}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          {frontMatter.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          {frontMatter.author && (
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-purple-400" />
              <span>{frontMatter.author}</span>
            </div>
          )}
          {frontMatter.date && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-purple-400" />
              <time>
                {new Date(frontMatter.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          )}
        </div>
      </header>

      {/* Blog Cover Image */}
      {frontMatter.image && (
        <div className="relative h-[300px] sm:h-[420px] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <Image
            src={frontMatter.image}
            alt={frontMatter.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-invert prose-purple max-w-none leading-relaxed text-gray-200">
        {children}
      </div>
    </article>
  )
}
