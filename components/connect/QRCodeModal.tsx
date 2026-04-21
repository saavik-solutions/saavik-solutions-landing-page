"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Download, Share2, UserPlus, Smartphone } from "lucide-react";
import type { ProfileData } from "@/app/connect/profiles";
import { downloadVCard } from "@/lib/generateVCard";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export function QRCodeModal({ isOpen, onClose, profile }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  const [showInstallHelp, setShowInstallHelp] = useState(false);

  const generateQRCode = useCallback(async () => {
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
  }, [profile.cardUrl]);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      generateQRCode();
    }
  }, [isOpen, generateQRCode]);

  const handleDownloadQR = () => {
    if (!canvasRef.current) return;
    
    const link = document.createElement("a");
    link.download = `${profile.name.replace(/\s+/g, "_")}_QR.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  const handleSaveContact = () => {
    const linkedinLink = profile.socialLinks.find(l => l.type === 'linkedin')?.url;
    
    downloadVCard({
      name: profile.name,
      title: profile.title,
      company: profile.company,
      phone: profile.phone,
      email: profile.email,
      website: profile.website,
      linkedin: linkedinLink
    });
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
            className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
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
              {!showInstallHelp ? (
                <>
                  <p className="mb-4 text-sm text-gray-500">
                    Scan to get this digital business card
                  </p>

                  {/* QR Code */}
                  <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2 shadow-inner">
                    <canvas ref={canvasRef} className="rounded-lg" />
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Save Contact */}
                    <button
                      onClick={handleSaveContact}
                      className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 font-medium text-white transition-colors hover:bg-gray-800"
                    >
                      <UserPlus className="h-4 w-4" />
                      Save Contact
                    </button>

                     {/* Download QR */}
                     <button
                      onClick={handleDownloadQR}
                      className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                    >
                      <Download className="h-4 w-4" />
                      Save QR
                    </button>

                    {/* Share Link */}
                    <button
                      onClick={handleShare}
                      className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                    >
                      <Share2 className="h-4 w-4" />
                      {copied ? "Copied!" : "Share"}
                    </button>

                    {/* Add to Home Screen */}
                    <button
                      onClick={() => setShowInstallHelp(true)}
                      className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <Smartphone className="h-4 w-4" />
                      Add to Home Screen
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-left animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Add to Home Screen</h4>
                    <button 
                      onClick={() => setShowInstallHelp(false)}
                      className="text-sm text-gray-500 hover:text-gray-900"
                    >
                      Back
                    </button>
                  </div>
                  
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="mb-2 font-medium text-gray-900">For iPhone (Safari)</p>
                      <ol className="list-decimal space-y-1 pl-4">
                        <li>Tap the <span className="font-semibold">Share</span> button at the bottom</li>
                        <li>Scroll down and tap <span className="font-semibold">Add to Home Screen</span></li>
                        <li>Tap <span className="font-semibold">Add</span> to confirm</li>
                      </ol>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="mb-2 font-medium text-gray-900">For Android (Chrome)</p>
                      <ol className="list-decimal space-y-1 pl-4">
                        <li>Tap the <span className="font-semibold">Menu</span> (3 dots) icon</li>
                        <li>Tap <span className="font-semibold">Add to Home Screen</span></li>
                        <li>Tap <span className="font-semibold">Add</span> to confirm</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
