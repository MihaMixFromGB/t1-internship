import { baseProductsApi } from '@/shared/api';
import { api } from '@/shared/config';
import {
  Product,
  GetProductsRequest,
  GetProductsByCategoryRequest,
  SearchProductsRequest,
  ProductsResponse,
} from './product.types';

function getBaseParamsForProductsQuery(skip: number): URLSearchParams {
  return new URLSearchParams({
    limit: String(api.products.limit),
    skip: String(skip),
    select: api.products.shortInfo,
  });
}

export const productsApi = baseProductsApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, GetProductsRequest>({
      query: ({ skip }) => ({
        url: `?${getBaseParamsForProductsQuery(skip)}`,
      }),
    }),
    getProduct: builder.query<Product, Product['id']>({
      query: productId => ({
        url: `/${productId}`,
      }),
    }),
    getProductsByCategory: builder.query<
      ProductsResponse,
      GetProductsByCategoryRequest
    >({
      query: ({ category, skip }) => ({
        url: `/category/${category}?${getBaseParamsForProductsQuery(skip)}`,
      }),
    }),
    searchProducts: builder.query<ProductsResponse, SearchProductsRequest>({
      query: ({ search, skip }) => ({
        url: `/search?q=${search}${getBaseParamsForProductsQuery(skip)}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} = productsApi;

export const {
  endpoints: { getProducts, getProductsByCategory, searchProducts },
} = productsApi;
