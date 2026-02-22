"use client";

import URLInput from "@/components/URLInput";
import VideoResult from "@/components/VideoResult";
import { TEXTS } from "@/locales/en";
import { useDownload } from "@/context/DownloadContext";

export default function HeroSection() {
  const { result, setResult, reset } = useDownload();

  return (
    <>
      {!result && (
        <div className="text-center space-y-4 max-w-2xl animate-in fade-in zoom-in duration-500">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-600">
            {TEXTS.hero.title}
          </h1>
          <p className="text-lg text-gray-600">{TEXTS.hero.subtitle}</p>
          <p className="text-sm text-gray-500">
            Built for creators: save your own TikTok videos for editing, archiving, and offline use.
          </p>
        </div>
      )}

      <div className="w-full flex justify-center min-h-[300px]">
        {result ? (
          <VideoResult data={result} onReset={reset} />
        ) : (
          <URLInput onSuccess={(data) => setResult(data)} />
        )}
      </div>
    </>
  );
}