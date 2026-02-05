import Link from "next/link";
import { Download } from "lucide-react";
import { TEXTS } from "@/locales/en";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LEWA STRONA: Logo + Nazwa */}
        <Link href="/" className="flex items-center gap-3 group">
          
          <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors shadow-sm">
            <Download size={20} strokeWidth={3} />
          </div>

          <span className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors">
            {TEXTS.navbar.brand}
          </span>
        </Link>

        {/* PRAWA STRONA: (Miejsce na przyszłe linki: Contact, Terms, Language) */}
        <div className="flex items-center gap-4">

        </div>

      </div>
    </nav>
  );
}