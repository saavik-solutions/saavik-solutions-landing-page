"use client"

import Link from "next/link"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JobHeader({ job }: { job: any }) {
  return (
    <div className="w-full bg-black py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/openings" className="text-sm font-medium text-gray-400 hover:text-white">
                      Careers
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm font-medium text-gray-300">Current Opening</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Job Type Badge */}
          <div className="mb-4">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium uppercase text-white">
              {job.type}
            </span>
          </div>

          {/* Job Title */}
          <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">{job.title}</h1>

          {/* Key Details */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Posted on {job.postedDate}</span>
            </div>
          </div>

          {/* Quick Apply Button - For Mobile */}
          <div className="mt-8 md:hidden">
            <Button
              className="w-full rounded-md bg-red-600 py-2 text-sm font-medium hover:bg-red-700"
              onClick={() => {
                const formElement = document.getElementById("application-form")
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

