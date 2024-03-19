import { ProductCard } from '@/entities/product';
import { ProductListProps } from '../product.types';
import css from './product-list.module.css';

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={css.container}>
      {products.map(item => (
        <ProductCard key={item.id} info={item} />
      ))}
    </div>
  );
};
