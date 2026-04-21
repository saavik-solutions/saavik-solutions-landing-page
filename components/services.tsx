"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Cloud, ShieldCheck, Settings2, LayoutDashboard, BarChart } from "lucide-react"

const services = [
  {
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    title: "AI & Machine Learning",
    description:
      "Deploy production-ready models for personalization, predictions, and automated decision-making at scale.",
    bg: "bg-indigo-100",
  },
  {
    icon: <Cloud className="h-6 w-6 text-blue-600" />,
    title: "Cloud Solutions & Migration",
    description:
      "Modernize legacy systems with scalable, cloud-native architectures built for resilience and performance.",
    bg: "bg-blue-100",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-600" />,
    title: "Cybersecurity Services",
    description:
      "Protect digital assets with enterprise-grade security, real-time threat detection, and compliance frameworks.",
    bg: "bg-purple-100",
  },
  {
    icon: <Settings2 className="h-6 w-6 text-gray-600" />,
    title: "DevOps & Automation",
    description:
      "Accelerate releases with CI/CD pipelines, infrastructure-as-code, and GitOps workflows that scale.",
    bg: "bg-gray-100",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 text-yellow-600" />,
    title: "Custom ERP & CRM",
    description:
      "Design tailor-made ERP and CRM systems aligned with your business DNA—built for flexibility and growth.",
    bg: "bg-yellow-100",
  },
  {
    icon: <BarChart className="h-6 w-6 text-green-600" />,
    title: "Data Analytics & BI",
    description:
      "Turn complex data into actionable insights with predictive analytics, BI dashboards, and interactive reports.",
    bg: "bg-green-100",
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-black py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bokeh-background.jpg')",
            opacity: 0.3,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Engineered for You.
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-tr from-[#6A43E7] via-[#7F38E8] to-[#E879F9] bg-clip-text text-transparent">Scaled by Us.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 max-w-md text-sm text-gray-300 sm:text-base lg:text-lg"
            >
              Whether you&apos;re modernizing or scaling, we build the digital core that powers your next chapter.
            </motion.p>
          </div>

          <motion.div
            className="flex justify-start md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button className="rounded-full bg-gradient-to-tr from-[#6A43E7] via-[#7F38E8] to-[#E879F9] px-6 py-2 text-sm font-medium uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-10 sm:py-2.5">
              EXPLORE MORE
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-6 md:p-8"
            >
              <div className="mb-3 flex flex-col sm:mb-4 sm:flex-row sm:items-start">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${service.bg} sm:mb-0 sm:h-12 sm:w-12`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#6A43E7] group-hover:via-[#7F38E8] group-hover:to-[#E879F9] sm:ml-4 sm:text-lg">
                  {service.title}
                </h3>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-2 text-xs text-gray-300 sm:text-sm"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
