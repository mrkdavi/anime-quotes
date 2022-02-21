export interface AnimeResultQuote {
    anime: string;
    character: string;
    quote: string;
}

export async function getOneQuote(): Promise<AnimeResultQuote>{
    const response = await fetch('https://animechan.vercel.app/api/random');
    const quote = await response.json();
    return quote;
}