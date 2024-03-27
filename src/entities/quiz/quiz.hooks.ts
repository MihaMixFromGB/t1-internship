import { useAppSelector } from '@/shared/lib';

export const useQuiz = () => {
  return useAppSelector(state => state.quiz.category);
};

export const useSelectedCategories = () => {
  const { variants } = useQuiz();
  return variants.reduce((result: string[], item) => {
    if (item.status) result.push(item.label);
    return result;
  }, []);
};
