"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import type { SocialLink } from "@/app/connect/profiles";

interface ConnectSocialLinksProps {
  socialLinks: SocialLink[];
}

const socialColors: Record<SocialLink["type"], string> = {
  linkedin: "bg-[#0A66C2]",
  twitter: "bg-[#1DA1F2]",
  instagram: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
  facebook: "bg-[#1877F2]",
  github: "bg-gray-800",
};

const SocialIcon = ({ type }: { type: SocialLink["type"] }) => {
  const iconProps = { className: "h-6 w-6 text-white" };
  
  switch (type) {
    case "linkedin":
      return <FaLinkedinIn {...iconProps} />;
    case "twitter":
      return <FaTwitter {...iconProps} />;
    case "instagram":
      return <FaInstagram {...iconProps} />;
    case "facebook":
      return <FaFacebookF {...iconProps} />;
    case "github":
      return <FaGithub {...iconProps} />;
    default:
      return null;
  }
};

export function ConnectSocialLinks({ socialLinks }: ConnectSocialLinksProps) {
  if (socialLinks.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="connect-card mx-auto max-w-md"
    >
      <div className="space-y-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.type}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="group flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100 hover:shadow-md"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${socialColors[link.type]}`}>
              <SocialIcon type={link.type} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{link.title}</p>
              {link.subtitle && (
                <p className="text-sm text-gray-500">{link.subtitle}</p>
              )}
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
