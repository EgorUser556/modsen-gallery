import { useSearchParams } from 'react-router-dom';

import type { OrderBy } from '@/types/UnplashApiTypes';

const useImagesSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const orderBy = (searchParams.get('sort') as OrderBy) || 'relevant';
  const page = Number(searchParams.get('page') ?? '1');

  const setQuery = (value: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) next.set('query', value);
        else next.delete('query');
        next.set('page', '1');
        return next;
      },
      { replace: true },
    );
  };

  const setOrderBy = (value: OrderBy) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set('sort', value);
        next.set('page', '1');
        return next;
      },
      { replace: true },
    );
  };

  const setPage = (nextPage: number) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set('page', String(nextPage));
        return next;
      },
      { replace: true },
    );
  };

  return { query, orderBy, page, setQuery, setOrderBy, setPage };
};

export default useImagesSearchParams;
