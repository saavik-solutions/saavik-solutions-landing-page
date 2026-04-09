"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import type { ProfileData } from "@/app/connect/profiles";

interface ConnectContactCardProps {
  profile: ProfileData;
}

export function ConnectContactCard({ profile }: ConnectContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="connect-card mx-auto max-w-md"
    >
      <h2 className="mb-4 text-center text-lg font-semibold text-gray-800">
        Contact Me
      </h2>
      
      <div className="space-y-3">
        {/* Phone */}
        {profile.phone && (
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Call Us</p>
              <p className="font-medium text-gray-800">{profile.phone}</p>
            </div>
          </a>
        )}

        {/* Email */}
        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="font-medium text-gray-800">{profile.email}</p>
            </div>
          </a>
        )}
      </div>
    </motion.div>
  );
}
