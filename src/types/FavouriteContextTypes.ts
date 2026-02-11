import type { UnsplashPhoto } from '@/types/UnplashApiTypes';

export interface StoredFavourites {
  ids: string[];
  byId: Record<string, UnsplashPhoto>;
}

export interface FavouritesContextType {
  favouritesIds: string[];
  favouritesById: Record<string, UnsplashPhoto>;
  favouritesList: UnsplashPhoto[];
  toggleFavourite: (photo: UnsplashPhoto) => void;
  isFavourite: (photoId: string) => boolean;
  removeFavourite: (photoId: string) => void;
  clearFavourites: () => void;
}
