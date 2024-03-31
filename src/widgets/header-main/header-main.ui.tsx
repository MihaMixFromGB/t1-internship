import { navigationMenu } from '@/shared/model';
import {
  Container,
  Wrapper,
  Button,
  Heading,
  Paragraph,
  Navbar,
} from '@/shared/ui';
import css from './header-main.module.css';

export const MainHeader: React.FC = () => {
  return (
    <>
      <Navbar
        className={css.mainHeader__navbar}
        fixed
        menu={navigationMenu}
        burger
      />
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
            <Paragraph className={css.mainHeader__subtitle} color='secondary'>
              Any products from famous brands with worldwide delivery
            </Paragraph>
            <Paragraph
              className={css.mainHeader__description}
              color='secondary'
            >
              We sell smartphones, laptops, clothes, shoes and many other
              products at low prices
            </Paragraph>
            <Button className={css.mainHeader__btn}>Go to shopping</Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};
