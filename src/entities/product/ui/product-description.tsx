import { Heading, Paragraph } from '@/shared/ui';
import { ProductDescriptionProps } from '../product.types';
import css from './product-description.module.css';
import { ProductRating } from './product-rating';

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
}) => {
  const {
    id,
    title,
    rating,
    price,
    discountPercentage,
    stock,
    brand,
    category,
    description,
  } = product;

  const discountPrice = Math.ceil(price * (1 - discountPercentage / 100));

  return (
    <div className={css.product}>
      <div className={css.product__header}>
        <Heading tag='h3'>{title}</Heading>
        <ProductProp name='SKUID' value={String(id).padStart(4, '0')} />
      </div>
      <div className={css.product__props}>
        <ProductRating value={rating} />
        <ProductProp name='Base price' value={`${price}$`} />
        <ProductProp
          name='Discount percentage'
          value={`${discountPercentage}%`}
        />
        <ProductProp name='Discount price' value={`${discountPrice}$`} />
        <ProductProp name='Stock' value={stock} />
        <ProductProp name='Brand' value={brand} />
        <ProductProp name='Category' value={category} />
        <ProductProp name='Description' value={description} />
      </div>
    </div>
  );
};

type ProductPropProps = {
  name: string;
  value: string | number;
};
const ProductProp: React.FC<ProductPropProps> = ({ name, value }) => {
  return (
    <div className={css.product__prop}>
      <Paragraph color='muted'>{name}</Paragraph>
      <Paragraph>{value}</Paragraph>
    </div>
  );
};
