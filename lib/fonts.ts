import { Inter, Poppins } from "next/font/google";

// Self-hosted/subset via next/font for performance (spec §9.2/§11.2).
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
