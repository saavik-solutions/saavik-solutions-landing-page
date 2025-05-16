'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JobHeader from "@/components/openings/job-header"
import JobDetails from "@/components/openings/job-details"
import JobApplicationForm from "@/components/openings/job-application-form"

// This would typically come from a database or API
const getJobOpening = (id: string) => {
  return {
    id,
    title: "Full Stack Developer",
    type: "Remote",
    location: "Worldwide",
    department: "Engineering",
    postedDate: "April 1, 2025",
    salary: "$80,000 - $120,000",
    experience: "3-5 years",
    employmentType: "Full Time",
    description: `
      <p>Saavik Solutions is looking for a talented Full Stack Developer to join our growing team. As a Full Stack Developer, you will work on cutting-edge projects for our clients, building scalable, efficient, and user-friendly web applications.</p>
      
      <p>You will collaborate closely with our design, product, and backend teams to deliver exceptional digital experiences that meet and exceed our clients' expectations.</p>
    `,
    responsibilities: [
      "Design, develop, and maintain both frontend and backend components of our web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with emerging trends and technologies in web development",
    ],
    requirements: [
      "3-5 years of experience in full stack development",
      "Proficiency in JavaScript/TypeScript, with knowledge of at least one modern framework (React, Next.js, Angular, or Vue)",
      "Strong understanding of server-side languages (Node.js, Python, Ruby, etc.)",
      "Experience with database technologies (SQL, MongoDB, etc.)",
      "Familiarity with version control systems (Git)",
      "Excellent problem-solving and communication skills",
      "BSc/BA in Computer Science or related field (or equivalent practical experience)",
    ],
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "RESTful APIs", "Git", "AWS"],
    benefits: [
      "Competitive salary and equity options",
      "Flexible working hours and remote work options",
      "Health, dental, and vision insurance",
      "Paid time off and paid sick leave",
      "Professional development budget",
      "Regular team events and retreats",
    ],
  }
}

export default function JobOpeningPage({ params }: { params: { id: string } }) {
  const job = getJobOpening(params.id)

  return (
    <main className="min-h-screen">
      <div className="bg-black text-white">
        <Navbar />
      </div>
      <JobHeader job={job} />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-7">
            <div className="lg:col-span-4">
              <JobDetails job={job} />
            </div>
            <div className="lg:col-span-3">
              <JobApplicationForm jobTitle={job.title} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

