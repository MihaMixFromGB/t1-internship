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
        <div className={css.aboutUs__image}>
          <picture>
            {/* It is working in Firefox but is not working in Chrome
            <source
              srcSet='/images/bg/about_us_photo_mobile.webp 340w, /images/bg/about_us_photo.webp 680w'
              type='image/webp'
              sizes='(max-width: 600px) 340px, 680px'
            />
            <source
              srcSet='/images/bg/about_us_photo_mobile.png 340w, /images/bg/about_us_photo.png 680w'
              type='image/png'
              sizes='(max-width: 600px) 340px, 680px'
            /> */}
            <source
              media='(max-width: 600px)'
              srcSet='/images/bg/about_us_photo_mobile.webp 340w, /images/bg/about_us_photo_mobile.png 340w'
              type='image/webp'
              sizes='340px'
            />
            <source
              srcSet='/images/bg/about_us_photo.webp 680w'
              type='image/webp'
              sizes='680px'
            />
            <img
              loading='lazy'
              decoding='async'
              src='/images/bg/about_us_photo.png'
              width={680}
              alt='our team'
              aria-hidden
            />
          </picture>
        </div>
      </Wrapper>
    </Container>
  );
};
