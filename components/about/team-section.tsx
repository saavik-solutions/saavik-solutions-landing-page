'use client'
import Image from "next/image"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Bhargava Raj",
    position: "CEO & Founder",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 2,
    name: "Laya Sri",
    position: "Co-Founder",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 3,
    name: "Ravi",
    position: "CTO",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 4,
    name: "Mohan Nellapalle",
    position: "Lead Developer",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 5,
    name: "Srikar",
    position: "Software Engineer",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 6,
    name: "Sampad",
    position: "Cheif Design",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 7,
    name: "Soumyadeep",
    position: "Marketing Head",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 8,
    name: "Lohita",
    position: "Full-Stack Developer",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 9,
    name: "Sushmitha",
    position: "Front-End Developer",
    image: "https://placehold.co/300x400",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
]

export default function TeamSection() {
  return (
    <section className="relative w-full bg-black py-16">
      {/* Crown with semi-circle cutout */}
      <div className="absolute left-0 right-0 top-0 h-16 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Black background with semi-circle cutout */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute left-1/2 top-0 h-16 w-32 -translate-x-1/2 rounded-b-full bg-white"></div>
          </div>

          {/* Crown emblem */}
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
            <Image src="https://placehold.co/60" alt="Crown Emblem" width={60} height={60} className="h-auto w-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mb-10 mt-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Our <span className="text-yellow-500">Mastermind</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="overflow-hidden group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                  <Image 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-black/80 p-3 text-center">
                    <h3 className="text-sm font-bold text-white sm:text-base">{member.name}</h3>
                    <p className="text-xs text-gray-300 mb-1">{member.position}</p>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block p-1 text-white hover:text-yellow-500 transition-colors duration-200"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

