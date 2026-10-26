"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Award, Globe, Layers, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer" // Assuming you have a footer component
import AnimatedHeroButton from "@/components/ui/animated-hero-button"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[65vh] lg:min-h-[75vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-center">
              About <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Saavik</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-300 max-w-3xl text-center mx-auto">
              A premier IT services company, delivering cutting-edge technology solutions across the globe. With specialized expertise in custom software development, staffing, CRM, ERP, and digital marketing, we empower forward-thinking businesses to scale efficiently, accelerate growth, and innovate with confidence.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link href="/about/team">
                <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-600 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center group">
                  Meet Our Team <Users className="ml-2 h-4 w-4" />
                </button>
              </Link>
              {/* <Link href="/about/history">
                <button className="rounded-full border-2 border-purple-600 px-8 py-3 text-sm font-medium uppercase text-white hover:bg-purple-600 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl flex items-center group">
                  Our History <Layers className="ml-2 h-4 w-4" />
                </button>
              </Link> */}
              <Link href="/about/mission">
                <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-600 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center group">
                  Mission & Vision <Award className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20 md:py-28 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl tracking-tight">
                Who <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">We Are</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we help businesses scale and innovate.
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                Founded on principles of innovation, integrity, and excellence, we&apos;ve grown into a trusted technology partner for businesses of all sizes. Our team of experts combines technical prowess with business acumen to deliver solutions that drive real results.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/services">
                  <AnimatedHeroButton text="OUR SERVICES" showIcon={false} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/we-are.png"
                alt="Who We Are"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-bold">Innovative Solutions for Complex Challenges</p>
                  <p className="text-gray-200">Transforming businesses through technology</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Expertise Areas */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
              Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
              At Saavik Solutions, we offer comprehensive technology services designed to meet the diverse needs of modern businesses.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              {
                icon: <Globe className="w-7 h-7" />,
                title: "Web Development",
                description: "Creating stunning, responsive websites that captivate users and drive business growth."
              },
              {
                icon: <Layers className="w-7 h-7" />,
                title: "Software Solutions",
                description: "Custom software development tailored to address your unique business challenges."
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "IT Staffing",
                description: "Finding the perfect tech talent to strengthen your team and accelerate your projects."
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Digital Marketing",
                description: "Data-driven marketing strategies to boost your online presence and acquire new customers."
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "CRM & ERP Solutions",
                description: "Streamlining operations and enhancing customer relationships with integrated systems."
              },
              {
                icon: <Globe className="w-7 h-7" />,
                title: "Global Reach",
                description: "Delivering exceptional services to clients across different continents and industries."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] p-8 border border-white/15 hover:border-purple-500/60 backdrop-blur-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-purple-600/20"
              >
                {/* Glass top reflection highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10" />

                {/* Glass Lightning Glare Sweep Pass */}
                <div className="absolute inset-0 -translate-x-[160%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/35 via-purple-300/40 to-transparent group-hover:translate-x-[260%] transition-transform duration-700 ease-out pointer-events-none z-20" />

                {/* Radial glow effects on hover */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-150 group-hover:bg-purple-600/35 transition-all duration-500" />
                <div className="absolute -bottom-20 -left-20 w-36 h-36 bg-purple-900/20 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-900/30 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Top row: Icon badge and arrow button */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-purple-600/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-purple-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-600/30 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-purple-500/40 group-hover:bg-purple-600/20 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Bottom interactive accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Global Presence */}
      {/* <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Global Presence</h2>
            <p className="text-gray-300">
              With clients and team members across the globe, we bring diverse perspectives to solve complex challenges.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-96 rounded-xl overflow-hidden"
          >
            <Image 
              src="https://placehold.co/1200x500" 
              alt="Global Map" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
              <div className="w-full p-8">
                <div className="flex flex-wrap gap-6 justify-center">
                  {["North America", "Europe", "Asia", "Australia", "Africa"].map((region, i) => (
                    <div key={i} className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                      {region}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-300 mb-8">
              Let&apos;s collaborate to bring your vision to life with our cutting-edge IT solutions.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact-us">
                <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-600 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get a Free Consultation
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}