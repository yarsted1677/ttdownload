"use client";

import { useState } from "react";
import URLInput from "@/components/URLInput";
import VideoResult from "@/components/VideoResult";
import FeatureCards from "@/components/FeatureCards";
import { VideoData } from "@/types";
import {TEXTS} from "@/locales/en";
import { useDownload } from "@/context/DownloadContext";
import FAQ from "@/components/FAQ";

export default function Home() {
  const { result, setResult, reset } = useDownload();

  return (
    <main className="flex flex-col w-full">
      
      {/* SECTION 1: HERO & INPUT */}
      <section id="hero" className="w-full bg-white py-12 md:py-20" aria-label="Hero section with URL input">
        <article className="container mx-auto px-4 flex flex-col items-center space-y-8">
          {!result && (
            <div className="text-center space-y-4 max-w-2xl animate-in fade-in zoom-in duration-500">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-600">
                {TEXTS.hero.title}
              </h1>
              <p className="text-lg text-gray-600">
                {TEXTS.hero.subtitle}
              </p>
            </div>
          )}

          <div className="w-full flex justify-center min-h-[300px]">
            {result ? (
              <VideoResult 
                data={result} 
                onReset={reset}
              />
            ) : (
              <URLInput onSuccess={(data) => setResult(data)} />
            )}
          </div>
        </article>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      {!result && (
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
      )}

    </main>
  );
}