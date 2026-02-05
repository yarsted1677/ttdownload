import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// To jest najważniejsza część dla SEO
export const metadata: Metadata = {
  title: "TikTok Downloader - No Watermark & Fast (2026)",
  description: "Download TikTok videos without watermark. Free, fast, and unlimited TikTok saver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        {/* Navbar zawsze na górze */}
        <Navbar />
        
        {/* Główna treść strony (page.tsx wchodzi tutaj) */}
        <main className="grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Stopka zawsze na dole */}
        <Footer />
      </body>
    </html>
  );
}