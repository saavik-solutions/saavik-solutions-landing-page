"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Cloud, ShieldCheck, Settings2, LayoutDashboard, BarChart } from "lucide-react"
import Link from "next/link"
import AnimatedHeroButton from "@/components/ui/animated-hero-button"
import GlareHover from "@/components/ui/GlareHover"
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack"
const services = [
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: "AI & Machine Learning",
    description:
      "Deploy production-ready models for personalization, predictions, and automated decision-making at scale.",
    bg: "bg-blue-100",
  },
  {
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    title: "Cloud Solutions & Migration",
    description:
      "Modernize legacy systems with scalable, cloud-native architectures built for resilience and performance.",
    bg: "bg-blue-100",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-purple-600" />,
    title: "Cybersecurity Services",
    description:
      "Protect digital assets with enterprise-grade security, real-time threat detection, and compliance frameworks.",
    bg: "bg-purple-100",
  },
  {
    icon: <Settings2 className="h-8 w-8 text-gray-600" />,
    title: "DevOps & Automation",
    description:
      "Accelerate releases with CI/CD pipelines, infrastructure-as-code, and GitOps workflows that scale.",
    bg: "bg-gray-100",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-yellow-600" />,
    title: "Custom ERP & CRM",
    description:
      "Design tailor-made ERP and CRM systems aligned with your business DNA—built for flexibility and growth.",
    bg: "bg-yellow-100",
  },
  {
    icon: <BarChart className="h-8 w-8 text-green-600" />,
    title: "Data Analytics & BI",
    description:
      "Turn complex data into actionable insights with predictive analytics, BI dashboards, and interactive reports.",
    bg: "bg-green-100",
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-black py-16 md:py-0 md:overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bokeh-background.jpg')",
            opacity: 0.2,
          }}
        />
      </div>

      {/* MOBILE LAYOUT (Pure CSS Sticky Stack - Grid Layered) */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:hidden pb-[5vh] grid grid-cols-1">
        {/* Layer 1: Sticky Header */}
        <div className="col-start-1 row-start-1 pointer-events-none z-30">
          <motion.div
            className="flex flex-col space-y-4 sticky top-[100px] py-4 pb-[40vh] pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Engineered for You.
                <br />
                <span className="bg-gradient-to-tr from-[#6A43E7] to-[#E879F9] bg-clip-text text-transparent">Scaled by Us.</span>
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                Whether you&apos;re modernizing or scaling, we build the digital core that powers your next chapter.
              </p>
            </div>
            <Button className="w-fit rounded-full bg-gradient-to-tr from-[#6A43E7] to-[#E879F9] px-6 py-2 text-sm font-medium uppercase transition-all hover:scale-105">
              EXPLORE MORE
            </Button>
          </motion.div>
        </div>

        {/* Layer 2: Native CSS Stacking Cards */}
        <div className="col-start-1 row-start-1 flex flex-col relative z-10 w-full pt-[250px]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="sticky rounded-[2rem] border border-white/10 bg-[#121217] p-6 shadow-[0_-15px_30px_rgba(0,0,0,0.8)] origin-top"
              style={{ 
                top: `calc(360px + ${i * 12}px)`, 
                zIndex: 10 + i, 
                scale: 1 - i * 0.05, 
                marginBottom: '10vh' 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="mb-4 flex flex-col sm:flex-row sm:items-start">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.bg} sm:mb-0`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white sm:ml-4 sm:text-lg">
                  {service.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT (Fully Pinned Section, Only Cards Scroll) */}
      <div className="hidden md:block">
        
        {/* Pinned Background */}
        <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 z-0">
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: "url('/images/bokeh-background.jpg')" }}
            />
          </div>
        </div>

        {/* Foreground Content */}
        <div className="container relative z-10 mx-auto px-6 flex items-start gap-12 lg:gap-16 -mt-[100vh]">
          
          {/* Left Side: Pinned Text */}
          <div className="w-5/12 sticky top-0 h-screen flex flex-col pt-[30vh]">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-4"
            >
              Engineered for You.<br />
              <span className="bg-gradient-to-tr from-[#6A43E7] to-[#E879F9] bg-clip-text text-transparent leading-tight">Scaled by Us.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md text-gray-300 text-base lg:text-lg mb-8 leading-relaxed"
            >
              Whether you&apos;re modernizing or scaling, we build the digital core that powers your next chapter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/services">
                <AnimatedHeroButton text="EXPLORE MORE" showIcon={false} />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Scrolling Cards */}
          <div className="w-7/12 flex flex-col gap-12 pt-[30vh] pb-[40vh]">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="w-full"
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  background="#121217"
                  borderRadius="1.5rem"
                  borderColor="rgba(255, 255, 255, 0.1)"
                  glareColor="#ffffff"
                  glareOpacity={0.2}
                  className="group shadow-2xl backdrop-blur-xl hover:border-purple-500/30 transition-colors w-full"
                >
                  <div className="p-8 lg:p-10 w-full h-full flex flex-col justify-start">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${service.bg} shadow-inner`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#6A43E7] group-hover:via-[#7F38E8] group-hover:to-[#E879F9] transition-all">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </GlareHover>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
