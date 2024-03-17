import { quiz } from '@/shared/api';
import { Quiz } from './quiz.types';

export const useQuiz = (): Quiz => {
  return quiz;
};
