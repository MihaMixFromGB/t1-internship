import { Product } from '@/entities/product';

export type EditProductProps = {
  product: Product;
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
};
