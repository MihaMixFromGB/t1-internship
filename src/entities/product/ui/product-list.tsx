import clsx from 'clsx';
import { ProductCard } from '@/entities/product';
import { ProductListProps } from '../product.types';
import css from './product-list.module.css';

export const ProductList: React.FC<ProductListProps> = ({
  products,
  sparse,
  className,
}) => {
  const classes = clsx(
    css.container,
    {
      [css.container_sparse]: sparse,
    },
    className,
  );

  return (
    <div className={classes}>
      {products.map(item => (
        <ProductCard key={item.id} info={item} />
      ))}
    </div>
  );
};
