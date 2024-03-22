import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} from '@/entities/product';
import { useAppSelector, useAppDispatch } from '@/shared/lib';
import { add } from './catalog.slice';

export const useCatalog = () => {
  const { products, hasMore, skip } = useAppSelector(store => store.catalog);
  useProductsQuery(skip);

  return { products, hasMore };
};

const useProductsQuery = (skip: number): void => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  const skipAll = !!category || !!search;
  const skipByCategory = !category || !!search;
  const skipBySearch = !search || !!category;

  const { data } = useGetProductsQuery({ skip }, { skip: skipAll });
  const { data: dataByCategory } = useGetProductsByCategoryQuery(
    skipByCategory ? skipToken : { skip, category },
  );
  const { data: dataBySearch } = useSearchProductsQuery(
    skipBySearch ? skipToken : { skip, search },
  );

  /**
   * Sync the Catalog slice and the RTK Query's cache
   * (if data is got from the cache RTK Query won't dispatch action to the Redux store).
   * But there are some cons: additional rerenders and dispatching deprecated data of the previous request (an other category)
   */
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!skipAll && data) {
      dispatch(add(data));
    } else if (!skipByCategory && dataByCategory) {
      dispatch(add(dataByCategory));
    } else if (!skipBySearch && dataBySearch) {
      dispatch(add(dataBySearch));
    }
  }, [
    dispatch,
    skipAll,
    skipByCategory,
    skipBySearch,
    data,
    dataByCategory,
    dataBySearch,
  ]);
};
