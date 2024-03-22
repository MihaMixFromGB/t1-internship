import { anchors } from '@/shared/model';
import { Container, Wrapper, Heading, Accordion } from '@/shared/ui';
import { useFAQ } from './faq.hooks';
import css from './faq.module.css';

export const FAQ: React.FC = () => {
  const questions = useFAQ();

  return (
    <Container className={css.faq}>
      <Wrapper>
        <Heading id={anchors.faq} className={css.faq__header} tag='h2'>
          FAQ
        </Heading>
        <Accordion items={questions} />
      </Wrapper>
    </Container>
  );
};
