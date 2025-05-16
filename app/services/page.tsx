'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesHero from "@/components/services/services-hero"
import ServicesGrid from "@/components/services/services-grid"
import EnterpriseSolutionsGrid from "@/components/services/enterprise-solutions-grid"
import Testimonials from "@/components/testimonials"
import LetsDiscuss from "@/components/lets-discuss"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-black text-white">
        <Navbar />
        <ServicesHero />
      </div>
      <ServicesGrid />
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Our Unique, Trendy & <span className="text-red-600">Profitable</span> Enterprise Solutions
          </h2>
          <EnterpriseSolutionsGrid />
        </div>
      </div>
      <Testimonials />
      <LetsDiscuss />
      <Footer />
    </main>
  )
}

