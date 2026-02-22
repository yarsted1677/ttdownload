"use client";

import URLInput from "@/components/URLInput";
import VideoResult from "@/components/VideoResult";
import { TEXTS } from "@/locales/en";
import { useDownload } from "@/context/DownloadContext";

export default function HeroSection() {
    const { result, setResult, reset } = useDownload();

    return (
        <div className="w-full flex justify-center min-h-[300px]">
            {result ? (
                <VideoResult data={result} onReset={reset} />
            ) : (
                <URLInput onSuccess={(data) => setResult(data)} />
            )}
        </div>
    );
}