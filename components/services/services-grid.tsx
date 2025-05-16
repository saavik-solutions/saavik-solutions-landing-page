'use client'
import Link from "next/link"

import { motion } from "framer-motion"

export default function ServicesGrid() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            We Provide Prominent <br />
            <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">IT Solutions</span>
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="mx-auto hidden max-w-4xl md:block">
          <div className="relative grid grid-cols-3 gap-6">
            {/* First Column */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-600 p-8 shadow-lg"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-white">
                    Web
                    <br />
                    Development
                  </h3>
                </div>
                <Link href="#" className="text-xs text-white hover:text-gray-200 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-8 shadow-lg"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-600">
                    Software
                    <br />
                    Solutions
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-600 hover:text-red-700 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Second Column */}
            <div className="mt-12 space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-600">Staffing</h3>
                </div>
                <Link href="#" className="text-xs text-red-600 hover:text-red-700 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-600">
                    CRM
                    <br />
                    Solutions
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-600 hover:text-red-700 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Third Column */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-600">
                    H R<br />
                    Solutions
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-600 hover:text-red-700 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-8 shadow-lg"
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-600">
                    Digital
                    <br />
                    Marketing
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-600 hover:text-red-700 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 sm:grid md:hidden">
          {[
            // Web Development
            { bg: "bg-red-600", text: "text-white", title: "Web\nDevelopment" },
            // HR Solutions
            { bg: "bg-white", text: "text-red-600", title: "H R\nSolutions" },
            // Software Solutions
            { bg: "bg-red-100", text: "text-red-600", title: "Software\nSolutions" },
            // Staffing
            { bg: "bg-white", text: "text-red-600", title: "Staffing" },
            // CRM Solutions
            { bg: "bg-white", text: "text-red-600", title: "CRM\nSolutions" },
            // Digital Marketing
            { bg: "bg-red-100", text: "text-red-600", title: "Digital\nMarketing" },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`flex aspect-square flex-col items-center justify-between rounded-2xl ${service.bg} p-6 shadow-lg`}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <h3 className={`text-center text-lg font-medium ${service.text}`}>
                  {service.title}
                </h3>
              </div>
              <Link href="#" className={`text-xs ${service.text} hover:opacity-80 transition-opacity duration-200`}>
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

