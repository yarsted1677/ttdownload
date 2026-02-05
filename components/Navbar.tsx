"use client";
import Link from "next/link";
import { Download } from "lucide-react";
import { TEXTS } from "@/locales/en";
import { useDownload } from "@/context/DownloadContext";

export default function Navbar() {
    const {reset} = useDownload();
    
    return (
        <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                <Link 
                    href="/"
                    onClick={reset} 
                    className="flex items-center gap-3 group"
                >

                    <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors shadow-sm">
                        <Download size={20} strokeWidth={3} />
                    </div>

                    <span className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors">
                        {TEXTS.navbar.brand}
                    </span>
                </Link>

                <div className="flex items-center gap-4">

                </div>

            </div>
        </nav>
    );
}