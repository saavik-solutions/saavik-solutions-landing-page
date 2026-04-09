"use client";

import { motion } from "framer-motion";
import type { ProfileData } from "../profiles";
import {
  ConnectProfileHero,
  ConnectContactCard,
  ConnectSocialLinks,
  ConnectWebLinks,
  ConnectFloatingActions,
} from "@/components/connect";

interface ConnectPageContentProps {
  profile: ProfileData;
}

export function ConnectPageContent({ profile }: ConnectPageContentProps) {
  return (
    <div className="relative min-h-screen">
      {/* Video Background with Refined Styling */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/home-hero-bg-lg.png"
          style={{ filter: "saturate(0.7) brightness(0.8)" }}
        >
          <source
            src="https://cdn0070.qrcodechimp.com/images/digitalCard/bg_video/video_5.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay for professional look */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 py-5 md:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-md space-y-4"
        >
          {/* Profile Hero */}
          <ConnectProfileHero profile={profile} />

          {/* Contact Card */}
          <ConnectContactCard profile={profile} />

          {/* Social Links */}
          <ConnectSocialLinks socialLinks={profile.socialLinks} />

          {/* Digital Ventures */}
          <ConnectWebLinks 
            ventures={profile.ventures} 
            showTitle={profile.showVenturesTitle}
          />

          {/* Bottom Spacing for Floating Buttons */}
          <div className="h-28" />
        </motion.div>
      </div>

      {/* Floating Action Buttons */}
      <ConnectFloatingActions profile={profile} />
    </div>
  );
}
