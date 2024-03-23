import { useGetCategoriesQuery } from '@/shared/api';

export const useCategories = (): string[] => {
  const { data } = useGetCategoriesQuery();
  return data ?? [];
};
