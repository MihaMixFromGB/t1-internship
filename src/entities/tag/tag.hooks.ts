import { useGetCategoriesQuery } from './tag.api';

export const useCategories = (): string[] => {
  const { data } = useGetCategoriesQuery();
  return data ?? [];
};
