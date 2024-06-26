import { Link } from 'react-router-dom';
import { paths } from '@/shared/model';
import { Paragraph } from '@/shared/ui';
import { ProductCardProps } from '../product.types';
import css from './product-card.module.css';

export const ProductCard: React.FC<ProductCardProps> = ({ info }) => {
  return (
    <Link to={paths.product(info.id)}>
      <article aria-label={`${info.title}. Price ${info.price} USD`}>
        <img
          className={css.product__img}
          src={info.thumbnail}
          alt={info.title}
          aria-hidden
        />
        <Paragraph className={css.product__label} aria-hidden>
          {info.title}
        </Paragraph>
        <Paragraph lead aria-hidden>
          {info.price}$
        </Paragraph>
      </article>
    </Link>
  );
};
