import { Container, Wrapper } from '@/shared/ui';
import { QuizFooter } from './quiz-footer';
import { QuizHeader } from './quiz-header';
import { QuizQuestion } from './quiz-question';
import css from './quiz.module.css';

export const Quiz: React.FC = () => {
  return (
    <Container className={css.quiz}>
      <Wrapper className={css.quizWrapper}>
        <QuizHeader />
        <QuizQuestion />
        <QuizFooter />
      </Wrapper>
    </Container>
  );
};
