"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const jobListings = [
  {
    id: 1,
    title: "Full Stack Developer",
    type: "Remote",
    tags: ["React", "Node.js", "MongoDB"],
    schedules: ["Full Time"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    type: "Remote",
    tags: ["React", "Node.js", "MongoDB"],
    schedules: ["Full Time"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    type: "Remote",
    tags: ["React", "Node.js", "MongoDB"],
    schedules: ["Full Time"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    type: "Remote",
    tags: ["React", "Node.js", "MongoDB"],
    schedules: ["Full Time"],
  },
  {
    id: 5,
    title: "Full Stack Developer",
    type: "Remote",
    tags: ["React", "Node.js", "MongoDB"],
    schedules: ["Full Time"],
  },
  {
    id: 6,
    title: "Full Stack Developer",
    type: "Remote",
    tags: ["React", "Node.js", "MongoDB"],
    schedules: ["Full Time"],
  },
]

const scheduleOptions = [
  { id: "full-time", label: "Full Time" },
  { id: "part-time", label: "Part Time" },
  { id: "contract", label: "Contract" },
  { id: "internship", label: "Internships" },
]

export default function JobListings() {
  const [selectedSchedules, setSelectedSchedules] = useState<string[]>([])

  const toggleSchedule = (schedule: string) => {
    setSelectedSchedules((prev) => (prev.includes(schedule) ? prev.filter((s) => s !== schedule) : [...prev, schedule]))
  }

  const filteredJobs = selectedSchedules.length
    ? jobListings.filter((job) => job.schedules.some((schedule) => selectedSchedules.includes(schedule)))
    : jobListings

  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Filters Sidebar */}
          <div className="mb-6 w-full lg:mb-0 lg:w-1/4 lg:pr-8">
            <div className="rounded-t-md bg-black p-3">
              <h2 className="text-sm font-bold uppercase text-white">Filter</h2>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="mb-3 text-sm font-medium text-black">Work Schedule</h3>
              <div className="space-y-2">
                {scheduleOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={selectedSchedules.includes(option.label)}
                      onCheckedChange={() => toggleSchedule(option.label)}
                    />
                    <label htmlFor={option.id} className="text-sm font-normal text-black">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  {/* Card Header */}
                  <div className="bg-red-500 p-4 pb-8">
                    <div className="mb-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-medium text-red-500">
                      {job.type}
                    </div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="-mt-4 rounded-t-2xl bg-white p-4">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Posted on 01 Apr</span>
                      <Button
                        className="rounded-md bg-white text-xs font-medium text-red-500 hover:bg-red-50"
                        variant="outline"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

