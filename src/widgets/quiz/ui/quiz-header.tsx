import clsx from 'clsx';
import { quiz } from '@/shared/config';
import { Heading, Paragraph } from '@/shared/ui';
import { QuizHeaderProps } from '../quiz.types';
import css from './quiz.module.css';

export const QuizHeader: React.FC<QuizHeaderProps> = ({ page }) => {
  const { title, description } = quiz[page - 1];

  const titleClasses = clsx(css.quiz__title, {
    [css.quiz__title_single]: !description,
  });

  return (
    <>
      <Heading className='visually-hidden' tag='h2'>
        Quiz
      </Heading>
      <Paragraph className={titleClasses}>{title}</Paragraph>
      <Paragraph color='low-muted'>{description}</Paragraph>
    </>
  );
};
