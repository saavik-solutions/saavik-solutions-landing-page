"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

export default function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    socialLinks: "",
    additionalInfo: "",
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", { ...formData, resume: resumeFile })
      alert("Your application has been submitted successfully!")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        socialLinks: "",
        additionalInfo: "",
      })
      setResumeFile(null)
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div id="application-form" className="rounded-lg bg-white p-10 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">Apply for {jobTitle}</h2>
      <div className="mb-8 h-1 w-24 bg-red-600"></div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Full Name */}
        <div className="space-y-3">
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Email */}
        <div className="space-y-3">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address <span className="text-red-600">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Phone */}
        <div className="space-y-3">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-600">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            required
            className="border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <Label htmlFor="socialLinks" className="text-sm font-medium text-gray-700">
            Social Links (LinkedIn, GitHub, Portfolio)
          </Label>
          <Input
            id="socialLinks"
            name="socialLinks"
            value={formData.socialLinks}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/johndoe, https://github.com/johndoe"
            className="border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Resume Upload */}
        <div className="space-y-3">
          <Label htmlFor="resume" className="text-sm font-medium text-gray-700">
            Resume <span className="text-red-600">*</span>
          </Label>
          <div className="mt-1">
            <label
              htmlFor="resume"
              className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center space-y-2">
                <Upload className="h-10 w-10 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">
                  {resumeFile ? resumeFile.name : "Upload your resume (PDF, DOCX)"}
                </span>
                <span className="text-xs text-gray-500">Max file size: 5MB</span>
              </div>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-3">
          <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
            Additional Information
          </Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Tell us why you're interested in this position and any additional information you'd like to share..."
            className="min-h-[180px] border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-red-600 px-10 py-3 text-base font-medium hover:bg-red-700 disabled:bg-gray-400 md:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  )
}

