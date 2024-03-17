export type Product = {
  id: string;
  skuid: number;
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
