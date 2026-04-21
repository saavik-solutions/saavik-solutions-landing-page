'use client'
import { motion } from "framer-motion"
import Image from 'next/image';

const timelineEvents = [
  {
    id: 1,
    date: "Mar 2, 2025",
    title: "Our Launch",
    description: "Launched our site",
    images: {
      large: "https://placehold.co/600x400",
      medium: "https://placehold.co/400x300",
      small: "https://placehold.co/300x200"
    }
  },
  {
    id: 2,
    date: "Mar 2, 2025",
    title: "Our Launch",
    description: "Launched our site",
    images: {
      large: "https://placehold.co/600x400",
      medium: "https://placehold.co/400x300",
      small: "https://placehold.co/300x200"
    }
  },
]

export default function JourneyTimeline() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black md:text-5xl">
            Our <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-[157px] top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 to-purple-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row"
              >
                {/* Date (Left Side) */}
                <div className="z-10 mb-4 flex sm:mb-0 sm:w-[157px] sm:items-center sm:pr-4">
                  <div className="text-sm font-medium text-gray-700">{event.date}</div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-[157px] top-0 z-20 hidden h-4 w-4 -translate-x-1/2 transform items-center justify-center sm:flex">
                  <div className="h-3 w-3 rounded-full bg-purple-600 ring-2 ring-purple-100 sm:h-4 sm:w-4 sm:ring-4"></div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-0 top-0 z-20 flex h-4 w-4 items-center justify-center sm:hidden">
                  <div className="h-3 w-3 rounded-full bg-purple-600 ring-2 ring-purple-100"></div>
                </div>

                {/* Content (Right Side) */}
                <div className="z-10 pl-8 sm:flex-1 sm:pl-8">
                  <h3 className="text-lg font-bold text-gray-900 md:text-xl">{event.title}</h3>
                  <p className="mb-4 text-sm text-gray-600 md:text-base">{event.description}</p>
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl h-40 w-full md:h-48 lg:h-56">
                    <Image
                      src={event.images.large}
                      alt={event.title}
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
