import { VideoData } from "@/types";
import { Download, CheckCircle, ArrowLeft } from "lucide-react";

interface Props {
  data: VideoData;
  onReset: () => void;
}

export default function VideoResult({ data, onReset }: Props) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header z przyciskiem powrotu */}
      <div className="bg-gray-50 p-4 flex justify-between items-center border-b border-gray-100">
        <button 
          onClick={onReset}
          className="text-gray-500 hover:text-blue-600 flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} /> Pobierz inny plik
        </button>
        <span className="text-green-600 flex items-center gap-1 text-sm font-bold">
          <CheckCircle size={16} /> Sukces
        </span>
      </div>

      <div className="p-6 flex flex-col md:flex-row gap-6">
        
        {/* Miniaturka (używamy zwykłego img bo domena jest zewnętrzna) */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img 
            src={data.cover} 
            alt="TikTok Cover" 
            className="w-full h-auto rounded-lg shadow-md object-cover aspect-[9/16]"
          />
        </div>

        {/* Dane i przycisk */}
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-3 mb-2">
              {data.text || "Bez opisu"}
            </h3>
            <p className="text-sm text-gray-500">Jakość: HD (No Watermark)</p>
          </div>

          <div className="mt-6 space-y-3">
            <a 
              href={data.downloadUrl} 
              target="_blank" // Otwiera w nowym oknie (wymusza pobieranie przez przeglądarkę)
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-lg"
            >
              <Download size={20} /> POBIERZ MP4
            </a>
            
            <p className="text-xs text-center text-gray-400">
              Jeśli pobieranie nie ruszy, kliknij prawym i wybierz "Zapisz link jako..."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}