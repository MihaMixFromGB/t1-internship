import { Container, Wrapper, Heading } from '@/shared/ui';
import css from './catalog.module.css';
import { Filter } from './filter';
import { ProductList } from './product-list';

export const Catalog: React.FC = () => {
  return (
    <Container className={css.catalog}>
      <Wrapper>
        <Heading className={css.catalog__header} tag='h2'>
          Catalog
        </Heading>
        <div className={css.catalogWrapper}>
          <Filter className={css.catalog__filter} />
          <ProductList />
        </div>
      </Wrapper>
    </Container>
  );
};
