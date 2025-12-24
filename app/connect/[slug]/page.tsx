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

  return {
    title: `${profile.name} | ${profile.company}`,
    description: `Connect with ${profile.name} - ${profile.title} at ${profile.company}`,
    openGraph: {
      title: profile.name,
      description: `${profile.title} at ${profile.company}`,
      type: "profile",
      images: [profile.profileImage],
    },
    twitter: {
      card: "summary_large_image",
      title: profile.name,
      description: `${profile.title} at ${profile.company}`,
      images: [profile.profileImage],
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
