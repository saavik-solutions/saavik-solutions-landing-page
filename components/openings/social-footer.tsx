import Link from "next/link"

export default function SocialFooter() {
  return (
    <footer className="w-full bg-red-600 py-8 text-center text-white">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-wide">IN SEARCH FOR SOME ACTION</p>
        </div>

        <div className="mb-8">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs">© Saavik Solution 2025</p>
        </div>
      </div>
    </footer>
  )
}

