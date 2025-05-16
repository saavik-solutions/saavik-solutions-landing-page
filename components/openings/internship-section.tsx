import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function InternshipSection() {
  return (
    <section className="relative w-full bg-gray-900 py-16 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Students working together"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Looking for <span className="text-red-500">Internships?</span>
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-gray-300 md:text-base">
            Gain hands-on experience, work on real projects, and learn from industry experts in IT, software
            development, and marketing. Kickstart your career with meaningful, real-world challenges, and growth
            opportunities at Saavik Solutions.
          </p>
          <Button className="rounded-md bg-red-600 px-6 py-2 text-sm font-medium hover:bg-red-700">
            Apply Now for Internship
          </Button>
        </div>
      </div>
    </section>
  )
}

