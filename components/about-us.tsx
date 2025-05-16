'use client'
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PlayCircle, PauseCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutUs() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0  "></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-block">
              <span className="bg-[#FF0000] px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white">
                About Us
              </span>
            </div>
            
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              We are <span className="text-[#FF0000]">Saavik Solutions</span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg leading-relaxed text-gray-700"
            >
              Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
              globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
              help businesses scale and innovate. Our commitment to excellence and customer success drives us to
              transform ideas into powerful digital solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link href="/about">
                <Button className="rounded-md bg-[#FF0000] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#cc0000] hover:shadow-xl">
                  LEARN MORE
                </Button>
              </Link>
              
              {/* <div className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                  <span className="text-xl font-bold text-[#FF0000]">15+</span>
                </div>
                <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Right column - Video */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-2xl border border-white/10">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster="/images/video-poster.jpg"
                preload="metadata"
                playsInline
                muted
                loop
              >
                <source src="/videos/tech-meeting-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={togglePlayPause}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-full bg-[#FF0000]/30 p-3 backdrop-blur-sm cursor-pointer"
                >
                  {isPlaying ? (
                    <PauseCircle className="h-16 w-16 text-white drop-shadow-lg" />
                  ) : (
                    <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                  )}
                </motion.button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="text-white text-sm font-medium">
                  <span className="bg-[#FF0000] px-2 py-1 rounded">Saavik</span> Solutions
                </div>
                <div className="text-white/80 text-xs">
                  Transforming businesses through technology
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

