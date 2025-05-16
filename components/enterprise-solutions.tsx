"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const solutions = [
  {
    id: 1,
    title: "Custom Web Applications",
    image: "/images/web-application.jpg",
    description: "Tailored web solutions crafted to match your business needs, ensuring performance and scalability.",
  },
  {
    id: 2,
    title: "Enterprise Software",
    image: "/images/enterprise-software.jpg",
    description: "Robust and scalable systems for large organizations to streamline workflows and enhance productivity.",
  },
  {
    id: 3,
    title: "Digital Transformation",
    image: "/images/digital-transformation.jpg",
    description: "Empowering businesses with modern tech to transform traditional operations into digital excellence.",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    image: "/images/cloud-solutions.jpg",
    description: "Secure and scalable cloud services to boost agility, collaboration, and cost-efficiency.",
  },
  {
    id: 5,
    title: "Data Analytics",
    image: "/images/data-analytics.jpg",
    description: "Unlock insights from your data using powerful analytics tools to drive smarter decisions.",
  },
]

export default function EnterpriseSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1)
      else if (window.innerWidth < 1024) setVisibleItems(2)
      else if (window.innerWidth < 1280) setVisibleItems(3)
      else setVisibleItems(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, solutions.length - visibleItems)

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1))
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50 && currentIndex < maxIndex) handleNext()
    if (distance < -50 && currentIndex > 0) handlePrev()
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl"
          >
            Our Unique, Trendy & <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000] bg-clip-text text-transparent">Profitable</span> Enterprise
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000] bg-clip-text text-transparent">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl text-lg text-gray-700"
          >
            We empower businesses with cutting-edge IT solutions, revolutionizing the way they operate, innovate, and grow.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div
            ref={containerRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className="px-2 flex-shrink-0"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-lg bg-white/90 backdrop-blur-sm border border-white/20"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={index < visibleItems} // Prioritize loading visible images
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <h3 className="text-xl font-semibold text-black mb-3">{solution.title}</h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-gray-700"
                      >
                        {solution.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                onClick={handlePrev}
                size="icon"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000] hover:shadow-xl transition-all duration-300 hover:scale-105"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                onClick={handleNext}
                size="icon"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000] hover:shadow-xl transition-all duration-300 hover:scale-105"
                disabled={currentIndex === maxIndex}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}