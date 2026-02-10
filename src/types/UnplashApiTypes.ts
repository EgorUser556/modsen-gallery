export type OrderBy = 'relevant' | 'latest';

export interface UnsplashPhoto {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
  description: string | null;
  created_at: string;
}

export interface SearchPhotosResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}
