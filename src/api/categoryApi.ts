import CATEGORIES from '../constants/categories';
import type { CategoryCardModel } from '../types/CategoryCardType';
import searchPhotos from './unplash';

export const fetchCategoryCards = async (): Promise<CategoryCardModel[]> =>
  Promise.all(
    CATEGORIES.map(async (category) => {
      const photos = await searchPhotos(category.query, 1);
      const img = photos[0]?.urls?.small;

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
