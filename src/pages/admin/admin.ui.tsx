import { Catalog } from '@/widgets/catalog';
import { SearchByTitle } from '@/features/product/search';
import { Container, Wrapper, Heading } from '@/shared/ui';
import css from './admin.module.css';

export const Admin: React.FC = () => {
  return (
    <Container className={css.admin}>
      <Wrapper>
        <Heading tag='h2'>All products</Heading>
        <SearchByTitle className={css.admin__search} />
        <Catalog sparse />
      </Wrapper>
    </Container>
  );
};
