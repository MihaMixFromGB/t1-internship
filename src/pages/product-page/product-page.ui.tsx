import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { EditProductForm, EditButton } from '@/features/product/edit';
import { ProductDescription } from '@/entities/product';
import { Container, Wrapper, Heading, Preloader } from '@/shared/ui';
import { useProduct } from './product-page.hooks';
import css from './product-page.module.css';
import { transformImagesToGallery } from './product.page-lib';
import 'react-image-gallery/styles/css/image-gallery.css';

export const ProductPage: React.FC = () => {
  const [isEdit, toggleEdit] = useState(false);
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
                <ImageGallery
                  items={transformImagesToGallery(product.images)}
                />
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
