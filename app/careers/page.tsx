'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CareersHero from "@/components/careers/careers-hero"
import WhyWorkWithUs from "@/components/careers/why-work-with-us"
import LetsDiscuss from "@/components/lets-discuss"

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-black text-white">
        <Navbar />
      </div>
      <CareersHero />
      <WhyWorkWithUs />
      <LetsDiscuss />
      <Footer />
    </main>
  )
}

