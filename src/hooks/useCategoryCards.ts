import { fetchCategoryCards } from '@api/categoryApi';
import useAsyncData from '@hooks/useAsyncData.ts';

const useCategoryCards = () => {
  const { data, loading, error } = useAsyncData(fetchCategoryCards, []);
  return { cards: data ?? [], loading, error };
};

export default useCategoryCards;
