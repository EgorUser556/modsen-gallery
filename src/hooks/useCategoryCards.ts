import { useEffect, useState } from 'react';

import { buildFallbackCategoryCards, fetchCategoryCards } from '../api/categoryApi';
import type { CategoryCardModel } from '../types/CategoryCardType';

const useCategoryCards = () => {
  const [cards, setCards] = useState<CategoryCardModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);

      try {
        const results = await fetchCategoryCards();

        if (!cancelled) {
          setCards(results);
        }
      } catch {
        if (!cancelled) {
          const fallback = buildFallbackCategoryCards();
          setCards(fallback);
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

  return { cards, loading };
};

export default useCategoryCards;
