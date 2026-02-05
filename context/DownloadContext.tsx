"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { VideoData } from "@/types";

interface DownloadContextType {
  result: VideoData | null;
  setResult: (data: VideoData | null) => void;
  reset: () => void;
}

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [result, setResult] = useState<VideoData | null>(null);

  const reset = () => setResult(null);

  return (
    <DownloadContext.Provider value={{ result, setResult, reset }}>
      {children}
    </DownloadContext.Provider>
  );
}

export function useDownload() {
  const context = useContext(DownloadContext);
  if (context === undefined) {
    throw new Error("useDownload must be used within a DownloadProvider");
  }
  return context;
}