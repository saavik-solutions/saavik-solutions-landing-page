"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, Globe, Layers, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer" // Assuming you have a footer component

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
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-black via-black to-gray-900">
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="text-[#FF0000]">Saavik</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              A premier IT services company, delivering cutting-edge technology solutions across the globe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about/team">
                <button className="px-6 py-3 border border-white/20 hover:bg-[#FF0000] transition-colors rounded-lg flex items-center group">
                  Meet Our Team <Users className="ml-2 h-5 w-5 group-hover:text-white" />
                </button>
              </Link>
              {/* <Link href="/about/history">
                <button className="px-6 py-3 border border-white/20 hover:bg-[#FF0000] transition-colors rounded-lg flex items-center group">
                  Our History <Layers className="ml-2 h-5 w-5" />
                </button>
              </Link> */}
              <Link href="/about/mission">
                <button className="px-6 py-3 border border-white/20 hover:bg-[#FF0000] transition-colors rounded-lg flex items-center group">
                  Mission & Vision <Award className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we help businesses scale and innovate.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded on principles of innovation, integrity, and excellence, we've grown into a trusted technology partner for businesses of all sizes. Our team of experts combines technical prowess with business acumen to deliver solutions that drive real results.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/services">
                  <button className="px-6 py-3 bg-[#FF0000] hover:bg-[#ff0000bb] transition-colors rounded-lg flex items-center">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="relative h-96 rounded-xl overflow-hidden">
            <Image
                    src="/images/we-are.png"
                    alt="png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover rounded-xl"
                  />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xl font-bold">Innovative Solutions for Complex Challenges</p>
                  <p className="text-gray-300">Transforming businesses through technology</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Expertise Areas */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
            <p className="text-gray-300">
              At Saavik Solutions, we offer comprehensive technology services designed to meet the diverse needs of modern businesses.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Globe className="h-12 w-12 text-[#FF0000]" />,
                title: "Web Development",
                description: "Creating stunning, responsive websites that captivate users and drive business growth."
              },
              {
                icon: <Layers className="h-12 w-12 text-[#FF0000]" />,
                title: "Software Solutions",
                description: "Custom software development tailored to address your unique business challenges."
              },
              {
                icon: <Users className="h-12 w-12 text-[#FF0000]" />,
                title: "IT Staffing",
                description: "Finding the perfect tech talent to strengthen your team and accelerate your projects."
              },
              {
                icon: <Zap className="h-12 w-12 text-[#FF0000]" />,
                title: "Digital Marketing",
                description: "Data-driven marketing strategies to boost your online presence and acquire new customers."
              },
              {
                icon: <Award className="h-12 w-12 text-[#FF0000]" />,
                title: "CRM & ERP Solutions",
                description: "Streamlining operations and enhancing customer relationships with integrated systems."
              },
              {
                icon: <Globe className="h-12 w-12 text-[#FF0000]" />,
                title: "Global Reach",
                description: "Delivering exceptional services to clients across different continents and industries."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-[#FF0000]/30 transition-all duration-300 group"
              >
                <div className="p-4 bg-gradient-to-br from-red-900/20 to-transparent rounded-lg inline-block mb-6 group-hover:from-red-900/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
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
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black relative overflow-hidden">
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
              Let's collaborate to bring your vision to life with our cutting-edge IT solutions.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact-us">
                <button className="px-8 py-4 bg-[#FF0000] hover:bg-[#ff0000bb] transition-colors text-lg font-medium rounded-lg">
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