import type { Question } from '@/entities/question';
import type { AccordionItem } from '@/shared/ui/accordion';

export function transformFAQ(q: Question): AccordionItem {
  return {
    title: q.question,
    description: q.answer,
  };
}
