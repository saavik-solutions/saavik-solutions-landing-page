// Profile data configuration for digital business cards

export interface VentureData {
  name: string;
  url: string;
  logo: string;
  logoBg?: string; // Optional background color for logo
}

export interface SocialLink {
  type: "linkedin" | "twitter" | "instagram" | "facebook" | "github";
  url: string;
  title: string;
  subtitle?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  company: string;
  profileImage: string;
  companyLogo: string;
  phone: string;
  email: string;
  whatsapp?: string;
  website?: string;
  cardUrl?: string; // Production URL for QR code
  ogImage?: string; // Local image path for Open Graph (social sharing)
  socialLinks: SocialLink[];
  ventures: VentureData[];
}

export const profiles: Record<string, ProfileData> = {
  "bhargava-raj": {
    name: "Bhargava Raj Valaboju",
    title: "Founder & MD",
    company: "SaaVik Solutions Inc",
    profileImage:
      "https://cdn0030.qrcodechimp.com/qr/PROD/6828db8fd44a5352325c9c9d/fm/a_change_the_backgroun.png?v=1766393260444",
    companyLogo:
      "https://cdn0030.qrcodechimp.com/qr/PROD/6828db8fd44a5352325c9c9d/fm/frame_1116607108.png?v=1766380554188",
    phone: "+91 9701563362",
    email: "bhargava@saaviksolutions.com",
    whatsapp: "https://wa.me/message/LED3GVDLE7UAI1",
    website: "https://www.saaviksolutions.com",
    cardUrl: "https://www.saaviksolutions.com/connect/bhargava-raj",
    // Public S3 URL for OG image (faster CDN, works globally)
    // Fallback: local image at /og-bhargava-raj.png
    ogImage: "https://general-bucked.s3.eu-north-1.amazonaws.com/og-bhargava-raj.png",
    socialLinks: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/bhargava-raj-valaboju-a17086192/",
        title: "LinkedIn",
        subtitle: "Connect on LinkedIn",
      },
    ],
    ventures: [
      {
        name: "SaaVik Solutions",
        url: "https://www.saaviksolutions.com/",

         logo: "https://cdn0030.qrcodechimp.com/qr/PROD/6828db8fd44a5352325c9c9d/fm/logo_1.jpg?v=1766380728389",
      },
      {
        name: "Digizinc",
        url: "https://www.digizinc.com/",
        logo: "https://cdn0030.qrcodechimp.com/qr/PROD/6828db8fd44a5352325c9c9d/fm/gemini_generated_image_lnzb47lnzb47lnzb.png?v=1766380689181",
        logoBg: "#1a1a1a",
      },
    ],
  },
};

export function getProfile(slug: string): ProfileData | undefined {
  return profiles[slug];
}
