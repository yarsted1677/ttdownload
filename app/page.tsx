"use client";

import { useState } from "react";
import URLInput from "@/components/URLInput";
import VideoResult from "@/components/VideoResult";
import { VideoData } from "@/types";
import {TEXTS} from "@/locales/en";
import { useDownload } from "@/context/DownloadContext";

export default function Home() {
  const { result, setResult, reset } = useDownload();

  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-10">
      
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

      {/* Tekst SEO (ukrywamy gdy jest wynik, żeby nie rozpraszać) */}
      {!result && (
        <div className="mt-20 max-w-3xl text-gray-500 space-y-6 text-sm">
          <h2 className="text-2xl font-bold text-gray-800">{TEXTS.seo.title}</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>{TEXTS.seo.step1}</li>
            <li>{TEXTS.seo.step2}</li>
            <li>{TEXTS.seo.step3}</li>
          </ol>
        </div>
      )}

    </div>
  );
}