import { Heading } from '@/shared/ui';
import { calcDiscountPrice } from '../product.lib';
import {
  ProductDescriptionLayoutProps,
  ProductDescriptionProps,
} from '../product.types';
import css from './product-description.module.css';
import { ProductProp } from './product-prop';
import { ProductRating } from './product-rating';

export const ProductDescriptionLayout: React.FC<
  ProductDescriptionLayoutProps
> = ({ id, title, rating, children }) => {
  return (
    <div className={css.product}>
      <div className={css.product__header}>
        <Heading tag='h3'>{title}</Heading>
        <ProductProp name='SKUID' value={String(id).padStart(4, '0')} />
      </div>
      <div className={css.product__props}>
        <ProductRating value={rating} />
        {children}
      </div>
    </div>
  );
};

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
}) => {
  const { id, title, rating } = product;
  return (
    <ProductDescriptionLayout id={id} title={title} rating={rating}>
      <EditableProps product={product} />
    </ProductDescriptionLayout>
  );
};

const EditableProps: React.FC<ProductDescriptionProps> = ({ product }) => {
  const { price, discountPercentage, stock, brand, category, description } =
    product;

  const discountPrice = calcDiscountPrice({
    basePrice: price,
    discountPercentage,
  });

  return (
    <>
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
    </>
  );
};
