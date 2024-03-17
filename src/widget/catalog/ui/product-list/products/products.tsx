import { ProductCard } from '@/entities/product';
import css from './products.module.css';
import { ProductsProps } from './products.types';

export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className={css.container}>
      {products.map(item => (
        <ProductCard key={item.id} info={item} />
      ))}
    </div>
  );
};
