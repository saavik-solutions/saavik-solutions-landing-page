export default function ContactHero() {
  return (
    <section className="relative w-full bg-black pt-36 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 text-white overflow-hidden border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-base text-gray-300 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Want to explore how we can help your business grow? We&apos;re just a message away.
          </p>
        </div>
      </div>
    </section>
  )
}

