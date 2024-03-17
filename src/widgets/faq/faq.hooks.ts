import { useQuestions } from '@/entities/question';
import { transformFAQ } from './faq.lib';

export const useFAQ = () => {
  const questions = useQuestions();
  return questions.map(transformFAQ);
};
