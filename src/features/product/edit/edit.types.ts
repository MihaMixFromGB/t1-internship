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

export type InputProps = {
  name: keyof Inputs;
  label: string;
  value: string | number;
  min?: number;
  max?: number;
};

export type SelectProps = {
  name: keyof Inputs;
  values: string[];
};
