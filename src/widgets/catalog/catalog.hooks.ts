import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} from '@/entities/product';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { hasMoreProducts } from './catalog.lib';
import { reset, selectProducts, toggleHasMore } from './catalog.slice';

export const useResetCatalog = () => {
  const { category, search } = useCatalogParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch, category, search]);
};

export const useCatalog = () => {
  const { category, search, skip, hasMore } = useCatalogParams();

  const isFetching = useProductsQuery(skip);
  const products = useAppSelector(store =>
    selectProducts(store, category, search),
  );

  return {
    products,
    hasMore,
    isFetching,
    isValid: !(skip === 0 && isFetching),
  };
};

export const useCatalogParams = () => {
  const { skip, hasMore } = useAppSelector(store => store.catalog);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  return { category, search, skip, hasMore };
};

const useProductsQuery = (skip: number) => {
  const { category, search, hasMore } = useCatalogParams();

  const skipAll = !!category || !!search;
  const skipByCategory = !category || !!search;
  const skipBySearch = !search || !!category;

  /**
   * refetchOnMountOrArgChange kills caching :(
   * but it is the decision from tutors
   */
  const { data, isFetching } = useGetProductsQuery(
    { skip },
    { skip: skipAll, refetchOnMountOrArgChange: true },
  );
  const { data: dataByCategory, isFetching: isFetchingByCategory } =
    useGetProductsByCategoryQuery(
      skipByCategory ? skipToken : { skip, category },
      { refetchOnMountOrArgChange: true },
    );
  const { data: dataBySearch, isFetching: isFetchingBySearch } =
    useSearchProductsQuery(skipBySearch ? skipToken : { skip, search }, {
      refetchOnMountOrArgChange: true,
    });

  /**
   * Sync data between the RTK Query cache and the Redux store
   */
  let hasMoreCached = hasMore;
  if (!skipAll && data) {
    hasMoreCached = hasMoreProducts(data);
  } else if (!skipByCategory && dataByCategory) {
    hasMoreCached = hasMoreProducts(dataByCategory);
  } else if (!skipBySearch && dataBySearch) {
    hasMoreCached = hasMoreProducts(dataBySearch);
  }

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (hasMore !== hasMoreCached) dispatch(toggleHasMore());
  }, [dispatch, hasMore, hasMoreCached]);

  return isFetching || isFetchingByCategory || isFetchingBySearch;
};
