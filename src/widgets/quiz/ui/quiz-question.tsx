import { CheckVariant } from '@/features/quiz';
import { useQuiz, toggleState } from '@/entities/quiz';
import { useAppDispatch } from '@/shared/lib';
import { Paragraph } from '@/shared/ui';
import css from './quiz.module.css';

export const QuizQuestion: React.FC = () => {
  const quiz = useQuiz();
  const dispatch = useAppDispatch();

  return (
    <div className={css.quiz__questionWrapper}>
      <Paragraph className={css.quiz__question}>{quiz.question}</Paragraph>
      <ul className={css.quiz__question__grid}>
        {quiz.variants.map((variant, idx) => (
          <li key={`${variant.label}-${idx}`}>
            <CheckVariant
              variant={variant}
              onChange={() => {
                dispatch(
                  toggleState({ section: 'category', variant: variant.label }),
                );
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
