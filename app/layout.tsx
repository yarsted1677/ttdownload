import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DownloadProvider } from "@/context/DownloadContext";

const inter = Inter({ subsets: ["latin"] });

// To jest najważniejsza część dla SEO
export const metadata: Metadata = {
  // 1. Tytuł: To widzi użytkownik w Google (Niebieski link)
  // Wzór: Główna Fraza + Cecha + Call to Action
  title: {
    default: "TikTok Downloader - Download Video Without Watermark (Fast & HD)",
    template: "%s | TTDownloader", // Szablon dla podstron (np. Contact | TTDownloader)
  },

  // 2. Opis: To szary tekst pod linkiem. Musi zawierać słowa z Tier 2.
  description: "The best TikTok Downloader to save videos without watermark. Fast, free, and unlimited. Download TT videos in HD MP4 format. Works on mobile & PC.",

  // 3. Słowa kluczowe (Dla Bing, Yahoo i kontekstu AI)
  keywords: [
    "tiktok downloader", 
    "tiktok no watermark", 
    "tt downloader", 
    "save tiktok video", 
    "tiktok to mp4", 
    "tiktok saver", 
    "download tiktok mp3", 
    "snaptik alternative", 
    "ssstik alternative"
  ],
  // 4. Autorzy i Twórca
  authors: [{ name: "TTDownloader Team" }],
  creator: "TTDownloader Team",

  // 5. Instrukcje dla robotów (Indeksuj wszystko)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // 7. Ikony (Jeśli dodałeś pliki icon.png do folderu app, to jest opcjonalne, ale warto mieć)
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <DownloadProvider>
          {/* Navbar zawsze na górze */}
          <Navbar />
          
          {/* Główna treść strony (page.tsx wchodzi tutaj) */}
          <main className="grow w-full">
          {children}
        </main>

        {/* Stopka zawsze na dole */}
        <Footer />
        </DownloadProvider>
      </body>
    </html>
  );
}