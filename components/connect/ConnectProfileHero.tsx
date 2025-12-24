"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import type { ProfileData } from "@/app/connect/profiles";

interface ConnectProfileHeroProps {
  profile: ProfileData;
}

export function ConnectProfileHero({ profile }: ConnectProfileHeroProps) {
  const handleCall = () => {
    window.location.href = `tel:${profile.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  const handleWhatsApp = () => {
    if (profile.whatsapp) {
      window.open(profile.whatsapp, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-md overflow-hidden rounded-[18px] bg-[#1a1a1a]"
      style={{
        boxShadow: "0 0 3px 0 rgba(255,255,255,0.15), 0 8px 16px -8px rgba(255,255,255,0.15)",
      }}
    >
      {/* Profile Image Container - Full Width like reference */}
      <div className="relative h-[400px] w-full sm:h-[464px]">
        <Image
          src={profile.profileImage}
          alt={profile.name}
          fill
          className="object-cover object-top"
          priority
        />
        
        {/* Curved Bottom Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #1a1a1a 0%, #1a1a1a 15%, rgba(26,26,26,0.8) 30%, rgba(26,26,26,0.4) 50%, transparent 70%)"
          }}
        />
        
        {/* SVG Wave at bottom for seamless transition */}
        <svg 
          className="absolute -bottom-1 left-0 w-full"
          viewBox="0 0 400 40"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 L0,20 Q200,0 400,20 L400,40 Z" 
            fill="#1a1a1a"
          />
        </svg>
      </div>

      {/* Profile Info Section */}
      <div className="relative -mt-32 px-6 pb-8">
        {/* Company Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mb-4 flex justify-center"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/30 bg-white p-1 shadow-lg">
            <Image
              src={profile.companyLogo}
              alt={profile.company}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center"
        >
          <h1 
            className="text-[40px] font-bold leading-tight text-white sm:text-[44px]"
            style={{ 
              textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
              wordBreak: "break-word"
            }}
          >
            {profile.name}
          </h1>
          <p className="mt-2 text-base text-gray-300">{profile.company}</p>
          <p className="text-sm text-gray-400">{profile.title}</p>
        </motion.div>

        {/* Quick Action Buttons - Below Text like reference */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6 flex justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all"
            aria-label="Call"
          >
            <Phone className="h-6 w-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmail}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </motion.button>
          
          {profile.whatsapp && (
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
