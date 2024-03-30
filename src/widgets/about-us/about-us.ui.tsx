import { anchors } from '@/shared/model';
import { Container, Wrapper, Heading, Paragraph } from '@/shared/ui';
import css from './about-us.module.css';

export const AboutUs: React.FC = () => {
  return (
    <Container className={css.aboutUs}>
      <Wrapper className={css.aboutUsWrapper}>
        <div className={css.aboutUs__content}>
          <Heading
            id={anchors.aboutUs}
            className={css.aboutUs__header}
            tag='h2'
            color='secondary'
          >
            About us
          </Heading>
          <Paragraph color='secondary'>
            Every day a person has a choice what to spend his money on. Stores
            and websites offer an endless list of products.
          </Paragraph>
          <Paragraph color='secondary'>
            But we will help you make the right choice!
          </Paragraph>
          <Paragraph className={css.aboutUs__sign} color='secondary'>
            Goods4you
          </Paragraph>
        </div>
        <div className={css.aboutUs__image}></div>
      </Wrapper>
    </Container>
  );
};
