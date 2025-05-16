"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const timelineEvents = [
  {
    year: "2010",
    title: "The Beginning",
    description:
      "Saavik Solutions was founded with a vision to provide innovative technology solutions to businesses worldwide.",
      images: {
        large: "https://placehold.co/600x400",
        medium: "https://placehold.co/400x300",
        small: "https://placehold.co/300x200"
      },
    highlights: [
      "Founded by tech entrepreneurs",
      "Started with web development services",
      "First office opened in San Francisco",
    ],
  },
  {
    year: "2013",
    title: "Expansion Phase",
    description:
      "We expanded our service offerings and opened our first international office to better serve our growing client base.",
      images: {
        large: "https://placehold.co/600x400",
        medium: "https://placehold.co/400x300",
        small: "https://placehold.co/300x200"
      },
    highlights: [
      "Added software development services",
      "Opened London office",
      "Reached 50 employees milestone",
    ],
  },
  {
    year: "2016",
    title: "Technology Innovation",
    description:
      "We launched our proprietary CRM and ERP solutions, helping businesses streamline operations and enhance customer relationships.",
      images: {
        large: "https://placehold.co/600x400",
        medium: "https://placehold.co/400x300",
        small: "https://placehold.co/300x200"
      },
    highlights: [
      "Launched SaavikCRM platform",
      "Expanded to APAC region",
      "First enterprise client partnerships",
    ],
  },
  {
    year: "2019",
    title: "Global Recognition",
    description:
      "Our commitment to excellence earned us industry recognition and allowed us to establish a global presence.",
      images: {
        large: "https://placehold.co/600x400",
        medium: "https://placehold.co/400x300",
        small: "https://placehold.co/300x200"
      },
    highlights: [
      "Won Technology Innovator Award",
      "Expanded to 5 global offices",
      "Reached 150 employees worldwide",
    ],
  },
  {
    year: "2022",
    title: "Digital Transformation",
    description:
      "We pivoted to focus on comprehensive digital transformation solutions, helping businesses adapt to the rapidly changing landscape.",
      images: {
        large: "https://placehold.co/600x400",
        medium: "https://placehold.co/400x300",
        small: "https://placehold.co/300x200"
      },
    highlights: [
      "Launched AI-powered solutions",
      "Strategic acquisitions",
      "Expanded service portfolio",
    ],
  },
  {
    year: "Present",
    title: "Leading the Future",
    description:
      "Today, Saavik Solutions continues to lead the industry with cutting-edge technology solutions.",
      images: {
        large: "https://placehold.co/600x400",
        medium: "https://placehold.co/400x300",
        small: "https://placehold.co/300x200"
      },
    highlights: [
      "Global leader in digital innovation",
      "Partnered with Fortune 500 clients",
      "Continued R&D in AI & cloud",
    ],
  },
]

export default function HistoryPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/about"
              className="inline-flex items-center text-gray-400 hover:text-red-400 mb-4"
            >
              <ArrowRight className="h-4 w-4 rotate-180 mr-2" />
              Back to About
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#FF0000]">History</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From our founding vision to today’s industry leadership, explore the key milestones that shaped Saavik
              Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                variants={fadeIn}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 h-64 relative rounded-xl overflow-hidden">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet="https://placehold.co/600x400"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://placehold.co/400x300"
                    />
                    <Image
                      src="https://placehold.co/300x200"
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </picture>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <p className="text-[#FF0000] font-semibold">{event.year}</p>
                  <h2 className="text-3xl font-bold">{event.title}</h2>
                  <p className="text-gray-300">{event.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {event.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
