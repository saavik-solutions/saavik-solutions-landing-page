'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { motion } from "framer-motion"

export default function CareersHero() {
  return (
    <section className="relative w-full min-h-[500px] py-20 bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Join the Future of <br />
              <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-gray-300"
            >
              At Saavik Solutions, we don't just build solutions—we create success. As a team of passionate innovators,
              problem-solvers, and tech enthusiasts, we push the boundaries of cutting-edge IT support and software
              development to help businesses thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button className="rounded-full bg-gradient-to-r from-red-600 to-red-600 px-8 py-3 text-sm font-medium uppercase hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Job Openings
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl"
            >
             <Image
                    src="/images/video-poster.jpg"
                    alt="careers-hero"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover rounded-xl"
                  />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

