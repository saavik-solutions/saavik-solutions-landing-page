'use client'
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-opacity-70">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/about-bg.png')",
            filter: "brightness(0.3)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            About <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000] bg-clip-text text-transparent">Saavik</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200 md:text-xl"
          >
            Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
            globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
            help businesses scale and innovate.
          </motion.p>
        </div>

        {/* Mission & Vision Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* First Column */}
            <div className="flex flex-col gap-8">
              {/* Mission Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/10"
              >
                <h2 className="mb-4 text-2xl font-bold text-white">MISSION</h2>
                <p className="text-base leading-relaxed text-gray-200">
                  To revolutionize businesses with smart, scalable, and efficient digital solutions that enhance
                  performance, optimize operations, and foster long-term success.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/10"
              >
                <h2 className="mb-4 text-2xl font-bold text-white">VISION</h2>
                <p className="text-base leading-relaxed text-gray-200">
                  To be the global leader in delivering innovative IT solutions that transform businesses and create
                  sustainable value for our clients.
                </p>
              </motion.div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-8">
              {/* Rocket Launch Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl h-[400px]"
              >
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="https://placehold.co/800x400"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://placehold.co/600x300"
                  />
                  <img
                    src="https://placehold.co/400x200"
                    alt="Rocket launch"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </motion.div>

              {/* Code/Text Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl h-[300px] relative"
              >
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="https://placehold.co/800x300"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://placehold.co/600x225"
                  />
                  <img
                    src="https://placehold.co/400x150"
                    alt="Blurred code"
                    className="h-full w-full object-cover brightness-50"
                  />
                </picture>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Innovation Through Technology</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

