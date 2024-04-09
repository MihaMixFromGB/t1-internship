import { faq } from '@/shared/api/mocks';
import { Question } from './question.types';

export const useQuestions = (): Question[] => faq;
