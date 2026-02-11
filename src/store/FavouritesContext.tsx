import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import type { FavouritesContextType, StoredFavourites } from '@/types/FavouriteContextTypes';
import type { UnsplashPhoto } from '@/types/UnplashApiTypes';

const FAVOURITES_KEY = 'favourites';

const FavouritesContext = createContext<FavouritesContextType | null>(null);

const readStored = (): StoredFavourites => {
  const empty: StoredFavourites = { ids: [], byId: {} };

  try {
    const raw = sessionStorage.getItem(FAVOURITES_KEY);
    if (!raw) return empty;

    const data = JSON.parse(raw) as StoredFavourites;

    return {
      ids: Array.isArray(data.ids) ? data.ids : [],
      byId: data.byId && typeof data.byId === 'object' ? data.byId : {},
    };
  } catch {
    return empty;
  }
};

const writeStored = (value: StoredFavourites) => {
  sessionStorage.setItem(FAVOURITES_KEY, JSON.stringify(value));
};

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [stored, setStored] = useState<StoredFavourites>(readStored);

  useEffect(() => {
    writeStored(stored);
  }, [stored]);

  const isFavourite = useCallback((photoId: string) => stored.ids.includes(photoId), [stored.ids]);

  const removeFavourite = useCallback((photoId: string) => {
    setStored((prev) => {
      if (!prev.ids.includes(photoId)) return prev;

      const ids = prev.ids.filter((id) => id !== photoId);
      const { [photoId]: removed, ...byId } = prev.byId;
      return { ids, byId };
    });
  }, []);

  const toggleFavourite = useCallback((photo: UnsplashPhoto) => {
    setStored((prev) => {
      if (prev.ids.includes(photo.id)) {
        const ids = prev.ids.filter((id) => id !== photo.id);
        const { [photo.id]: removed, ...byId } = prev.byId;
        return { ids, byId };
      }

      return {
        ids: [...prev.ids, photo.id],
        byId: { ...prev.byId, [photo.id]: photo },
      };
    });
  }, []);

  const clearFavourites = useCallback(() => {
    setStored({ ids: [], byId: {} });
  }, []);

  const favouritesList = useMemo(
    () => stored.ids.map((id) => stored.byId[id]).filter(Boolean),
    [stored.ids, stored.byId],
  );

  const value = useMemo<FavouritesContextType>(
    () => ({
      favouritesIds: stored.ids,
      favouritesById: stored.byId,
      favouritesList,
      toggleFavourite,
      isFavourite,
      removeFavourite,
      clearFavourites,
    }),
    [
      stored.ids,
      stored.byId,
      favouritesList,
      toggleFavourite,
      isFavourite,
      removeFavourite,
      clearFavourites,
    ],
  );

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
};

export const useFavourites = () => {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error('useFavourites must be used inside FavouritesProvider');
  return ctx;
};

export default FavouritesProvider;
