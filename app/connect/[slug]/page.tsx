import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProfile, profiles } from "../profiles";
import { ConnectPageContent } from "./ConnectPageContent";

interface ConnectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all known profiles
export async function generateStaticParams() {
  return Object.keys(profiles).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata based on the profile
export async function generateMetadata({ params }: ConnectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfile(slug);

  if (!profile) {
    return {
      title: "Profile Not Found | SaaVik Solutions",
      description: "The requested profile could not be found.",
    };
  }

  const description = `Connect with ${profile.name} - ${profile.title} at ${profile.company}`;
  const pageUrl = profile.cardUrl || `https://www.saaviksolutions.com/connect/${slug}`;
  
  // Use ogImage if available (can be absolute URL like S3 or relative path)
  // Falls back to profileImage if not set
  const ogImageUrl = profile.ogImage 
    ? (profile.ogImage.startsWith('http') 
        ? profile.ogImage 
        : `https://www.saaviksolutions.com${profile.ogImage}`)
    : profile.profileImage;

  return {
    title: `${profile.name} | ${profile.company}`,
    description,
    openGraph: {
      title: `${profile.name} - ${profile.title}`,
      description: `${profile.title} at ${profile.company}. Digital Business Card.`,
      type: "profile",
      url: pageUrl,
      siteName: "SaaVik Solutions",
      images: [
        {
          url: ogImageUrl,
          width: 400,
          height: 400,
          alt: `${profile.name} - ${profile.title} at ${profile.company}`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${profile.name} - ${profile.title}`,
      description: `${profile.title} at ${profile.company}`,
      images: [ogImageUrl],
      creator: "@saaviksolutions",
    },
  };
}

export default async function ConnectPage({ params }: ConnectPageProps) {
  const { slug } = await params;
  const profile = getProfile(slug);

  if (!profile) {
    notFound();
  }

  return <ConnectPageContent profile={profile} />;
}
