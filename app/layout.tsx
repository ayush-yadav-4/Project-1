import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/ui/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Reduce initial font load
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"], // Bold and Black
  display: "swap",
  preload: false, // Load on demand
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Load on demand
});

export const metadata: Metadata = {
  title: "Agent Marketplace",
  description: "Agent Marketplace - Discover, connect, and deploy AI agents and tools.",
  icons: {
    icon: "/Marketplace logo.svg",
  },
  verification: {
    google: 'kSMER6ZfHGOd4U7P1Z-0eeRcUboAdrUSlXBcF5wIQDA', // Replace with your actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
