'use client'
import Navbar from "@/components/navbar"
import JobListings from "@/components/openings/job-listings"
import InternshipSection from "@/components/openings/internship-section"
import SocialFooter from "@/components/openings/social-footer"

export default function OpeningsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-black text-white">
        <Navbar />
      </div>
      <JobListings />
      <InternshipSection />
      <SocialFooter />
    </main>
  )
}

