import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ttdownload-six.vercel.app/'; // Ten sam URL co wyżej

  return {
    rules: {
      userAgent: '*',     // Zasada dla wszystkich robotów (Google, Bing, Yahoo)
      allow: '/',         // Pozwól wchodzić wszędzie
      disallow: '/api/',  // (Opcjonalnie) Nie indeksuj API, bo tam nie ma treści dla ludzi
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Wskazujemy drogę do mapy
  };
}