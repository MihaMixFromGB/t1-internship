import { useGetProductsByCategoriesQuery } from '@/entities/product';
import { useSelectedCategories } from '@/entities/quiz';
import { getTopProductsByRating } from './quiz.lib';

export const useTopProducts = () => {
  const categories = useSelectedCategories();
  const { data, isFetching } = useGetProductsByCategoriesQuery(
    { categories },
    { refetchOnMountOrArgChange: true },
  );

  return { products: data ? getTopProductsByRating(data) : [], isFetching };
};
