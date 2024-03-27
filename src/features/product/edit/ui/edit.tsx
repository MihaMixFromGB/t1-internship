import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import {
  ProductDescriptionLayout,
  ProductProp,
  calcDiscountPrice,
} from '@/entities/product';
import { EditProductProps, Inputs } from '../edit.types';
import { Input } from './edit-input';
import css from './edit.module.css';

export const EditProductForm: React.FC<EditProductProps> = ({ product }) => {
  const methods = useForm<Inputs>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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

  const discountPrice = calcDiscountPrice({
    basePrice: price,
    discountPercentage,
  });

  return (
    <ProductDescriptionLayout id={id} title={title} rating={rating}>
      <FormProvider {...methods}>
        <form className={css.editForm} onSubmit={handleSubmit(onSubmit)}>
          <Input name='price' label='Base Price' value={price} />
          <Input
            name='discountPercentage'
            label='Discount Percentage'
            value={discountPercentage}
          />
          <ProductProp
            className={css.input}
            name='Discount price'
            value={`${discountPrice}$`}
          />
          <Input name='stock' label='Stock' value={stock} />
          <Input name='brand' label='Brand' value={brand} />
          <Input name='category' label='Category' value={category} />
          <Input name='description' label='Description' value={description} />
          <input type='submit' value='Save' />
        </form>
      </FormProvider>
    </ProductDescriptionLayout>
  );
};
