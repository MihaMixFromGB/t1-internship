import { ProductDescription } from '@/entities/product';
import { Container, Wrapper, Heading, Slider } from '@/shared/ui';
import css from './product-page.module.css';
import { ProductPageProps } from './product-page.types';

export const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <Container className={css.product}>
      <Wrapper>
        <Heading tag='h2'>{product.label}</Heading>
        <div className={css.product__content}>
          <Slider images={product.images} />
          <ProductDescription product={product} />
        </div>
      </Wrapper>
    </Container>
  );
};
