import {
  Container,
  Wrapper,
  Button,
  Heading,
  Paragraph,
  Navbar,
} from '@/shared/ui';
import css from './header-main.module.css';

const menu = [
  { label: 'Catalog' },
  { label: 'About us' },
  { label: 'Product selection' },
  { label: 'Our team' },
  { label: 'FAQ' },
  { label: 'For staff' },
];

export const MainHeader: React.FC = () => {
  return (
    <>
      <Navbar fixed menu={menu} />
      <Container className={css.mainHeader}>
        <Wrapper className={`${css.mainHeaderWrapper}`}>
          <hr className={css.mainHeader__hr} />
          <div className={css.mainHeader__titleWrapper}>
            <Heading
              className={css.mainHeader__title}
              tag='h1'
              color='secondary'
            >
              Goods4you
            </Heading>
          </div>
          <div className={css.mainHeader__contentWrapper}>
            <Paragraph
              className={css.mainHeader__description}
              color='secondary'
            >
              Any products from famous brands with worldwide delivery
            </Paragraph>
            <Button className={css.mainHeader__btn}>Go to shopping</Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};
