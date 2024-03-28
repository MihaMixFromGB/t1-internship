import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import {
  ProductDescriptionLayout,
  ProductProp,
  calcDiscountPrice,
  useUpdateProductMutation,
} from '@/entities/product';
import { EditProductProps, Inputs } from '../edit.types';
import { EditButton } from './edit-button';
import { Input } from './edit-input';
import css from './edit.module.css';

export const EditProductForm: React.FC<EditProductProps> = ({
  product,
  onPostSubmit,
}) => {
  const methods = useForm<Inputs>();
  const { handleSubmit, watch } = methods;

  const [updateProduct] = useUpdateProductMutation();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    console.log(data);
    await updateProduct({ id, ...data }).unwrap();
    if (onPostSubmit) onPostSubmit();
  };

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
    basePrice: watch('price') ?? price,
    discountPercentage: watch('discountPercentage') ?? discountPercentage,
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
            max={100}
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
          <EditButton type='submit'>Save</EditButton>
        </form>
      </FormProvider>
    </ProductDescriptionLayout>
  );
};
