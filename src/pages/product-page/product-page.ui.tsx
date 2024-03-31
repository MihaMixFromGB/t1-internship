import { useState } from 'react';
import { EditProductForm, EditButton } from '@/features/product/edit';
import { ProductDescription } from '@/entities/product';
import { Container, Wrapper, Heading, Slider, Preloader } from '@/shared/ui';
import { useProduct } from './product-page.hooks';
import css from './product-page.module.css';

export const ProductPage: React.FC = () => {
  const [isEdit, toggleEdit] = useState(true);
  const { data: product, isFetching } = useProduct();

  return (
    <Container className={css.product}>
      <Wrapper>
        <Preloader isFetching={isFetching}>
          {!product ? (
            <Heading tag='h2'>A product was not found</Heading>
          ) : (
            <>
              <Heading tag='h2'>{product.title}</Heading>
              <div className={css.product__content}>
                <Slider images={product.images} />
                {isEdit ? (
                  <EditProductForm
                    product={product}
                    onPostSubmit={() => toggleEdit(false)}
                  />
                ) : (
                  <div>
                    <ProductDescription product={product} />
                    <EditButton
                      className={css.editButton}
                      onClick={() => toggleEdit(true)}
                    >
                      Edit
                    </EditButton>
                  </div>
                )}
              </div>
            </>
          )}
        </Preloader>
      </Wrapper>
    </Container>
  );
};
