"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Download, Share2 } from "lucide-react";
import type { ProfileData } from "@/app/connect/profiles";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export function QRCodeModal({ isOpen, onClose, profile }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      generateQRCode();
    }
  }, [isOpen]);

  const generateQRCode = async () => {
    if (!canvasRef.current) return;

    const targetUrl = profile.cardUrl || window.location.href;
    const url = encodeURIComponent(targetUrl);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}&bgcolor=ffffff&color=000000`;
    
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && canvasRef.current) {
        canvasRef.current.width = 200;
        canvasRef.current.height = 200;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 200, 200);
        ctx.drawImage(img, 0, 0, 200, 200);
      }
    };
    img.src = qrUrl;
  };

  const handleDownloadQR = () => {
    if (!canvasRef.current) return;
    
    const link = document.createElement("a");
    link.download = `${profile.name.replace(/\s+/g, "_")}_QR.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  const handleShare = async () => {
    const targetUrl = profile.cardUrl || window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.name} - ${profile.company}`,
          text: `Connect with ${profile.name}`,
          url: targetUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header with Profile */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 pb-8 pt-6 text-center">
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-white/30 shadow-lg">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-300">{profile.title}</p>
              <p className="text-sm text-gray-400">{profile.company}</p>
            </div>

            {/* QR Code Section */}
            <div className="bg-white px-6 py-6 text-center">
              <p className="mb-4 text-sm text-gray-500">
                Scan to save this digital business card
              </p>

              {/* QR Code */}
              <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2 shadow-inner">
                <canvas ref={canvasRef} className="rounded-lg" />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Primary: Download QR */}
                <button
                  onClick={handleDownloadQR}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
                >
                  <Download className="h-4 w-4" />
                  Download QR Code
                </button>

                {/* Secondary: Share Link */}
                <button
                  onClick={handleShare}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <Share2 className="h-4 w-4" />
                  {copied ? "Link Copied!" : "Share Link"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
