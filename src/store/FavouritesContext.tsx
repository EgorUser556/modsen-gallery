import type { ReactNode } from 'react';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import type { UnsplashPhoto } from '@/types/UnplashApiTypes';

interface FavouritesContextType {
  favouritesIds: string[];
  toggleFavourite: (photo: UnsplashPhoto) => void;
  isFavourite: (photoId: string) => boolean;
}

const FAVOURITES_KEY = 'modsen_favourites';

export const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const FavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favouritesIds, setFavouritesIds] = useState<string[]>(() => {
    try {
      const raw = sessionStorage.getItem(FAVOURITES_KEY);
      if (!raw) return [];

      const parsed: unknown = JSON.parse(raw);
      return Array.isArray(parsed) && parsed.every((x) => typeof x === 'string') ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    sessionStorage.setItem(FAVOURITES_KEY, JSON.stringify(favouritesIds));
  }, [favouritesIds]);

  const toggleFavourite = useCallback((photo: UnsplashPhoto) => {
    setFavouritesIds((prev) =>
      prev.includes(photo.id) ? prev.filter((id) => id !== photo.id) : [...prev, photo.id],
    );
  }, []);

  const isFavourite = useCallback(
    (photoId: string) => favouritesIds.includes(photoId),
    [favouritesIds],
  );

  const value = useMemo(
    () => ({ favouritesIds, toggleFavourite, isFavourite }),
    [favouritesIds, toggleFavourite, isFavourite],
  );

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
};

export default FavouritesProvider;

export const useFavourites = () => {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error('useFavourites must be used inside FavouritesProvider');
  return ctx;
};
