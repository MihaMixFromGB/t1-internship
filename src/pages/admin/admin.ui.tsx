import { skipToken } from '@reduxjs/toolkit/query';
import { Catalog, useCatalogParams } from '@/widgets/catalog';
import { SearchByTitle } from '@/features/product/search';
import { useSearchProductsQuery } from '@/entities/product';
import { Container, Wrapper, Heading } from '@/shared/ui';
import css from './admin.module.css';

export const Admin: React.FC = () => {
  const { search, skip } = useCatalogParams();
  const { refetch } = useSearchProductsQuery(
    !search
      ? skipToken
      : {
          skip,
          search,
        },
  );

  const onSearch = () => {
    if (!search) return;
    refetch();
  };

  return (
    <Container className={css.admin}>
      <Wrapper>
        <Heading tag='h2'>All products</Heading>
        <SearchByTitle className={css.admin__search} onSearch={onSearch} />
        <Catalog sparse />
      </Wrapper>
    </Container>
  );
};
