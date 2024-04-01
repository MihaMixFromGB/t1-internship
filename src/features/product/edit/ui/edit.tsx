import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  ProductDescriptionLayout,
  ProductProp,
  calcDiscountPrice,
  useUpdateProductMutation,
} from '@/entities/product';
import { useCategories } from '@/entities/tag';
import { Preloader } from '@/shared/ui';
import { EditProductProps, Inputs } from '../edit.types';
import { EditButton } from './edit-button';
import { Input } from './edit-input';
import { Select } from './edit-select';
import { Textarea } from './edit-textarea';
import css from './edit.module.css';

export const EditProductForm: React.FC<EditProductProps> = ({
  product,
  onPostSubmit,
}) => {
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

  const methods = useForm<Inputs>({
    defaultValues: {
      price,
      discountPercentage,
      stock,
      brand,
      category,
      description,
    },
  });

  const { handleSubmit, watch } = methods;

  const discountPrice = calcDiscountPrice({
    basePrice: watch('price') ?? price,
    discountPercentage: watch('discountPercentage') ?? discountPercentage,
  });

  const [updateProduct] = useUpdateProductMutation();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await updateProduct({ id, ...data }).unwrap();
      toast.success("The product's info was successful updated!");
      /* Error handling of API was made in the common middleware */
    } finally {
      if (onPostSubmit) onPostSubmit();
    }
  };

  const { data: categories, isFetching } = useCategories();

  return (
    <ProductDescriptionLayout id={id} title={title} rating={rating}>
      <FormProvider {...methods}>
        <form className={css.editForm} onSubmit={handleSubmit(onSubmit)}>
          <Input type='number' name='price' label='Base Price' />
          <Input
            type='number'
            name='discountPercentage'
            label='Discount Percentage'
            step={0.01}
            max={100}
          />
          <ProductProp
            className={css.input}
            name='Discount price'
            value={`${discountPrice}$`}
          />
          <Input type='number' name='stock' label='Stock' />
          <Input type='text' name='brand' label='Brand' />
          <Preloader isFetching={isFetching}>
            <Select name='category' label='Category' values={categories} />
          </Preloader>
          <Textarea name='description' label='Description' />
          <EditButton type='submit'>Save</EditButton>
        </form>
      </FormProvider>
    </ProductDescriptionLayout>
  );
};
