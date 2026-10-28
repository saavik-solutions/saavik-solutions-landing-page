
'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const enterpriseSolutions = [
  {
    id: 1,
    title: "Custom Web Applications",
    description: "Tailored web solutions to meet your specific business needs",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Enterprise Software",
    description: "Robust software solutions for large-scale business operations",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Digital Transformation",
    description: "Comprehensive strategies to evolve your business in the digital age",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export default function EnterpriseSolutionsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {enterpriseSolutions.map((solution, index) => (
        <motion.div
          key={solution.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="group flex flex-col h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-900/20"
        >
          <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-black/40">
            <Image
              src={solution.image || "/placeholder.svg"}
              alt={solution.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-gray-900/90 to-black">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {solution.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

