
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import { TEXTS } from "@/locales/en";
import FAQ from "@/components/FAQ";

export default function Home() {

  return (
    <main className="flex flex-col w-full">
      
      {/* SECTION 1: HERO & INPUT */}
      <section id="hero" className="w-full bg-white py-12 md:py-20" aria-label="Hero section with URL input">
        <article className="container mx-auto px-4 flex flex-col items-center space-y-8">
          <HeroSection />
        </article>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
        <>
          <section id="how-it-works" className="w-full bg-gray-50 py-12 md:py-20" aria-label="How to use the downloader">
            <article className="container mx-auto px-4 flex justify-center">
              <div className="max-w-3xl text-gray-500 space-y-6 text-sm">
                <h2 className="text-2xl font-bold text-gray-800">{TEXTS.seo.title}</h2>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>{TEXTS.seo.step1}</li>
                  <li>{TEXTS.seo.step2}</li>
                  <li>{TEXTS.seo.step3}</li>
                </ol>
              </div>
            </article>
          </section>

          {/* SECTION 2.5: WHY USE */}
          <section id="why-use" className="w-full bg-white py-12 md:py-20" aria-label="Why use TTDownloader">
            <article className="container mx-auto px-4 flex justify-center">
              <div className="max-w-3xl space-y-6 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900">
                  Why use a TikTok downloader?
                </h2>

                <p>
                  TTDownloader is built for creators who want to save their own TikTok videos for editing,
                  archiving, or offline viewing — without installing apps or dealing with popups.
                </p>

                <p>
                  Many “downloaders” are slow, overloaded with ads, or break on mobile. Here the flow is simple:
                  paste a link, generate the file, and save it. If you’re working on short-form content,
                  this saves time when you need a clean file for your next edit.
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Quick exports for editing workflows (CapCut, Premiere, mobile editors).</li>
                  <li>Archiving your own posts in case you lose access to the original upload.</li>
                  <li>Offline viewing when you’re traveling or have limited connectivity.</li>
                </ul>

                <p className="text-sm text-gray-500">
                  Please use this tool responsibly and respect creators’ rights — only download content you own
                  or have permission to use.
                </p>
              </div>
            </article>
          </section>

          {/* SECTION 3: FEATURES */}
          <section id="features" className="w-full bg-white py-12 md:py-20" aria-label="Key features">
            <article className="container mx-auto px-4">
              <FeatureCards />
            </article>
          </section>

          {/* SECTION 4: FAQ */}
          <section id="faq" className="w-full bg-gray-50 py-12 md:py-20" aria-label="Frequently asked questions">
            <article className="container mx-auto px-4">
              <FAQ />
            </article>
          </section>
        </>

    </main>
  );
}