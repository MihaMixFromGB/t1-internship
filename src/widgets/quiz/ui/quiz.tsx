import { useState } from 'react';
import { Container, Wrapper } from '@/shared/ui';
import { QuizFooter } from './quiz-footer';
import { QuizHeader } from './quiz-header';
import { QuizRequest } from './quiz-request';
import { QuizResponse } from './quiz-response';
import css from './quiz.module.css';

export const Quiz: React.FC = () => {
  const [page, setPage] = useState(1);

  let body = <QuizRequest />;
  if (page === 2) body = <QuizResponse />;

  return (
    <Container className={css.quiz}>
      <Wrapper className={css.quizWrapper}>
        <QuizHeader page={page} />
        <div className={css.quiz__body}>{body}</div>
        <QuizFooter
          page={page}
          onNext={() => {
            setPage(page === 1 ? 2 : 1);
          }}
        />
      </Wrapper>
    </Container>
  );
};
