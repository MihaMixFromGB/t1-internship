import { skipToken } from '@reduxjs/toolkit/query';
import { useSearchParams } from 'react-router-dom';
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} from '@/entities/product';
import { useAppSelector } from '@/shared/lib';
import { selectProducts } from './catalog.slice';

export const useCatalog = () => {
  const { skip, hasMore } = useAppSelector(store => store.catalog);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  useProductsQuery(skip, category, search);
  const products = useAppSelector(store =>
    selectProducts(store, category, search),
  );

  return { products, hasMore };
};

const useProductsQuery = (
  skip: number,
  category: string | null,
  search: string | null,
): void => {
  const skipAll = !!category || !!search;
  const skipByCategory = !category || !!search;
  const skipBySearch = !search || !!category;

  useGetProductsQuery({ skip }, { skip: skipAll });
  useGetProductsByCategoryQuery(
    skipByCategory ? skipToken : { skip, category },
  );
  useSearchProductsQuery(skipBySearch ? skipToken : { skip, search });
};
