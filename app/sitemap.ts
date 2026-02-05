import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = 'https://tt-downloader.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily', // Strona główna zmienia się często (bo to narzędzie)
      priority: 1,              // Najważniejsza strona
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Kontakt zmienia się rzadko
      priority: 0.5,              // Mniej ważna
    },
  ];
}