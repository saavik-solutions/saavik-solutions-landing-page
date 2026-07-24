'use client'

import React from "react"
import Link from "next/link"
import Navbar from "./navbar"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen h-auto bg-brand-bg bg-none font-satoshi flex flex-col !items-stretch !justify-start p-0">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center pt-32 pb-16 lg:pt-36 lg:pb-20 relative">
        {/* Background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-brand-primary/20 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[150px] md:h-[200px] bg-brand-secondary/20 rounded-[100%] blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Content */}
            <div className="flex flex-col items-center z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-xs font-semibold text-gray-600 mb-8 inline-flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Enterprise Software • AI • Cloud • Digital Solutions
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
                className="text-[36px] sm:text-[42px] lg:text-[50px] font-bold text-[#111827] leading-[1.15] tracking-tight mb-4"
              >
                Building Digital Solutions <br className="hidden sm:block" />
                That Help <span className="bg-gradient-to-r from-brand-primary to-blue-500 bg-clip-text text-transparent">Businesses</span> <br className="hidden sm:block" />
                Scale Faster.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-[15px] sm:text-[16px] font-medium text-[#6B7280] leading-relaxed max-w-2xl mb-6 mx-auto"
              >
                We build enterprise software, AI solutions, cloud platforms, and digital products that accelerate business growth through scalable technology.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex flex-wrap justify-center items-center gap-4 mb-8"
              >
                <motion.div
                  animate={{ boxShadow: ["0px 0px 0px 0px rgba(108,76,245,0.0)", "0px 0px 0px 8px rgba(108,76,245,0.4)", "0px 0px 0px 0px rgba(108,76,245,0.0)"] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="rounded-full"
                >
                  <Link href="/contact-us">
                    <Button className="rounded-full px-5 py-2.5 h-auto text-[15px] font-medium bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary hover:to-brand-primary text-white border-0 shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5">
                      Let's Discuss
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div
                  animate={{ boxShadow: ["0px 0px 0px 0px rgba(156,163,175,0.0)", "0px 0px 0px 8px rgba(156,163,175,0.3)", "0px 0px 0px 0px rgba(156,163,175,0.0)"] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.25 }}
                  className="rounded-full"
                >
                  <Link href="/about">
                    <Button variant="outline" className="rounded-full px-5 py-2.5 h-auto text-[15px] font-medium text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900 transition-all">
                      Explore Our Solutions
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-2 text-gray-600 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span>Trusted by startups & enterprises</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}