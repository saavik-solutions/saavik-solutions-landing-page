import Link from "next/link"

export default function SocialFooter() {
  return (
    <footer className="w-full bg-[#6A43E7] py-8 text-center text-white">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-wide">CONNECT WITH US</p>
        </div>

        <div className="mb-8">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Link
                href="https://www.linkedin.com/company/saavik-solutions-inc/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline inline-flex items-center gap-1.5"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs">© Saavik Solutions 2026</p>
        </div>
      </div>
    </footer>
  )
}
