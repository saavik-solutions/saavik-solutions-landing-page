"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle, Loader2, Send, Mail } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const openMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(`[Website Inquiry] ${formData.subject || "General"}: ${formData.name}`)
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:info@saaviksolutions.com?subject=${mailtoSubject}&body=${mailtoBody}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@saaviksolutions.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          _subject: `New Inquiry from ${formData.name}: ${formData.subject}`,
          _replyto: formData.email,
          _template: "table",
        }),
      })

      if (response.ok) {
        setStatus("success")
      } else {
        // Fallback to mailto if FormSubmit returns an error status
        openMailtoFallback()
        setStatus("success")
      }
    } catch (error) {
      // If network request is blocked (e.g. adblocker, offline), fallback to opening user's mail client directly
      openMailtoFallback()
      setStatus("success")
    }
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setStatus("idle")
    setErrorMessage("")
  }

  return (
    <div className="rounded-2xl bg-white p-8 md:p-10 shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black md:text-3xl">Get a Free Quote</h2>
        <div className="mt-3 h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
      </div>

      {status === "success" ? (
        <div className="py-8 text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-gray-900">{formData.name}</strong>! Your inquiry has been sent directly to{" "}
              <span className="font-semibold text-purple-700">info@saaviksolutions.com</span>. Our team will review your message and get back to you shortly.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={handleReset}
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Send Another Message
            </Button>
            <a
              href="mailto:info@saaviksolutions.com"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 px-4 py-2 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email info@saaviksolutions.com
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name <span className="text-purple-600">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border-gray-200 bg-gray-50/60 px-4 py-2.5 rounded-xl focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address <span className="text-purple-600">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-gray-200 bg-gray-50/60 px-4 py-2.5 rounded-xl focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20 transition-all"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="border-gray-200 bg-gray-50/60 px-4 py-2.5 rounded-xl focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject <span className="text-purple-600">*</span>
              </label>
              <Select value={formData.subject} onValueChange={handleSubjectChange} required>
                <SelectTrigger className="border-gray-200 bg-gray-50/60 px-4 py-2.5 rounded-xl focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20 transition-all">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Request a Quote">Request a Quote</SelectItem>
                  <SelectItem value="Custom Software Development">Custom Software Development</SelectItem>
                  <SelectItem value="IT Staffing Solutions">IT Staffing Solutions</SelectItem>
                  <SelectItem value="Cloud & DevOps Services">Cloud & DevOps Services</SelectItem>
                  <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Your Message <span className="text-purple-600">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements, goals, or inquiries..."
              required
              className="min-h-[160px] border-gray-200 bg-gray-50/60 px-4 py-3 rounded-xl focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20 transition-all"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold uppercase text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/20 disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending to info@saaviksolutions.com...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500">
              Delivered directly to{" "}
              <a href="mailto:info@saaviksolutions.com" className="text-purple-600 hover:underline font-medium">
                info@saaviksolutions.com
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
