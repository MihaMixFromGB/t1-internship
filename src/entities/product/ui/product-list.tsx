import clsx from 'clsx';
import { ProductCard } from '@/entities/product';
import { ProductListProps } from '../product.types';
import css from './product-list.module.css';

export const ProductList: React.FC<ProductListProps> = ({
  products,
  sparse,
}) => {
  const classes = clsx(css.container, {
    [css.container_sparse]: sparse,
  });

  return (
    <div className={classes}>
      {products.map(item => (
        <ProductCard key={item.id} info={item} />
      ))}
    </div>
  );
};
