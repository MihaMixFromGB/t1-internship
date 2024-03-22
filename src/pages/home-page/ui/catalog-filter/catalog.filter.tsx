import { Catalog, reset } from '@/widgets/catalog';
import { Filter } from '@/widgets/filter';
import { useAppDispatch } from '@/shared/lib';
import { anchors } from '@/shared/model';
import { Container, Wrapper, Heading } from '@/shared/ui';
import css from './catalog-filter.module.css';

export const CatalogWithFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const resetCatalog = () => dispatch(reset());

  return (
    <Container className={css.catalog}>
      <Wrapper>
        <Heading id={anchors.catalog} className={css.catalog__header} tag='h2'>
          Catalog
        </Heading>
        <div className={css.catalogWrapper}>
          <Filter className={css.catalog__filter} resetCatalog={resetCatalog} />
          <Catalog />
        </div>
      </Wrapper>
    </Container>
  );
};
