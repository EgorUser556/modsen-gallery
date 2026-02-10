import type { OrderBy, SearchPhotosResponse, UnsplashPhoto } from '@/types/UnplashApiTypes';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

const requireAccessKey = () => {
  if (!ACCESS_KEY) {
    throw new Error('Missing VITE_UNSPLASH_ACCESS_KEY in .env');
  }
};

export const searchPhotos = async (params: {
  query: string;
  page?: number;
  perPage?: number;
  orderBy?: OrderBy;
}): Promise<SearchPhotosResponse> => {
  requireAccessKey();

  const { query, page = 1, perPage = 12, orderBy = 'relevant' } = params;

  const url = new URL(`${BASE_URL}/search/photos`);
  url.searchParams.set('query', query);
  url.searchParams.set('page', String(page));
  url.searchParams.set('per_page', String(perPage));
  url.searchParams.set('order_by', orderBy);
  url.searchParams.set('client_id', ACCESS_KEY);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Unsplash error: ${res.status}`);

  return (await res.json()) as Promise<SearchPhotosResponse>;
};

export const getRandomPhotos = async (count = 12): Promise<UnsplashPhoto[]> => {
  requireAccessKey();

  const url = new URL(`${BASE_URL}/photos/random`);
  url.searchParams.set('count', String(count));
  url.searchParams.set('client_id', ACCESS_KEY);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Unsplash error: ${res.status}`);

  return (await res.json()) as Promise<UnsplashPhoto[]>;
};
