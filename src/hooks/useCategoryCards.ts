import { fetchCategoryCards } from '@api/categoryApi';
import { useEffect, useState } from 'react';

import type { CategoryCardModel } from '@/types/CategoryCardType';

const useCategoryCards = () => {
  const [cards, setCards] = useState<CategoryCardModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);

      try {
        const results = await fetchCategoryCards();

        if (!cancelled) {
          setCards(results);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e : new Error('Failed to load categories'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { cards, loading, error };
};

export default useCategoryCards;
