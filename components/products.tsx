'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export const products = [
  {
    title: "DigiZinc",
    description: "Expert marketing and branding company transforming businesses through innovative digital strategies.",
    image: "/digizinc-300x400.png",
    details: "Specializing in brand identity, digital marketing, and creative campaigns that drive engagement and conversions."
  },
  {
    title: "BookMySports",
    description: "Comprehensive sports platform for venue booking, player connections, and score tracking.",
    image: "/bms-300x400.png",
    details: "Revolutionizing sports experiences with seamless booking, community building, and performance analytics."
  },
  {
    title: "EAOverseas",
    description: "Consultancy and CRM platform for study abroad students across the globe.",
    image: "/eaoverseas-300x400.png",
    details: "Empowering students with personalized guidance, university matching, and visa assistance services."
  }
]

export default function Products() {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false))
  const [deviceType, setDeviceType] = useState("desktop")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setDeviceType("mobile")
      else if (width < 1024) setDeviceType("tablet")
      else setDeviceType("desktop")
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getImageDimensions = () => {
    switch (deviceType) {
      case "mobile": return { width: 280, height: 350 }
      case "tablet": return { width: 300, height: 380 }
      default: return { width: 320, height: 400 }
    }
  }

  const toggleFlip = (index: number) => {
    const newFlipped = [...flipped]
    newFlipped[index] = !newFlipped[index]
    setFlipped(newFlipped)
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#111] to-[#1A1A1A] py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] bg-clip-text text-transparent">Products</span> :
            <br className="hidden xs:block sm:hidden" />
            <span className="inline-block mt-1 sm:mt-0"> Innovating Across Industries</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-300 sm:mt-4 md:text-base">
            We push the boundaries of technology and creativity through our specialized solutions
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="perspective-1000 mx-auto h-[350px] w-full max-w-xs cursor-pointer sm:h-[380px] md:h-[400px]"
              onClick={() => toggleFlip(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className="relative h-full w-full"
                initial={false}
                animate={{ rotateY: flipped[index] ? 180 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <motion.div
                  className="absolute inset-0 h-full w-full overflow-hidden rounded-lg border border-gray-800 shadow-lg shadow-red-900/20"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {isClient && (
                    <div className="relative h-full w-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes={`(max-width: 640px) ${getImageDimensions().width}px,
                                (max-width: 1024px) ${getImageDimensions().width}px,
                                ${getImageDimensions().width}px`}
                        priority={index < 3} // Prioritize loading the first 3 images
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <h3 className="text-lg font-bold text-white sm:text-xl">{product.title}</h3>
                        <p className="mt-1 line-clamp-2 text-xs text-gray-300 sm:text-sm">{product.description}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-400">Tap to see details</span>
                          <motion.div
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/30"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Back of card */}
                <motion.div
                  className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg border border-red-900/30 bg-gradient-to-br from-black to-[#1A1A1A] p-6 text-center shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                  <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">{product.title}</h3>
                  <p className="mb-3 text-sm text-gray-300 sm:text-base">{product.description}</p>
                  <p className="text-xs text-gray-400 sm:text-sm">{product.details}</p>
                  <div className="mt-6">
                    <Button className="text-xs bg-gradient-to-r from-[#FF0000] to-[#FF0000]/80 hover:from-[#FF0000]/90 hover:to-[#FF0000]/70 rounded-md px-4 py-2 transition-all duration-300">
                      Learn More
                    </Button>
                  </div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white sm:mb-6 sm:text-3xl md:text-4xl">
            Visit Our Creative Wing- <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] bg-clip-text text-transparent">DigiZinc</span>
          </h2>
          <p className="mx-auto mb-3 w-full text-xs text-gray-300 sm:mb-4 sm:w-[90%] sm:text-sm md:text-base lg:w-[80%]">
            Saavik Solutions drives technology, but creativity fuels innovation! DigiZinc, our creative powerhouse,
            specializes in branding, design, and digital storytelling that captivate and convert.
          </p>
          <p className="mx-auto mb-6 w-full text-xs text-gray-300 sm:mb-8 sm:w-[90%] sm:text-sm md:text-base lg:w-[80%]">
            From stunning visuals to engaging campaigns, we craft experiences that leave a lasting impact. Whether it's
            logo design, UI/UX, ad creatives, or content production, DigiZinc transforms ideas into visually striking
            and strategically powerful assets.
          </p>
        </motion.div>

        <motion.div
  className="mx-auto mb-8 w-[90%] overflow-hidden rounded-lg border border-red-900/30 bg-black bg-opacity-50 backdrop-blur-sm sm:mb-10 sm:w-[80%] md:w-[70%] lg:w-[60%]"
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300, damping: 10 }}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="relative mx-auto h-[120px] w-[400px] sm:h-[250px]">
    <Image
      src="/images/digizinc-logo.png" // 🔁 Replace with your actual logo image path
      alt="DigiZinc Logo"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 250px, 400px"
      priority
    />
  </div>
</motion.div>


        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="w-full rounded-md bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] px-6 py-3 text-sm font-medium hover:shadow-lg hover:from-[#FF0000]/90 hover:to-[#FF0000]/70 transition-all duration-300 sm:px-8 sm:py-4 sm:text-base md:max-w-md">
              Explore Creativity at DigiZinc
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}