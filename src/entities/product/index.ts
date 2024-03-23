export * from './ui';
export {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
  getProducts,
  getProductsByCategory,
  searchProducts,
} from './product.api';

export type { Product, ShortInfo, ProductsResponse } from './product.types';
