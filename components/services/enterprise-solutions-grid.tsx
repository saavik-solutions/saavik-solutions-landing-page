
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
          whileHover={{ scale: 1.02 }}
          className="group overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={solution.image || "/placeholder.svg"}
              alt={solution.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
          </div>
          <div className="relative -mt-20 bg-gradient-to-t from-black/80 to-transparent p-6 pt-10 text-white">
            <h3 className="mb-2 text-xl font-bold">{solution.title}</h3>
            <p className="text-sm text-gray-200">{solution.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

