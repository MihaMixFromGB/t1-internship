import clsx from 'clsx';
import { ShowMore } from '@/features/product';
import { useProducts, ProductList } from '@/entities/product';
import css from './catalog.module.css';
import { CatalogProps } from './catalog.types';

export const Catalog: React.FC<CatalogProps> = ({ className, sparse }) => {
  const products = useProducts();

  const btnShowClasses = clsx(css.catalog__btnShow, {
    [css.catalog_sparse__btnShow]: sparse,
  });

  return (
    <div className={`${css.catalog} ${className}`}>
      <ProductList products={products} sparse={sparse} />
      <ShowMore className={btnShowClasses} />
    </div>
  );
};
