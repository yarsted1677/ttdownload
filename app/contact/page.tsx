import Link from "next/link";
import { Mail, ArrowLeft, ExternalLink } from "lucide-react";
import { TEXTS } from "@/locales/en";

export const metadata = {
    title: "Contact Support - TTDownloader",
    description: "Get in touch with TTDownloader support team.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">


            <div className="w-full max-w-lg bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 text-center space-y-8 animate-in fade-in zoom-in duration-500">


                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={40} />
                </div>


                <div className="space-y-3">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                        {TEXTS.contactPage.title}
                    </h1>
                    <p className="text-gray-500 leading-relaxed">
                        {TEXTS.contactPage.desc}
                    </p>
                </div>

                {/* Sekcja z Mailem (Klikalna) */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                        {TEXTS.contactPage.emailLabel}
                    </p>
                    <a
                        href={`mailto:${TEXTS.contactPage.email}`}
                        className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold text-blue-600 group-hover:text-blue-700 break-all"
                    >
                        {TEXTS.contactPage.email}
                        <ExternalLink size={18} className="opacity-50 group-hover:opacity-100" />
                    </a>
                </div>

                {/* Przycisk Powrotu */}
                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                        <ArrowLeft size={18} /> {TEXTS.contactPage.backBtn}
                    </Link>
                </div>

            </div>

        </div>
    );
}