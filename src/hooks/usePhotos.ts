import useDebounce from '@hooks/useDebounce';
import { useEffect, useState } from 'react';

import { getRandomPhotos, searchPhotos } from '@/api/unplash';
import type { OrderBy, UnsplashPhoto } from '@/types/UnplashApiTypes';

export default function usePhotos(query: string, page: number, orderBy: OrderBy) {
  const [photos, setPhotos] = useState<UnsplashPhoto[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);

      try {
        if (!debouncedQuery) {
          const random = await getRandomPhotos(12);
          if (!cancelled) setPhotos(random);
          return;
        }

        const data = await searchPhotos({
          query: debouncedQuery,
          page,
          perPage: 12,
          orderBy,
        });

        if (!cancelled) setPhotos(data.results);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e : new Error('Failed to load photos'));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, page, orderBy]);

  return { photos, loading, error };
}
