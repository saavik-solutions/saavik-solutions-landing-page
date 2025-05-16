"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Target, Lightbulb, Users, Globe, ChevronRight, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MissionPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("mission")
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
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

  const slideIn = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace cutting-edge technologies to solve complex challenges.",
      icon: <Lightbulb className="h-6 w-6 text-[#FF0000]" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting high standards and consistently delivering quality.",
      icon: <Target className="h-6 w-6 text-[#FF0000]" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
      icon: <Users className="h-6 w-6 text-[#FF0000]" />
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical responsibility.",
      icon: <Globe className="h-6 w-6 text-[#FF0000]" />
    }
  ]

  const milestones = [
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding our global reach and impact through innovative solutions."
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Established as a leading provider in our industry with award-winning solutions."
    },
    {
      year: "2020",
      title: "Expansion Phase",
      description: "Grew our team to 250+ experts across 18 countries, serving global clients."
    },
    {
      year: "2017",
      title: "Foundation",
      description: "Founded with a vision to transform industries through innovative technology."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-[#FF0000]/20 z-10" />
        
          <motion.div variants={fadeIn} className="relative h-96 rounded-xl overflow-hidden">
           
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </motion.div>
        
          <motion.div variants={fadeIn} className="relative h-96 order-1 lg:order-2 rounded-xl overflow-hidden">
            {/* <Image
              src="/images/vision-image.jpg"
              alt="Our Vision"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
              className="object-cover rounded-xl"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-3xl mb-8 md:mb-0"
            >
              <div className="mb-4">
                <Link href="/about" className="text-gray-400 hover:text-[#FF0000] transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 rotate-180 mr-2" /> Back to About
                </Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-[#FF0000]">Mission</span> & <span className="text-[#FF0000]">Vision</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Driving innovation and creating value through technology solutions that empower businesses and improve lives around the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10"
            >
              <p className="text-lg font-semibold text-[#FF0000]">Our Purpose</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#FF0000] mr-3" />
                  <p>Transform Industries</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#FF0000] mr-3" />
                  <p>Empower Businesses</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#FF0000] mr-3" />
                  <p>Create Lasting Impact</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#FF0000] text-white'
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mt-16">
            {activeTab === "mission" && (
              <motion.div
                key="mission"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeIn} className="relative h-96 rounded-xl overflow-hidden">
                <Image
                    src="/images/sustainability.jpg"
                    alt="Making a Difference"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </motion.div>

                <motion.div variants={fadeIn} className="space-y-6">
                  <h2 className="text-4xl font-bold text-white">Our <span className="text-[#FF0000]">Mission</span></h2>
                  <p className="text-xl text-gray-300">
                    We exist to solve complex business challenges through innovative technology solutions that drive growth, efficiency, and competitive advantage for our clients.
                  </p>

                  <div className="space-y-4 mt-8">
                    {[...Array(3)].map((_, i) => (
                      <motion.div variants={slideIn} key={i} className="flex items-start">
                        <ChevronRight className="h-6 w-6 text-[#FF0000] mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-300">
                          {[
                            "Develop cutting-edge solutions that address real-world business problems",
                            "Partner with organizations to accelerate their digital transformation journeys",
                            "Create value through technology that enhances operational efficiency and customer experiences"
                          ][i]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "vision" && (
              <motion.div
                key="vision"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeIn} className="order-2 lg:order-1 space-y-6">
                  <h2 className="text-4xl font-bold text-white">Our <span className="text-[#FF0000]">Vision</span></h2>
                  <p className="text-xl text-gray-300">
                    To be the global leader in transformative technology solutions, recognized for our innovation, expertise, and the measurable impact we create for our clients and communities.
                  </p>

                  <div className="space-y-6 mt-8">
                    {["Transformative Impact", "Global Leadership"].map((heading, i) => (
                      <motion.div
                        variants={fadeIn}
                        key={i}
                        className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border-l-4 border-[#FF0000]"
                      >
                        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
                        <p className="text-gray-300">
                          {[
                            "Pioneering solutions that fundamentally transform how businesses operate and compete in the digital era.",
                            "Setting industry standards and leading the way in technological innovation and excellence."
                          ][i]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative h-96 order-1 lg:order-2 rounded-xl overflow-hidden">
                  <Image
                    src="/images/sustainability.jpg"
                    alt="Making a Difference"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </motion.div>
              </motion.div>
            )}

            {activeTab === "values" && (
              <motion.div
                key="values"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-12"
              >
                <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-white mb-6">Our <span className="text-[#FF0000]">Core Values</span></h2>
                  <p className="text-xl text-gray-300">
                    These principles guide our actions, decisions, and interactions every day, shaping our culture and defining who we are as an organization.
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-[#FF0000]/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-[#FF0000]/20 rounded-lg mr-4 group-hover:bg-[#FF0000] transition-all duration-300">
                          {value.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{value.title}</h3>
                      </div>
                      <p className="text-gray-300">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Journey & Milestones</h2>
            <p className="text-gray-300">
              From our founding to the present day, we've been on a mission to drive innovation and create impact.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-800 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="relative"
                >
                  <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FF0000] z-10"></div>

                  <div className="md:pt-8 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-[#FF0000]/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="text-[#FF0000] font-bold text-3xl">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-lg"
            >
              <h2 className="text-3xl font-bold mb-6">
                Making a <span className="text-[#FF0000]">Difference</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Our commitment extends beyond business success. We're dedicated to creating positive change through technology and innovation.
              </p>

              <motion.div variants={staggerContainer} className="space-y-6 mb-8">
                <motion.div variants={fadeIn} className="flex items-start">
                  <div className="p-2 bg-[#FF0000]/20 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#FF0000]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
                    <p className="text-gray-400">
                      We develop technologies that help businesses reduce their environmental footprint and operate more sustainably.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <div className="p-2 bg-[#FF0000]/20 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 text-[#FF0000]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                    <p className="text-gray-400">
                      Through mentorship programs and educational initiatives, we're helping build the next generation of technology leaders.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <Link href="/about/impact">
                <button className="px-6 py-3 bg-[#FF0000] hover:bg-[#e60000] transition-colors rounded-lg flex items-center">
                  Learn About Our Impact <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden"
            >
               <Image
                    src="/images/sustainability.jpg"
                    alt="Making a Difference"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover rounded-xl"
                  />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-2xl font-bold">Creating Positive Change</p>
                  <p className="text-gray-300">Through innovation and technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#FF0000]/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}  
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Join Us on Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're looking to transform your business or join our team, we invite you to be part of our journey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 bg-[#FF0000] hover:bg-[#e60000] transition-colors rounded-lg">
                  Contact Us
                </button>
              </Link>  
              <Link href="/careers">
                <button className="px-8 py-3 border border-white/20 hover:bg-white/10 transition-colors rounded-lg">
                  Join Our Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
