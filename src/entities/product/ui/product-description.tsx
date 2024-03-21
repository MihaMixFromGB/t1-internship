import { Heading, Paragraph } from '@/shared/ui';
import { ProductDescriptionProps } from '../product.types';
import css from './product-description.module.css';
import { ProductRating } from './product-rating';

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
}) => {
  const {
    id,
    label,
    rating,
    priceInUSD,
    discountInPercent,
    stock,
    brand,
    category,
    description,
  } = product;

  const discountPrice = (priceInUSD * discountInPercent) / 100;

  return (
    <div className={css.product}>
      <div className={css.product__header}>
        <Heading tag='h3'>{label}</Heading>
        <ProductProp name='SKUID' value={String(id).padStart(4, '0')} />
      </div>
      <div className={css.product__props}>
        <ProductRating value={rating} />
        <ProductProp name='Base price' value={`${priceInUSD}$`} />
        <ProductProp
          name='Discount percentage'
          value={`${discountInPercent}%`}
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
