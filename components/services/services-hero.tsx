'use client'
import { motion } from "framer-motion"

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-screen py-32 bg-cover bg-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-bg.png')" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Our <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-gray-200 md:text-xl"
          >
            We offer a comprehensive suite of IT services designed to propel your business forward. From cutting-edge
            software development to innovative digital marketing strategies, our solutions are tailored to meet your
            unique needs and drive measurable results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="rounded-full bg-gradient-to-r from-red-600 to-red-600 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

