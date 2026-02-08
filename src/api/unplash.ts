const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

export interface UnsplashPhoto {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
}

interface SearchPhotosResponse {
  results: UnsplashPhoto[];
}

function requireAccessKey() {
  if (!ACCESS_KEY) {
    throw new Error('Missing VITE_UNSPLASH_ACCESS_KEY in .env');
  }
}

export async function searchPhotos(query: string, perPage = 1): Promise<UnsplashPhoto[]> {
  requireAccessKey();

  const url = new URL(`${BASE_URL}/search/photos`);
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', String(perPage));
  url.searchParams.set('order_by', 'relevant');
  url.searchParams.set('client_id', ACCESS_KEY);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Unsplash error: ${res.status}`);

  const data = (await res.json()) as SearchPhotosResponse;
  return data.results;
}
