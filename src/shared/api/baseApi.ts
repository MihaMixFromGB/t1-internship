import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://dummyjson.com';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }),
  tagTypes: ['Products'],
  endpoints: builder => ({
    getCategories: builder.query<string[], void>({
      query: () => ({ url: `/categories` }),
      transformResponse: (response: { slug: string }[]) =>
        response.map(item => item.slug),
      transformErrorResponse: response => response.data,
    }),
  }),
});

export const { useGetCategoriesQuery } = productsApi;
export const {
  endpoints: { getCategories },
} = productsApi;
