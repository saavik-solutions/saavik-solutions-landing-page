"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Target, Lightbulb, Users, Globe, ChevronRight, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedHeroButton from "@/components/ui/animated-hero-button"

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

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const slideIn: Variants = {
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
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting high standards and consistently delivering quality.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical responsibility.",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  // const milestones = [
  //   {
  //     year: "2025",
  //     title: "Future Vision",
  //     description: "Expanding our global reach and impact through innovative solutions."
  //   },
  //   {
  //     year: "2023",
  //     title: "Market Leadership",
  //     description: "Established as a leading provider in our industry with award-winning solutions."
  //   },
  //   {
  //     year: "2020",
  //     title: "Expansion Phase",
  //     description: "Grew our team to 250+ experts across 18 countries, serving global clients."
  //   },
  //   {
  //     year: "2017",
  //     title: "Foundation",
  //     description: "Founded with a vision to transform industries through innovative technology."
  //   }
  // ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[65vh] lg:min-h-[75vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center flex flex-col items-center"
            >
              {/* Back to About - ONLY shown on mobile view */}
              <div className="mb-6 block md:hidden">
                <Link href="/about" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40">
                  <ArrowRight className="h-4 w-4 rotate-180 mr-2" /> Back to About
                </Link>
              </div>

              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-center">
                Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Mission & Vision</span>
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-300 max-w-4xl text-center mx-auto">
                Driving continuous innovation and engineering enduring value through cutting-edge technology solutions that empower enterprises, transform complex industries, and improve lives around the world. Guided by purpose and technical excellence, we deliver forward-thinking digital solutions that redefine what&apos;s possible.
              </p>

              {/* Purpose Badges */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {[
                  "Transform Industries",
                  "Empower Businesses",
                  "Create Lasting Impact"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/40 transition-colors"
                  >
                    <span className="h-2 w-2 rounded-full bg-purple-500 mr-2.5 shadow-sm shadow-purple-500/50" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-20 md:py-28 bg-white text-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-14"
          >
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-base sm:text-lg transition-all duration-300 font-medium ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-600 to-purple-600 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mt-8">
            {activeTab === "mission" && (
              <motion.div
                key="mission"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <motion.div variants={fadeIn} className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/sustainability.jpg"
                    alt="Our Mission"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover rounded-2xl"
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    At Saavik Solutions, we exist to solve complex business challenges through innovative, human-centric technology solutions that drive sustainable growth, operational efficiency, and lasting competitive advantage for our clients worldwide.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    By seamlessly blending technical excellence with deep strategic insight, we empower forward-thinking organizations across diverse industries to accelerate digital transformation, modernize legacy systems, and achieve measurable, high-impact results.
                  </p>

                  <div className="flex gap-4 mt-8">
                    <Link href="/services">
                      <AnimatedHeroButton text="OUR SERVICES" showIcon={false} />
                    </Link>
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <motion.div variants={fadeIn} className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Vision</span>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    To be the premier global leader in transformative technology solutions, recognized for our relentless innovation, engineering excellence, and the measurable impact we create for our clients and communities worldwide.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We envision a future where organizations of every scale seamlessly harness intelligent digital ecosystems to achieve unprecedented agility, operational resilience, and enduring competitive advantage.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      {
                        title: "Transformative Impact",
                        desc: "Pioneering solutions that fundamentally transform how modern businesses operate, innovate, and compete in the digital era."
                      },
                      {
                        title: "Global Leadership",
                        desc: "Setting industry benchmarks and leading the way in technological innovation, engineering rigor, and client partnership."
                      }
                    ].map((item, i) => (
                      <motion.div
                        variants={fadeIn}
                        key={i}
                        className="bg-gray-50 hover:bg-purple-50/50 p-6 rounded-xl border-l-4 border-purple-600 border-t border-r border-b border-gray-200/70 shadow-sm transition-all"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Link href="/services">
                      <AnimatedHeroButton text="OUR SERVICES" showIcon={false} />
                    </Link>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative h-96 order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/sustainability.jpg"
                    alt="Our Vision"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover rounded-2xl"
                  />
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
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Core Values</span>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
                    These foundational principles guide our decisions, inspire our craftsmanship, and shape our culture every day—defining who we are and ensuring we consistently deliver excellence for every client we serve.
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-500/50 shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3.5 bg-purple-100 text-purple-600 rounded-xl mr-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{value.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
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
      {/* <section className="py-16 bg-black">
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
                  <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-600 z-10"></div>

                  <div className="md:pt-8 bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-600/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="text-purple-400 font-bold text-3xl">
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
      </section> */}

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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Making a <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Difference</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our commitment extends beyond business success. We&apos;re dedicated to creating positive change through technology and innovation.
              </p>

              <motion.div variants={staggerContainer} className="space-y-6 mb-8">
                <motion.div variants={fadeIn} className="flex items-start">
                  <div className="p-2 bg-purple-600/20 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
                    <p className="text-gray-400">
                      We develop technologies that help businesses reduce their environmental footprint and operate more sustainably.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <div className="p-2 bg-purple-600/20 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                    <p className="text-gray-400">
                      Through mentorship programs and educational initiatives, we&apos;re helping build the next generation of technology leaders.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <Link href="/about/impact">
                <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-600 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}  
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Our Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you&apos;re looking to transform your business or join our team, we invite you to be part of our journey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link href="/contact-us">
                <AnimatedHeroButton text="CONTACT US" showIcon={false} />
              </Link>  
              <Link href="/careers">
                <button className="px-8 py-3.5 border border-white/20 hover:bg-white/10 transition-colors rounded-full text-sm font-medium uppercase tracking-wide">
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
