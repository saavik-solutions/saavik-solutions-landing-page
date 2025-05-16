'use client'
import { motion } from "framer-motion"

export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-bold text-black md:text-5xl"
        >
          Why Work With <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Us?</span>
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start">
          {/* Innovation Driven */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex h-[220px] w-[280px] flex-col items-center justify-center rounded-2xl bg-red-600 p-6 text-white shadow-lg"
          >
            <h3 className="mb-4 text-center text-2xl font-bold">
              Innovation
              <br />
              Driven
            </h3>
            <p className="text-center text-sm leading-relaxed">
              Work on cutting-edge projects
              <br />
              that challenge and inspire you.
            </p>
          </motion.div>

          {/* Collaborative Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex h-[220px] w-[280px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-red-600 shadow-lg"
          >
            <h3 className="mb-4 text-center text-2xl font-bold">
              Collaborative
              <br />
              Culture
            </h3>
            <p className="text-center text-sm leading-relaxed">
              Join a team that values ideas,
              <br />
              creativity, and teamwork.
            </p>
          </motion.div>

          {/* Impactful Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex h-[220px] w-[280px] flex-col items-center justify-center rounded-2xl bg-red-600 p-6 text-white shadow-lg"
          >
            <h3 className="mb-4 text-center text-2xl font-bold">
              Impactful
              <br />
              Work
            </h3>
            <p className="text-center text-sm leading-relaxed">
              Your contributions matter,
              <br />
              shaping the success of
              <br />
              businesses worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

