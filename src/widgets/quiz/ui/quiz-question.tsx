import { CheckVariant } from '@/features/quiz';
import { useQuiz } from '@/entities/quiz';
import { Paragraph } from '@/shared/ui';
import css from './quiz.module.css';

export const QuizQuestion: React.FC = () => {
  const quiz = useQuiz();

  return (
    <div className={css.quiz__questionWrapper}>
      <Paragraph className={css.quiz__question}>{quiz.question}</Paragraph>
      <ul className={css.quiz__question__grid}>
        {quiz.variants.map((variant, idx) => (
          <li key={`${variant.label}-${idx}`}>
            <CheckVariant variant={variant} />
          </li>
        ))}
      </ul>
    </div>
  );
};
