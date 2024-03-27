import { useGetProductsByCategoriesQuery } from '@/entities/product';
import { useSelectedCategories } from '@/entities/quiz';
import { getTopProductsByRating } from './quiz.lib';

export const useTopProducts = () => {
  const categories = useSelectedCategories();
  const { data } = useGetProductsByCategoriesQuery({ categories });

  return data ? getTopProductsByRating(data) : [];
};
