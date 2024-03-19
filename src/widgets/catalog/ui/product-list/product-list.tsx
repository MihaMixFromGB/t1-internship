import { ShowMore } from '@/features/product';
import { useProducts, ProductList as Products } from '@/entities/product';
import css from './product-list.module.css';

export const ProductList: React.FC = () => {
  const products = useProducts();

  return (
    <div className={css.productList}>
      <Products products={products} />
      <ShowMore className={css.productList__btnShow} />
    </div>
  );
};
