import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request: Request) {
  try {
    // 1. Pobieramy link, który przyszedł z naszego Frontendu
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'Brak linku URL' }, { status: 400 });
    }

    // 2. Przygotowujemy dane dla SSSTik (imitujemy formularz HTML)
    const formData = new URLSearchParams();
    formData.append('id', url);
    formData.append('locale', 'en');
    formData.append('tt', 'NlJNdUg'); // Losowy ciąg znaków, o którym wspomniałeś

    console.log(`[API] Przetwarzanie linku: ${url}`);

    // 3. Wysyłamy zapytanie do zewnętrznego serwisu
    // UWAGA: User-Agent jest kluczowy, inaczej Cloudflare nas zablokuje
    const response = await fetch('https://ssstik.io/abc?url=dl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Origin': 'https://ssstik.io',
        'Referer': 'https://ssstik.io/en',
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Błąd zewnętrznego API: ${response.status}`);
    }

    // 4. Pobieramy HTML z odpowiedzi
    const htmlResponse = await response.text();

    // 5. Parsujemy HTML za pomocą Cheerio (tak jak ustaliliśmy)
    const $ = cheerio.load(htmlResponse);

    // Szukamy linku z klasą 'without_watermark'
    const downloadLink = $('a.without_watermark').attr('href');
    const coverImage = $('img.result_author').attr('src');
    const description = $('p.maintext').text();

    // Sprawdzenie czy udało się znaleźć link
    if (!downloadLink) {
        console.error("Otrzymany HTML (fragment):", htmlResponse.substring(0, 500));
        return NextResponse.json({ error: 'Nie udało się znaleźć linku do wideo. Sprawdź czy link jest poprawny.' }, { status: 500 });
    }

    // 6. Zwracamy czysty JSON do naszego Frontendu
    return NextResponse.json({
      status: 'success',
      data: {
        downloadUrl: downloadLink,
        cover: coverImage,
        text: description
      }
    });

  } catch (error: any) {
    console.error('Błąd serwera:', error);
    return NextResponse.json({ error: error.message || 'Wystąpił błąd serwera' }, { status: 500 });
  }
}