import { baseProductsApi } from '@/shared/api';

export const tagsApi = baseProductsApi.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<string[], void>({
      query: () => ({ url: `/categories` }),
    }),
  }),
});

export const { useGetCategoriesQuery } = tagsApi;
