import { ShowMore } from '@/features/product';
import { useProducts, ProductList } from '@/entities/product';
import css from './catalog.module.css';

export const Catalog: React.FC = () => {
  const products = useProducts();

  return (
    <div className={css.catalog}>
      <ProductList products={products} />
      <ShowMore className={css.catalog__btnShow} />
    </div>
  );
};
