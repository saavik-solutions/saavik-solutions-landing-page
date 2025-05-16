"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="rounded-lg bg-white p-10 shadow-lg">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-black md:text-3xl">Get a Free Quote</h2>
        <div className="mt-3 h-1 w-24 bg-red-600"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Your Name <span className="text-red-600">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address <span className="text-red-600">*</span>
            </label>
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
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject <span className="text-red-600">*</span>
            </label>
            <Select value={formData.subject} onValueChange={handleSubjectChange} required>
              <SelectTrigger className="border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="quote">Request a Quote</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Your Message <span className="text-red-600">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or inquiry..."
            required
            className="min-h-[180px] border-gray-300 bg-gray-50 px-4 py-3 focus:border-red-500 focus:ring-red-500"
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="rounded-md bg-red-600 px-10 py-3 text-base font-medium transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
          >
            SEND MESSAGE
          </Button>
        </div>
      </form>
    </div>
  )
}

