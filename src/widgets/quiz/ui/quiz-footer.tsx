import { useSelectedCategories } from '@/entities/quiz';
import { Button, Paragraph } from '@/shared/ui';
import { QuizFooterProps } from '../quiz.types';
import css from './quiz.module.css';

export const QuizFooter: React.FC<QuizFooterProps> = ({ page, onNext }) => {
  const categories = useSelectedCategories();

  return (
    <div className={css.quiz__footer}>
      <Paragraph color='low-muted'>{page} of 2</Paragraph>
      <Button
        className={css.quiz__btnNext}
        variant='outlined'
        color='secondary'
        disabled={categories.length === 0}
        onClick={onNext}
      >
        {page === 1 && 'Next step'}
        {page === 2 && 'Change selection'}
      </Button>
    </div>
  );
};
