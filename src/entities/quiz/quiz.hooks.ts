import { useAppSelector } from '@/shared/lib';

export const useQuiz = () => {
  return useAppSelector(state => state.quiz.category);
};
