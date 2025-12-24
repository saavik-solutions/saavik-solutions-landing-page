import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect | SaaVik Solutions",
  description: "Connect with SaaVik Solutions team members",
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
}
