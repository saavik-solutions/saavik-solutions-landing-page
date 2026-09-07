"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LetsDiscuss() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#F9F5FF] to-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Left Column - Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
              Let&apos;s Discuss <br />
              Your <span className="bg-gradient-to-tr from-[#6A43E7] via-[#7F38E8] to-[#E879F9] bg-clip-text text-transparent">Project!</span>
            </h2>
            <p className="mb-10 max-w-md text-lg text-gray-700">
              Share your project idea and we&apos;ll provide a free consultation on how we will turn it into an amazing
              digital product.
            </p>
            <Button className="w-full rounded-full bg-gradient-to-tr from-[#6A43E7] via-[#7F38E8] to-[#E879F9] py-6 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:max-w-xs">
              GET A QUOTE
            </Button>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            className="w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-inset ring-[#7F38E8]/30 backdrop-blur-md lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=110,+Saifabad,+Khairtabad,+Hyderabad,+Telangana+500004&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
