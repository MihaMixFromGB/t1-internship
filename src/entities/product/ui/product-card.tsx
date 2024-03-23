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
          alt=''
          aria-hidden={true}
        />
        <Paragraph className={css.product__label} aria-hidden={true}>
          {info.title}
        </Paragraph>
        <Paragraph lead aria-hidden={true}>
          {info.price}$
        </Paragraph>
      </article>
    </Link>
  );
};
