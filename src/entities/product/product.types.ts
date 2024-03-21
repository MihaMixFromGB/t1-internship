export type Product = {
  id: string;
  rating: number;
  label: string;
  images: string[];
  priceInUSD: number;
  discountInPercent: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
};

export type ShortInfo = Pick<Product, 'id' | 'label' | 'priceInUSD'> & {
  image: string;
};

export type ProductCardProps = {
  info: ShortInfo;
};

export type ProductListProps = {
  products: ShortInfo[];
  sparse?: boolean;
};

export type ProductDescriptionProps = {
  product: Product;
};
