export * from './ui';
export {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
  useGetProductQuery,
  getProducts,
  getProductsByCategory,
  searchProducts,
} from './product.api';

export type { Product, ShortInfo, ProductsResponse } from './product.types';
