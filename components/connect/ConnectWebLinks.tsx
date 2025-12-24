"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { VentureData } from "@/app/connect/profiles";

interface ConnectWebLinksProps {
  ventures: VentureData[];
}

export function ConnectWebLinks({ ventures }: ConnectWebLinksProps) {
  if (ventures.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="connect-card mx-auto max-w-md"
    >
      <h2 className="mb-4 text-center text-lg font-semibold text-gray-800">
        Digital Ventures
      </h2>
      
      <div className="space-y-3">
        {ventures.map((venture, index) => (
          <motion.a
            key={venture.name}
            href={venture.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="group flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100 hover:shadow-md"
          >
            <div 
              className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200"
              style={{ backgroundColor: venture.logoBg || '#ffffff' }}
            >
              <Image
                src={venture.logo}
                alt={venture.name}
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{venture.name}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
