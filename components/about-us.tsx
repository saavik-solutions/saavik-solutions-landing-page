'use client'

import { useRef, useState, useEffect } from "react"
import { PlayCircle, PauseCircle, VolumeX, Volume2 } from "lucide-react"
import Link from "next/link"
import AnimatedHeroButton from "@/components/ui/animated-hero-button"
import { motion } from "framer-motion"

export default function AboutUs() {
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  if (!isMounted) return <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white" />

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-between">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block"
          >
            <span className="bg-[#6A43E7] px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white">
              About Us
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            We at <span className="text-[#6A43E7]">Saavik Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl"
          >
            Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
            globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
            help businesses scale and innovate.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 items-center"
          >
            <Link href="/about">
              <AnimatedHeroButton text="LEARN MORE" showIcon={false} />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Video Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 lg:w-5/12 h-[350px] md:h-[450px] relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group shrink-0"
          style={{
            backgroundImage: 'url("/about-us.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
           <video 
             ref={videoRef} 
             src="/about-us.mp4" 
             autoPlay 
             loop 
             muted={isMuted} 
             className="w-full h-full mix-blend-darken" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
           
           {/* Video Controls */}
           <div className="absolute inset-0 z-20 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button onClick={togglePlay} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white">
               {isPlaying ? <PauseCircle className="w-10 h-10" /> : <PlayCircle className="w-10 h-10" />}
             </button>
             <button onClick={toggleMute} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white">
               {isMuted ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
             </button>
           </div>
           
           <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-white text-sm pointer-events-none">
             <span className="bg-gradient-to-r from-[#6A43E7] to-[#E879F9] px-2 py-1 rounded font-semibold">
               Saavik
             </span>
             <span className="text-white/80 text-xs hidden md:block">Transforming businesses</span>
           </div>
        </motion.div>

      </div>
    </section>
  )
}
