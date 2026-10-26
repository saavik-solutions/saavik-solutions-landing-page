"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ArrowRight, ArrowUpRight, X, Briefcase, Calendar, Globe, Mail, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6"
import AnimatedHeroButton from "@/components/ui/animated-hero-button"

interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
  social: Record<string, string | undefined>
}

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("Visionaries at the Helm")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null)
    }
    if (selectedMember) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedMember])

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <FaGithub className="h-4 w-4" />;
      case 'linkedin': return <FaLinkedin className="h-4 w-4" />;
      case 'twitter': return <FaXTwitter className="h-4 w-4" />;
      case 'instagram': return <FaInstagram className="h-4 w-4" />;
      default: return null;
    }
  };

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

  const teamTabs = {
  "Visionaries at the Helm": "Guiding Saavik Solutions toward a smarter digital future.",
  "Builders & Innovators": "Engineering scalable solutions with precision and creativity.",
  "Creative & Design Team": "Transforming ideas into delightful user experiences.",
  "Strategy & Growth": "Driving digital growth through data, design, and direction.",
  "Technical Consultants": "Empowering clients with tailored technology solutions and strategic guidance.",
};

  // Sample team data - would normally come from API or CMS
const teamMembers = {
  "Visionaries at the Helm": [
    {
      name: "Bhargava Raj",
      position: "Managing Director",
      image: "/images/team/bhargavaraj.png",
      bio: "As the visionary founder and Managing Director of Saavik Solutions, Bhargava Raj leads the company's strategic direction and innovation initiatives.",
      social: {
        linkedin: "https://linkedin.com/in/bhargava-raj",
        twitter: "https://twitter.com/bhargava-raj"
      }
    },
    {
      name: "Santhosh Kattaa",
      position: "Director",
      image: "/images/team/Santhosh_Kattaa.png",
      bio: "Santhosh Kattaa plays a key role in shaping organizational strategy and driving operational excellence.",
      social: { 
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Laya Sri",
      position: "Head of Operations",
      image: "/images/team/layasri.png",
      bio: "Laya Sri orchestrates our operational excellence, ensuring seamless service delivery and quality.",
      social: {
        linkedin: "https://linkedin.com/in/layasri",
        twitter: "https://twitter.com/layasri"
      }
    }
  ],

  "Strategy & Growth": [
    {
      name: "Sonali",
      position: "Human Resources Manager",
      image: "/images/team/sonali.png",
      bio: "Leads talent acquisition and employee development initiatives, fostering a healthy culture at Saavik.",
      social: {
        linkedin: "https://linkedin.com/in/sonali"
      }
    },
    {
      name: "Sridhar Goud",
      position: "Business Development Director",
      image: "/images/team/sridhar_goud.png",
      bio: "Sridhar Goud leads business partnerships, sales enablement, and client expansion strategies at Saavik.",
      social: { linkedin: "#", twitter: "#" }
    }
  ],

  "Builders & Innovators": [
    {
      name: "Srikar Kudurmalla",
      position: "Head of Engineering",
      image: "/images/team/srikar.webp",
      bio: "Leads engineering teams and product architecture with a focus on scalability and high performance.",
      social: {
        linkedin: "https://linkedin.com/in/srikar",
        github: "https://github.com/srikar"
      }
    },
    {
      name: "Mounika",
      position: "Software Development Engineer",
      image: "/images/team/mounika.png",
      bio: "Mounika contributes to core development projects, specializing in scalable and modular frontend/backend systems.",
      social: {
        linkedin: "https://linkedin.com/in/mounika",
        github: "https://github.com/mounika"
      }
    },
    {
      name: "Lohita Elizabeth",
      position: "Frontend Developer - Intern",
      image: "/images/team/lohita.png",
      bio: "Lohita crafts seamless UIs using modern frontend technologies, ensuring responsive experiences.",
      social: {
        linkedin: "https://linkedin.com/in/lohita",
        github: "https://github.com/lohita"
      }
    },
    {
      name: "Shiva Santosh",
      position: "Software Development - Intern",
      image: "/images/team/shiva_santosh.png",
      bio: "Bio will be added soon.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Deeksha",
      position: "Software Development - Intern",
      image: "/images/team/deeksha.png",
      bio: "Bio will be added soon.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Dhanush",
      position: "Software Development - Intern",
      image: "/images/team/dhanush.png",
      bio: "Bio will be added soon.",
      social: {
        linkedin: "#"
      }
    }
  ],

  "Creative & Design Team": [
    {
      name: "Sampad Dutta",
      position: "Lead Manager - Digizinc",
      image: "/images/team/sampad_dutta.png",
      bio: "Sampad brings creative excellence, blending aesthetics and functionality into world-class UI/UX designs.",
      social: {
        linkedin: "https://linkedin.com/in/sampad-dutta",
        // github: "https://github.com/sampath"
      }
    }
  ],

  "Technical Consultants": [
    {
      name: "Ravi",
      position: "Tech Lead - Consultant",
      image: "/images/team/ravi.png",
      bio: "Ravi spearheads technical strategy and client solutions. (More details pending)",
      social: {
        linkedin: "https://linkedin.com/in/ravi",
        twitter: "https://twitter.com/ravi"
      }
    },
    {
      name: "Maheshwar Reddy",
      position: "Senior Software Development Engineer   - Consultant",
      image: "/images/team/maheshwar.png",
      bio: "Bio will be added soon.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Mohan",
      position: "Full Stack Developer - Consultant",
      image: "/images/team/mohan.png",
      bio: "Architects robust solutions, mentors devs, and leads complex builds across the stack.",
      social: {
        linkedin: "https://linkedin.com/in/mohan",
        github: "https://github.com/mohan"
      }
    },
    {
      name: "Salma",
      position: "DevOps Engineer - Consultant",
      image: "/images/team/salma.png",
      bio: "Bio will be added soon.",
      social: {
        linkedin: "#"
      }
    }
  ]
};




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
                Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-300 max-w-4xl text-center mx-auto">
                Meet the passionate innovators, engineers, and strategists behind Saavik Solutions. Our diverse multidisciplinary team combines deep technical expertise with creative problem-solving to engineer transformative digital experiences, build scalable high-performance solutions, and drive enduring business growth for forward-thinking organizations worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Tabs */}
   <section className="py-16 bg-gradient-to-b from-black to-gray-900">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="mb-12 text-center"
    >
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {Object.keys(teamTabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 font-medium ${
              activeTab === tab
                ? 'bg-gradient-to-r from-purple-600 to-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-4">
        {teamTabs[activeTab as keyof typeof teamTabs]}
      </p>
    </motion.div>

    {/* Team Members Grid */}
    <motion.div 
      key={activeTab}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {teamMembers[activeTab as keyof typeof teamMembers]?.map((member, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          onClick={() => setSelectedMember(member as any)}
          className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-purple-600/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:shadow-xl hover:shadow-purple-900/20"
        >
          {/* Image Section */}
          <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black/40">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </div>

          {/* Info Section - Name, Designation and View More button with icon */}
          <div className="p-5 flex items-center justify-between gap-3 bg-gradient-to-b from-gray-900/90 to-black">
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold group-hover:text-purple-400 transition-colors truncate">
                {member.name}
              </h3>
              <p className="text-purple-400 text-sm font-medium truncate mt-0.5">
                {member.position}
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMember(member);
              }}
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-200 bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm"
              aria-label={`View details for ${member.name}`}
            >
              <span>View More</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      
      {/* Locations */}
      {/* <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Global Locations</h2>
            <p className="text-gray-300">
              Our team members work across multiple locations worldwide, bringing diverse perspectives to every project.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { city: "San Francisco", country: "USA", icon: <MapPin className="h-5 w-5" /> },
              { city: "London", country: "United Kingdom", icon: <MapPin className="h-5 w-5" /> },
              { city: "Singapore", country: "Singapore", icon: <MapPin className="h-5 w-5" /> },
              { city: "Mumbai", country: "India", icon: <MapPin className="h-5 w-5" /> }
            ].map((location, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex items-center text-purple-400 mb-3">
                  {location.icon}
                  <span className="ml-2 text-lg font-medium">{location.city}</span>
                </div>
                <p className="text-gray-400">{location.country}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      
      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden"
            >
              <Image 
                src="/images/video-poster.jpg"
                alt="Join Our Team"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-2xl font-bold">Join Our Growing Team</p>
                  <p className="text-gray-300">Explore exciting career opportunities</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-lg"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                Join the Saavik Team
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-300 mb-6">
                We&apos;re always looking for talented individuals who are passionate about technology and innovation. Join our diverse team and work on exciting projects that make a difference.
              </motion.p>
              <motion.div variants={staggerContainer} className="space-y-4 mb-8">
                {[
                  "Collaborative work environment",
                  "Professional growth opportunities",
                  "Work with cutting-edge technologies",
                  "Global, diverse team culture"
                ].map((benefit, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-purple-600 mr-3" />
                    <p>{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
                <Link href="/careers">
                  <AnimatedHeroButton text="VIEW OPEN POSITIONS" showIcon={false} />
                </Link>
                <Link href="/contact-us">
                  <button className="px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors rounded-lg flex items-center">
                    Contact Us <Mail className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Member Detail Modal Popup */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-[#12111c] to-black border border-white/15 rounded-2xl shadow-2xl shadow-purple-900/40 p-6 sm:p-8 text-white"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full bg-black/70 hover:bg-black/90 text-gray-200 hover:text-white border border-white/20 shadow-lg transition-colors z-30 backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                {/* Profile Image */}
                <div className="relative w-full md:w-56 h-72 sm:h-80 md:h-80 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-black">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover"
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Member Details */}
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <span className="inline-block text-xs uppercase tracking-wider font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-3">
                      {activeTab}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                      {selectedMember.name}
                    </h2>
                    <p className="text-purple-400 text-base sm:text-lg font-medium mb-4">
                      {selectedMember.position}
                    </p>
                    <div className="h-px bg-white/10 w-full mb-4" />
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                        About
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  {selectedMember.social && Object.keys(selectedMember.social).length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                        Connect
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {Object.entries(selectedMember.social).map(([platform, url]) => {
                          const icon = getSocialIcon(platform);
                          if (!icon) return null;

                          return (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-purple-600 text-gray-300 hover:text-white border border-white/10 hover:border-purple-500 transition-all text-xs font-medium"
                              aria-label={`${selectedMember.name} on ${platform}`}
                            >
                              {icon}
                              <span className="capitalize">{platform}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}