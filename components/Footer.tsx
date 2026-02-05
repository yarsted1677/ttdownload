import Link from "next/link";
import { TEXTS } from "@/locales/en";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">{TEXTS.navbar.brand}</h3>
            <p className="text-sm text-gray-500">
              {TEXTS.footer.copyright}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700">{TEXTS.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  {TEXTS.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  {TEXTS.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  {TEXTS.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-700">{TEXTS.footer.disclaimerTitle}</h4>
            <p className="text-xs text-gray-400 leading-relaxed text-justify">
              {TEXTS.footer.disclaimerText}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}