import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { PostHogProvider } from "@/components/PostHogProvider";

export const metadata: Metadata = {
  title: "Where AI Actually Lifts Your Commerce · i95Dev",
  description:
    "A personalized, CFO-grade read on where AI actually pays in your commerce. Built for B2B Connect 2026.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Where AI Actually Lifts Your Commerce · i95Dev",
    description: "Strategy. AI. Commerce. Unified.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1A40",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, poppins.variable, "font-sans")}>
        <PostHogProvider>{children}</PostHogProvider>
        <Toaster />
      </body>
    </html>
  );
}
