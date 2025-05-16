"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronUp } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  
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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Scroll To Top Button */}
      <div className="container mx-auto px-6 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-[#FF0000] hover:bg-[#e60000] rounded-full shadow-lg transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
          <Link href="/" className="inline-block">
    <div className="flex items-center">
      {/* Footer Logo */}
      <Image
        src="/saavik-logo-lg.png"        // your footer‑optimized logo
        alt="Saavik Solutions Logo"
        width={120} height={48}
        className="mr-3"
      />
        </div>
  </Link>
            <p className="text-gray-400">
              Transforming businesses through innovative technology solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-[#FF0000] rounded-full transition-colors" aria-label="Social link">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/case-studies", label: "Case Studies" },
                { path: "/careers", label: "Careers" },
                { path: "/blog", label: "Blog" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-[#FF0000] transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF0000] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">16-2-701/d/2, Palton<br />Dayanand Nagar, Malakpet<br />Hyderabad, Telangana 500036</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#FF0000] mr-3 flex-shrink-0" />
                <a href="tel:+14155551234" className="text-gray-400 hover:text-[#FF0000] transition-colors">+1 (415) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#FF0000] mr-3 flex-shrink-0" />
                <a href="mailto:info@saavik.com" className="text-gray-400 hover:text-[#FF0000] transition-colors">info@saavik.com</a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpItem} className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for the latest updates, insights, and industry news.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] text-gray-200 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[#FF0000] hover:bg-[#e60000] rounded-md transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {subscribed && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-sm">
                  Thanks for subscribing!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Saavik Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["/privacy-policy", "/terms", "/sitemap"].map((path, idx) => (
                <Link key={idx} href={path} className="text-gray-500 hover:text-[#FF0000] text-sm transition-colors">
                  {path.split("/")[1].replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
