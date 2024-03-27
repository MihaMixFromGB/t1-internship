import { Paragraph } from '@/shared/ui';
import { ProductPropProps } from '../product.types';
import css from './product-prop.module.css';

export const ProductProp: React.FC<ProductPropProps> = ({
  className,
  name,
  value,
}) => {
  return (
    <div className={`${css.product__prop} ${className}`}>
      <Paragraph color='muted'>{name}</Paragraph>
      <Paragraph>{value}</Paragraph>
    </div>
  );
};
