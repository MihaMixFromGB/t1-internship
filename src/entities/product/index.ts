export * from './ui';
export {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} from './product.api';

export type { Product, ShortInfo, ProductsResponse } from './product.types';
