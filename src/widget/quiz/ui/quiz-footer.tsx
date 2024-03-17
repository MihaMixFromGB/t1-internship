import { Button, Paragraph } from '@/shared/ui';
import css from './quiz.module.css';

export const QuizFooter: React.FC = () => {
  return (
    <div className={css.quiz__footer}>
      <Paragraph color='low-muted'>1 of 2</Paragraph>
      <Button
        className={css.quiz__btnNext}
        variant='outlined'
        color='secondary'
      >
        Next step
      </Button>
    </div>
  );
};
