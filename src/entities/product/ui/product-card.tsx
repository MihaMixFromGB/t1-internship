import { Paragraph } from '@/shared/ui';
import { ProductCardProps } from '../product.types';
import css from './product-card.module.css';

export const ProductCard: React.FC<ProductCardProps> = ({ info }) => {
  return (
    <article aria-label={`${info.label}. Price ${info.priceInUSD} USD`}>
      <img
        className={css.product__img}
        src={info.image}
        alt=''
        aria-hidden={true}
      />
      <Paragraph className={css.product__label} aria-hidden={true}>
        {info.label}
      </Paragraph>
      <Paragraph lead aria-hidden={true}>
        {info.priceInUSD}$
      </Paragraph>
    </article>
  );
};
