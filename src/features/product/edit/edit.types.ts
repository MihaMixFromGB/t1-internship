import { Product } from '@/entities/product';

export type EditProductProps = {
  product: Product;
  onPostSubmit?: () => void;
};

export type Inputs = Pick<
  Product,
  | 'price'
  | 'discountPercentage'
  | 'stock'
  | 'brand'
  | 'category'
  | 'description'
>;

export type BaseInputProps = {
  name: keyof Inputs;
  label: string;
};

export type InputProps = BaseInputProps & {
  type: 'text' | 'number';
  step?: number;
  min?: number;
  max?: number;
};

export type SelectProps = BaseInputProps & {
  values: string[];
};

export type TextareaProps = BaseInputProps;
