'use client'
import { motion } from "framer-motion"

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[65vh] lg:min-h-[75vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-cover bg-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/about-bg.png')" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-center"
          >
            Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-base md:text-lg leading-relaxed text-gray-300 max-w-3xl text-center mx-auto"
          >
            We offer a comprehensive suite of end-to-end IT services designed to propel your business forward in an evolving digital landscape. From bespoke software development, AI solutions, and cloud architecture to strategic IT staffing, CRM & ERP integration, and data-driven marketing, our high-performance solutions are tailored to solve complex challenges, accelerate digital transformation, and drive sustainable growth for organizations worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={() => {
                const el = document.getElementById("services-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-gradient-to-r from-purple-600 to-purple-600 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

