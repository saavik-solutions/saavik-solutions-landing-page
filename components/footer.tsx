"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronUp } from "lucide-react"
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer"
import Magnet from "@/components/ui/Magnet"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const fadeInUpItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative pt-28 pb-8 font-sans">
      
      {/* Scroll To Top Button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <button 
          onClick={scrollToTop}
          className="p-3 bg-[#6A43E7] hover:bg-[#E879F9] rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* CTA Section (Purple Card Structure) */}
      <div className="container mx-auto px-4 md:px-8 mb-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-br from-[#8B5CF6] via-[#6366F1] to-[#4F46E5] rounded-[2rem] py-8 px-4 md:p-20 flex flex-col items-center text-center shadow-lg relative overflow-hidden"
        >
          {/* Subtle glow/gradient overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />
          
          <h2 className="mb-3 md:mb-4 text-3xl font-bold md:text-5xl lg:text-6xl text-white relative z-10 leading-tight">
            Let&apos;s Discuss Your Project!
          </h2>
          <p className="mb-6 md:mb-10 max-w-2xl text-base md:text-lg text-white/90 relative z-10 font-medium">
            Share your project idea and we&apos;ll provide a free consultation on how we will turn it into an amazing digital product.
          </p>
          <Magnet padding={50} disabled={!isDesktop} magnetStrength={2}>
            <button className="rounded-full bg-white px-6 py-3 md:px-10 md:py-4 text-xs md:text-base font-bold text-[#4F46E5] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 relative z-10">
              GET A QUOTE <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
            </button>
          </Magnet>
        </motion.div>
      </div>

      {/* Main Footer Card (Dark Card Structure) */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="bg-white/5 backdrop-blur-md rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
              <Link href="/" className="inline-block">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  <Image
                    src="/saavik-logo-lgn.svg"
                    alt="Saavik Solutions Logo"
                    width={120} height={48}
                    className="mr-3 brightness-0 invert opacity-90"
                  />
                </div>
              </Link>
              <p className="text-gray-400/90 text-sm leading-relaxed max-w-xs">
                Transforming businesses through innovative technology solutions that drive growth and efficiency.
              </p>
              <div className="flex space-x-3 pt-2">
                {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-white/10 hover:border-[#6A43E7] hover:bg-[#6A43E7]/10 text-gray-400 hover:text-white rounded-full transition-all" aria-label="Social link">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { path: "/about", label: "About Us" },
                  { path: "/services", label: "Services" },
                  { path: "/case-studies", label: "Case Studies" },
                  { path: "/careers", label: "Careers" },
                  { path: "/blog", label: "Blog" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.path} className="text-sm text-gray-400/90 hover:text-white transition-colors flex items-center group">
                      <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2 text-[#6A43E7]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-[#6A43E7] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-400/90 leading-relaxed">6250 West Park Dr Ste 319,<br />Houston, TX 77057<br />United States</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-4 w-4 text-[#6A43E7] mt-1 mr-3 flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+14087416969" className="text-sm text-gray-400/90 hover:text-white transition-colors">+1 (408) 741 6969</a>
                    <a href="tel:+919701563362" className="text-sm text-gray-400/90 hover:text-white transition-colors">+91 97015 63362</a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-[#6A43E7] mr-3 flex-shrink-0" />
                  <a href="mailto:info@saaviksolutions.com" className="text-sm text-gray-400/90 hover:text-white transition-colors">info@saaviksolutions.com</a>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Stay Updated</h3>
              <p className="text-sm text-gray-400/90 leading-relaxed">Subscribe to our newsletter for the latest updates, insights, and industry news.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-full focus:outline-none focus:border-[#6A43E7] focus:ring-1 focus:ring-[#6A43E7] text-sm text-gray-200 placeholder-gray-500 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 transform -translate-y-1/2 p-2.5 bg-[#6A43E7] hover:bg-[#7F38E8] rounded-full transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
                {subscribed && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-xs font-medium">
                    Thanks for subscribing!
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>

          {/* Bottom Bar inside the dark card */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm tracking-wide">
              © {new Date().getFullYear()} Saavik Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {["/privacy-policy", "/terms", "/sitemap"].map((path, idx) => (
                <Link key={idx} href={path} className="text-gray-500 hover:text-white text-sm tracking-wide transition-colors">
                  {path.split("/")[1].replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text hover effect (SAAVIK text at bottom) */}
      <div className="hidden lg:flex h-[18rem] relative z-10 w-full justify-center items-center pointer-events-none pb-4 -mt-16">
        <TextHoverEffect text="SAAVIK" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
