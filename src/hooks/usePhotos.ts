import useAsyncData from '@hooks/useAsyncData.ts';
import useDebounce from '@hooks/useDebounce';

import { getRandomPhotos, searchPhotos } from '@/api/unplash';
import type { OrderBy } from '@/types/UnplashApiTypes';

export default function usePhotos(query: string, page: number, orderBy: OrderBy) {
  const debouncedQuery = useDebounce(query, 500);

  const { data, loading, error } = useAsyncData(async () => {
    if (!debouncedQuery) return getRandomPhotos(12);
    const res = await searchPhotos({ query: debouncedQuery, page, perPage: 12, orderBy });
    return res.results;
  }, [debouncedQuery, page, orderBy]);

  return { photos: data, loading, error };
}
