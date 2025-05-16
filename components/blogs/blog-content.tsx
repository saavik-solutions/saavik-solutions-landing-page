export default function BlogContent({ content }: { content: string }) {
  return (
    <article className="prose prose-lg max-w-none text-gray-800 prose-headings:font-bold prose-headings:text-black prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-red-600 prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:not-italic prose-strong:font-bold prose-strong:text-black prose-ul:list-disc prose-ol:list-decimal">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

