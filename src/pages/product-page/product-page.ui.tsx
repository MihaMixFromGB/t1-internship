import { ProductDescription } from '@/entities/product';
import { Container, Wrapper, Heading, Slider } from '@/shared/ui';
import { useProduct } from './product-page.hooks';
import css from './product-page.module.css';

export const ProductPage: React.FC = () => {
  const { data: product } = useProduct();

  return (
    <Container className={css.product}>
      <Wrapper>
        {!product ? (
          <Heading tag='h2'>Товар не найден</Heading>
        ) : (
          <>
            <Heading tag='h2'>{product.title}</Heading>
            <div className={css.product__content}>
              <Slider images={product.images} />
              <ProductDescription product={product} />
            </div>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
