import { Heading, Paragraph } from '@/shared/ui';
import css from './quiz.module.css';

export const QuizHeader: React.FC = () => {
  return (
    <>
      <Heading className='visually-hidden' tag='h2'>
        Quiz
      </Heading>
      <Paragraph className={css.quiz__title}>
        We will select the perfect product for you
      </Paragraph>
      <Paragraph color='low-muted'>
        Answer three questions and we will send you a catalog with the most
        suitable products for you.
      </Paragraph>
    </>
  );
};
