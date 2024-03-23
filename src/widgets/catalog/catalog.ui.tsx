import clsx from 'clsx';
import { ShowMore } from '@/features/product';
import { ProductList } from '@/entities/product';
import { useAppDispatch } from '@/shared/lib';
import { useCatalog, useResetCatalog } from './catalog.hooks';
import css from './catalog.module.css';
import { showMore } from './catalog.slice';
import { CatalogProps } from './catalog.types';

export const Catalog: React.FC<CatalogProps> = ({ className, sparse }) => {
  useResetCatalog();
  const { products, hasMore } = useCatalog();

  const dispatch = useAppDispatch();
  const showMoreProducts = () => {
    dispatch(showMore());
  };

  const btnShowClasses = clsx(css.catalog__btnShow, {
    [css.catalog_sparse__btnShow]: sparse,
  });

  return (
    <div className={`${css.catalog} ${className}`}>
      <ProductList products={products} sparse={sparse} />
      {hasMore && (
        <ShowMore className={btnShowClasses} onClick={showMoreProducts} />
      )}
    </div>
  );
};
