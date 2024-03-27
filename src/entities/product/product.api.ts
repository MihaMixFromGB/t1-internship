import { productsApi } from '@/shared/api';
import { api } from '@/shared/config';
import {
  transformSearchProductsResponse,
  transformApiError,
} from './product.lib';
import {
  Product,
  ShortInfo,
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

export const baseProductsApi = productsApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, GetProductsRequest>({
      query: ({ skip = 0 }) => ({
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
      query: ({ category, skip = 0 }) => ({
        url: `/category/${category}?${getBaseParamsForProductsQuery(skip)}`,
      }),
    }),
    searchProducts: builder.query<ProductsResponse, SearchProductsRequest>({
      query: ({ search, skip = 0 }) => ({
        url: `/search?q=${search}&${getBaseParamsForProductsQuery(skip)}`,
      }),
      transformResponse: transformSearchProductsResponse,
    }),
  }),
});

export const customProductsApi = baseProductsApi.injectEndpoints({
  endpoints: builder => ({
    getProductsByCategories: builder.query<
      ShortInfo[],
      { categories: string[] }
    >({
      queryFn: async ({ categories }, { dispatch }) => {
        try {
          const promises = categories.map(
            async category =>
              await dispatch(
                baseProductsApi.endpoints.getProductsByCategory.initiate({
                  category,
                }),
              ),
          );

          const response = await Promise.all(promises);
          const data = response.reduce((result: ShortInfo[], { data }) => {
            if (data) result.push(...data.products);
            return result;
          }, []);

          return { data };
        } catch (error) {
          return { error: transformApiError(error) };
        }
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} = baseProductsApi;

export const { useGetProductsByCategoriesQuery } = customProductsApi;

export const {
  endpoints: { getProducts, getProductsByCategory, searchProducts },
} = baseProductsApi;
