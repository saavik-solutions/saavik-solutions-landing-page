'use client'

import { useRef, useState, useEffect } from "react"
import { motion, useAnimationFrame } from "framer-motion"
import { Button } from "@/components/ui/button"
import TiltedCard from "@/components/ui/tilted-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const products = [
  {
    title: "DigiZinc",
    description: "Expert marketing and branding company transforming businesses.",
    image: "/download.png",
    details: "Specializing in brand identity, digital marketing, and creative campaigns that drive engagement and conversions.",
    bgColor: "#ffffff", // white background
    textColor: "text-red-600",
    borderColor: "border-red-600",
    buttonBg: "bg-transparent border-2 border-red-600",
    buttonHoverBg: "hover:bg-red-600 hover:text-white hover:border-transparent",
    buttonText: "text-red-600",
  },
  {
    title: "Kridaz",
    description: "A dynamic platform designed to elevate the way you interact.",
    image: "/Group.svg",
    details: "Experience seamless integration and modern workflows tailored to your needs.",
    bgColor: "#ffffff",
    textColor: "text-lime-500",
    borderColor: "border-lime-500",
    buttonBg: "bg-transparent border-2 border-lime-500",
    buttonHoverBg: "hover:bg-lime-500 hover:text-gray-900 hover:border-transparent",
    buttonText: "text-lime-600",
  },
  {
    title: "EAOverseas",
    description: "Consultancy and CRM platform for study abroad students.",
    image: "/download-blue.webp",
    details: "Empowering students with personalized guidance, university matching, and visa assistance services.",
    bgColor: "#ffffff",
    textColor: "text-blue-500",
    borderColor: "border-blue-500",
    buttonBg: "bg-transparent border-2 border-blue-500",
    buttonHoverBg: "hover:bg-blue-500 hover:text-white hover:border-transparent",
    buttonText: "text-blue-500",
  }
]

const bubbles = [
  { size: 250, left: "10%", top: "20%", duration: 7, delay: 0, color: "from-blue-200/50 to-purple-200/50" },
  { size: 180, left: "80%", top: "10%", duration: 6, delay: 1, color: "from-purple-200/50 to-pink-200/50" },
  { size: 300, left: "50%", top: "60%", duration: 8, delay: 2, color: "from-indigo-200/50 to-blue-200/50" },
  { size: 200, left: "20%", top: "70%", duration: 5, delay: 0.5, color: "from-pink-200/50 to-purple-200/50" },
  { size: 150, left: "75%", top: "75%", duration: 7.5, delay: 1.5, color: "from-blue-200/50 to-indigo-200/50" },
]

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const pathRef = useRef<SVGPathElement>(null)
  const [flipped, setFlipped] = useState(Array(products.length).fill(false))

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) return;
    const autoplay = api.plugins().autoplay as any;
    if (!autoplay) return;

    if (flipped.some((f) => f)) {
      autoplay.stop()
    } else {
      autoplay.play()
    }
  }, [flipped, api])

  const toggleFlip = (index: number) => {
    const newFlipped = [...flipped]
    newFlipped[index] = !newFlipped[index]
    setFlipped(newFlipped)
  }

  useAnimationFrame(() => {
    if (!containerRef.current || !pathRef.current) return
    
    const container = containerRef.current.getBoundingClientRect()
    const points: {x: number, y: number}[] = []
    
    points.push({ x: 0, y: container.height / 2 })
    
    cardRefs.current.forEach((card) => {
      if (card) {
        const rect = card.getBoundingClientRect()
        points.push({
          x: rect.left - container.left + rect.width / 2,
          y: rect.top - container.top + rect.height / 2
        })
      }
    })
    
    points.push({ x: container.width, y: container.height / 2 })
    
    let d = `M ${points[0].x} ${points[0].y}`
    
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i]
      const p2 = points[i + 1]
      const cp1x = p1.x + (p2.x - p1.x) / 2
      const cp2x = cp1x
      d += ` C ${cp1x} ${p1.y}, ${cp2x} ${p2.y}, ${p2.x} ${p2.y}`
    }
    
    pathRef.current.setAttribute("d", d)
  })

  return (
    <section ref={containerRef} className="relative w-full bg-white py-16 md:py-32 overflow-hidden">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-tr ${bubble.color} mix-blend-multiply filter blur-2xl`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* SVG String */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block">
        <motion.path
          ref={pathRef as any}
          stroke="#E879F9"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="opacity-70"
          style={{ filter: 'drop-shadow(0px 0px 8px rgba(232, 121, 249, 0.8))' }}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </svg>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <motion.div
          className="mb-16 md:mb-24 text-center pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Our <span className="bg-gradient-to-tr from-[#6A43E7] via-[#7F38E8] to-[#E879F9] bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            Drag and pull the cards below to interact, or click to view details!
          </p>
        </motion.div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-16 lg:gap-32">
          {products.map((product, index) => (
            <motion.div
              key={index}
              ref={(el) => { cardRefs.current[index] = el }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.4}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              className="group perspective-1000 relative w-full max-w-[280px] h-[320px] cursor-pointer z-10"
              onClick={() => toggleFlip(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative h-full w-full transition-all duration-300 rounded-xl"
                initial={false}
                animate={{ rotateY: flipped[index] ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <motion.div
                  className="absolute inset-0 h-full w-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <TiltedCard
                    imageSrc={product.image}
                    altText={product.title}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={15}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    innerClassName={`border-2 ${product.borderColor}`}
                    overlayContent={
                      <div className="absolute bottom-0 w-full flex flex-col items-center justify-end pb-6 pt-4 px-4 bg-transparent">
                        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">
                          {product.title}
                        </h3>
                        <span className={`mt-2 text-xs font-semibold ${product.textColor || 'text-purple-600'}`}>
                          Click to view details ⤵
                        </span>
                      </div>
                    }
                  />
                </motion.div>

                {/* Back Side */}
                <motion.div
                  className={`absolute inset-0 flex h-full w-full flex-col p-6 rounded-xl border ${product.borderColor} bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <h3 className={`mb-2 text-lg font-bold ${product.textColor}`}>
                    {product.title}
                  </h3>
                  <p className="mb-2 text-xs text-gray-700 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <p className="mb-4 text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {product.details}
                  </p>
                  <div className="mt-auto">
                    <Button className={`w-full rounded-xl font-semibold py-4 transition-all duration-300 shadow-sm ${product.buttonBg} ${product.buttonHoverBg} ${product.buttonText}`}>
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VIEW (Carousel) */}
        <div className="md:hidden block w-full mt-8">
          <Carousel
            setApi={setApi}
            plugins={[autoplayRef.current as any]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="flex justify-center px-4 py-4">
                  <div 
                    className="group perspective-1000 relative w-full max-w-[280px] h-[320px] cursor-pointer z-10"
                    onClick={() => toggleFlip(index)}
                  >
                    <motion.div
                      className="relative h-full w-full transition-all duration-300 rounded-xl"
                      initial={false}
                      animate={{ rotateY: flipped[index] ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Side */}
                      <motion.div
                        className="absolute inset-0 h-full w-full"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <TiltedCard
                          imageSrc={product.image}
                          altText={product.title}
                          containerHeight="100%"
                          containerWidth="100%"
                          imageHeight="100%"
                          imageWidth="100%"
                          rotateAmplitude={15}
                          scaleOnHover={1.05}
                          showMobileWarning={false}
                          showTooltip={false}
                          displayOverlayContent={true}
                          innerClassName={`border-2 ${product.borderColor}`}
                          overlayContent={
                            <div className="absolute bottom-0 w-full flex flex-col items-center justify-end pb-6 pt-4 px-4 bg-transparent">
                              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">
                                {product.title}
                              </h3>
                              <span className={`mt-2 text-xs font-semibold ${product.textColor || 'text-purple-600'}`}>
                                Click to view details ⤵
                              </span>
                            </div>
                          }
                        />
                      </motion.div>

                      {/* Back Side */}
                      <motion.div
                        className={`absolute inset-0 flex h-full w-full flex-col p-6 rounded-xl border ${product.borderColor} bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <h3 className={`mb-2 text-lg font-bold ${product.textColor}`}>
                          {product.title}
                        </h3>
                        <p className="mb-2 text-xs text-gray-700 leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                        <p className="mb-4 text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {product.details}
                        </p>
                        <div className="mt-auto">
                          <Button className={`w-full rounded-xl font-semibold py-4 transition-all duration-300 shadow-sm ${product.buttonBg} ${product.buttonHoverBg} ${product.buttonText}`}>
                            Learn More
                          </Button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: products.length }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-purple-600 scale-125" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
