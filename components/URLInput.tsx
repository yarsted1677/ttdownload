"use client";

import { use, useState } from "react";
import { Loader2, Search } from "lucide-react";
import { VideoData, ApiResponse } from "@/types";
import {TEXTS} from "@/locales/en";

interface Props {
    onSuccess: (data: VideoData) => void;
}

export default function URLInput({ onSuccess }: Props) {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/resolve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            const json: ApiResponse = await res.json();

            if (!res.ok || json.error) {
                throw new Error(json.error || "Wystąpił błąd podczas pobierania.");
            }

            if (json.data) {
                onSuccess(json.data);
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={TEXTS.input.placeholder}
                        className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg text-gray-700 transition-all"
                        disabled={isLoading}
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900" />
                </div>

                {error && (
                    <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                        ⚠️ {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading || !url}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold rounded-lg transition-all text-lg shadow-lg flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="animate-spin" /> {TEXTS.input.buttonLoading}
                        </>
                    ) : (
                        TEXTS.input.buttonDefault
                    )}
                </button>
            </form>
        </div>
    );
}