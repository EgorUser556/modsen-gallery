import CATEGORIES from '@constants/categories';

import type { CategoryCardModel } from '@/types/CategoryCardType';

import { searchPhotos } from './unplash';

export const fetchCategoryCards = async (): Promise<CategoryCardModel[]> =>
  Promise.all(
    CATEGORIES.map(async (category) => {
      const data = await searchPhotos({
        query: category.query,
        page: 1,
        perPage: 1,
        orderBy: 'relevant',
      });
      const img = data.results[0]?.urls?.small;

      return {
        title: category.title,
        query: category.query,
        imageUrl: img,
      };
    }),
  );

export const buildFallbackCategoryCards = (): CategoryCardModel[] =>
  CATEGORIES.map((category) => ({
    title: category.title,
    query: category.query,
  }));
