import { useGetProductsByCategoriesQuery } from '@/entities/product';
import { useSelectedCategories } from '@/entities/quiz';
import { getTopProductsByRating } from './quiz.lib';

export const useTopProducts = () => {
  const categories = useSelectedCategories();
  const { data, isFetching } = useGetProductsByCategoriesQuery({ categories });

  return { products: data ? getTopProductsByRating(data) : [], isFetching };
};
