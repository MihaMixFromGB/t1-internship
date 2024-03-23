import { useGetCategoriesQuery } from '@/shared/api';

type UseCategoriesResponse = {
  data: string[];
  isFetching: boolean;
};
export const useCategories = (): UseCategoriesResponse => {
  const { data, isFetching } = useGetCategoriesQuery();
  return { data: data ?? [], isFetching };
};
