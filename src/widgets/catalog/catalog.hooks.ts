import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} from '@/entities/product';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { reset, selectProducts } from './catalog.slice';

export const useResetCatalog = () => {
  const { category, search } = useCatalogParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch, category, search]);
};

export const useCatalog = () => {
  const { skip, hasMore } = useAppSelector(store => store.catalog);
  const { category, search } = useCatalogParams();

  useProductsQuery(skip);
  const products = useAppSelector(store =>
    selectProducts(store, category, search),
  );

  return { products, hasMore };
};

const useCatalogParams = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  return { category, search };
};

const useProductsQuery = (skip: number): void => {
  const { category, search } = useCatalogParams();

  const skipAll = !!category || !!search;
  const skipByCategory = !category || !!search;
  const skipBySearch = !search || !!category;

  useGetProductsQuery({ skip }, { skip: skipAll });
  useGetProductsByCategoryQuery(
    skipByCategory ? skipToken : { skip, category },
  );
  useSearchProductsQuery(skipBySearch ? skipToken : { skip, search });
};
