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
    <div className="flex flex-col w-full">
      
      {/* SECTION 1: HERO & INPUT (White) */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
          {/* Nagłówek (zawsze widoczny, chyba że chcesz go ukryć po wyniku) */}
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

          {/* Logika przełączania widoków */}
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
        </div>
      </section>

      {/* SECTION 2: SEO/STEPS (Gray) */}
      {!result && (
        <>
          <section className="w-full bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4 flex justify-center">
              <div className="max-w-3xl text-gray-500 space-y-6 text-sm">
                <h2 className="text-2xl font-bold text-gray-800">{TEXTS.seo.title}</h2>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>{TEXTS.seo.step1}</li>
                  <li>{TEXTS.seo.step2}</li>
                  <li>{TEXTS.seo.step3}</li>
                </ol>
              </div>
            </div>
          </section>

          {/* SECTION 3: FEATURES (White) */}
          <section className="w-full bg-white py-12 md:py-20">
            <FeatureCards />
          </section>

          {/* SECTION 4: FAQ (Gray) */}
          <section className="w-full bg-gray-50 py-12 md:py-20">
            <FAQ />
          </section>
        </>
      )}

    </div>
  );
}
