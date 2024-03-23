import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://dummyjson.com';

export const baseProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }),
  tagTypes: ['Products'],
  endpoints: builder => ({
    getCategories: builder.query<string[], void>({
      query: () => ({ url: `/categories` }),
    }),
  }),
});

export const { useGetCategoriesQuery } = baseProductsApi;
export const {
  endpoints: { getCategories },
} = baseProductsApi;
