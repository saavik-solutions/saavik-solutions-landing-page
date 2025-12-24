"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, QrCode, Share2, X } from "lucide-react";
import { downloadVCard } from "@/lib/generateVCard";
import type { ProfileData } from "@/app/connect/profiles";
import { QRCodeModal } from "./QRCodeModal";

interface ConnectFloatingActionsProps {
  profile: ProfileData;
}

export function ConnectFloatingActions({ profile }: ConnectFloatingActionsProps) {
  const [showQR, setShowQR] = useState(false);

  const handleAddToContact = () => {
    downloadVCard({
      name: profile.name,
      title: profile.title,
      company: profile.company,
      phone: profile.phone,
      email: profile.email,
      website: profile.website,
      linkedin: profile.socialLinks.find((l) => l.type === "linkedin")?.url,
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: profile.name,
      text: `Connect with ${profile.name} - ${profile.title} at ${profile.company}`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      {/* Left side floating buttons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="fixed bottom-6 left-4 z-50 flex gap-2"
      >
        {/* QR Code Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowQR(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-colors hover:bg-gray-800"
          aria-label="Show QR Code"
        >
          <QrCode className="h-5 w-5" />
        </motion.button>

        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-colors hover:bg-gray-800"
          aria-label="Share"
        >
          <Share2 className="h-5 w-5" />
        </motion.button>
      </motion.div>

      {/* Right side floating button - Add to Contact */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="fixed bottom-6 right-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToContact}
          className="flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white shadow-lg transition-colors hover:bg-gray-800"
        >
          <Plus className="h-5 w-5" />
          <span className="font-medium">Add to Contact</span>
        </motion.button>
      </motion.div>

      {/* QR Code Modal */}
      <QRCodeModal 
        isOpen={showQR} 
        onClose={() => setShowQR(false)} 
        profile={profile}
      />
    </>
  );
}
