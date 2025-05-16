"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    review: "The Review",
    feedback: "Feedback Summary",
    name: "Founder, Saavik Pvt. Ltd.",
    position: "Raj",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    rating: 5.0,
    review: "Exceptional Service",
    feedback: "Their team delivered beyond our expectations",
    name: "CTO, TechVision Inc.",
    position: "Sarah",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    rating: 4.9,
    review: "Outstanding Results",
    feedback: "The solutions provided transformed our business",
    name: "Director, Global Innovations",
    position: "Michael",
    image: "/images/testimonial-3.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const maxIndex = testimonials.length - 1

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    }

    if (isRightSwipe) {
      handlePrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-col justify-between gap-6 text-center sm:mb-12 md:mb-16 md:flex-row md:items-center md:text-left">
          <motion.h2 
            className="text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Empowered by Our
            <br className="hidden xs:inline sm:hidden" /> Client's <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] bg-clip-text text-transparent">Stories</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <Button className="rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] px-6 py-2.5 text-sm font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3">
              VIEW ALL REVIEWS
            </Button>
          </motion.div>
        </div>

        {/* Indicators for Mobile */}
        <div className="mb-4 flex justify-center space-x-2 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === currentIndex ? "bg-[#FF0000] w-6" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none md:flex md:h-12 md:w-12 md:-left-6 lg:-left-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none md:flex md:h-12 md:w-12 md:-right-6 lg:-right-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Testimonial Slider */}
          <div
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-0 sm:px-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <div className="flex flex-col sm:flex-row">
                      {/* Image Container */}
                      <div className="relative h-64 w-full sm:h-auto sm:w-2/5">
                        <Image
                          src={testimonial.image}
                          alt={`Testimonial by ${testimonial.position}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 384px"
                          className="object-cover"
                          priority={testimonial.id === 1}
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 flex items-center sm:hidden">
                          <span className="mr-1 text-lg font-bold text-white">{testimonial.rating}</span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Container */}
                      <div className="flex flex-1 flex-col justify-center bg-gradient-to-br from-[#FF0000]/10 to-white p-6 sm:p-8">
                        <div className="mb-4 hidden items-center sm:flex">
                          <span className="mr-2 text-xl font-bold text-black sm:text-2xl">{testimonial.rating}</span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
                            ))}
                          </div>
                        </div>
                        <h3 className="mb-4 text-xl font-bold bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] bg-clip-text text-transparent sm:mb-6 sm:text-2xl">
                          {testimonial.review}
                        </h3>
                        <p className="mb-6 text-base text-gray-600 leading-relaxed sm:mb-8 sm:text-lg">
                          {testimonial.feedback}
                        </p>
                        <div>
                          <p className="text-lg font-semibold text-black sm:text-xl">{testimonial.position}</p>
                          <p className="text-sm text-gray-500">{testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Buttons */}
        <div className="mt-6 flex justify-center space-x-4 md:hidden">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] text-white shadow-md transition-all hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] text-white shadow-md transition-all hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}