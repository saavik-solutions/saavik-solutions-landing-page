import Hero from "@/components/hero"

import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import EnterpriseSolutions from "@/components/enterprise-solutions"

import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
import LetsDiscuss from "@/components/lets-discuss"
import Footer from "@/components/footer"
import Products from "@/components/products"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" text-white">
        <Hero />

      </div>
      <AboutUs />
      <Services />
      <EnterpriseSolutions />
  <Products />
      <Testimonials />
      <BlogSection />
      <LetsDiscuss />
      <Footer />
    </main>
  )
}

