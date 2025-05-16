'use client'
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter, Instagram } from "lucide-react"
import dynamic from "next/dynamic"

// Import the map component with no SSR
const GoogleMapWithNoSSR = dynamic(() => import("@/components/google-map"), {
  ssr: false,
})

export default function ContactInfo() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black md:text-3xl">Contact Information</h2>
        <div className="mt-2 h-1 w-20 bg-red-600"></div>
      </div>

      <div className="mb-8 space-y-6">
        <div className="flex items-start">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Our Location</h3>
            <p className="text-sm text-gray-600">123 Business Avenue, Tech Park, Hyderabad, India</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Phone Number</h3>
            <p className="text-sm text-gray-600">+91 (123) 456-7890</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email Address</h3>
            <p className="text-sm text-gray-600">info@saaviksolutions.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Working Hours</h3>
            <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 font-medium text-gray-900">Connect With Us</h3>
        <div className="flex space-x-4">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="h-[300px] overflow-hidden rounded-lg shadow-md">
        <GoogleMapWithNoSSR />
      </div>
    </div>
  )
}

