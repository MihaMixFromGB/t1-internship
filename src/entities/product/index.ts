export * from './ui';
export {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
  useGetProductQuery,
  useGetProductsByCategoriesQuery,
  useUpdateProductMutation,
  getProducts,
  getProductsByCategory,
  searchProducts,
} from './product.api';
export { calcDiscountPrice } from './product.lib';

export type { Product, ShortInfo, ProductsResponse } from './product.types';
