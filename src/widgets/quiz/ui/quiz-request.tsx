import { CheckVariant } from '@/features/quiz';
import { useQuiz, toggleState } from '@/entities/quiz';
import { useGetCategoriesQuery } from '@/shared/api';
import { useAppDispatch } from '@/shared/lib';
import { Paragraph, Preloader } from '@/shared/ui';
import css from './quiz.module.css';

export const QuizRequest: React.FC = () => {
  const quiz = useQuiz();
  const { isFetching } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();

  return (
    <div className={css.quiz__requestWrapper}>
      <Preloader isFetching={isFetching}>
        <Paragraph className={css.quiz__request}>{quiz.question}</Paragraph>
        <ul className={css.quiz__request__grid}>
          {quiz.variants.map(variant => (
            <li key={variant.label}>
              <CheckVariant
                variant={variant}
                onChange={() => {
                  dispatch(
                    toggleState({
                      section: 'category',
                      variant: variant.label,
                    }),
                  );
                }}
              />
            </li>
          ))}
        </ul>
      </Preloader>
    </div>
  );
};
