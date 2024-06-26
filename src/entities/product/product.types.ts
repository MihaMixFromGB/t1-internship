import { PropsWithClassName } from '@/shared/model';

export type Product = {
  id: number;
  skuid: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ApiShortInfo = Pick<
  Product,
  'id' | 'title' | 'price' | 'thumbnail' | 'category' | 'rating'
>;

export type ShortInfo = ApiShortInfo & {
  searchTag?: SearchProductsRequest['search'];
};

type BaseProductsRequest = {
  skip?: number;
};
export type GetProductsRequest = BaseProductsRequest;
export type GetProductsByCategoryRequest = BaseProductsRequest & {
  category: Product['category'];
};
export type SearchProductsRequest = BaseProductsRequest & {
  search: string;
};

export type UpdateProductRequest = Pick<Product, 'id'> &
  Partial<Omit<Product, 'id'>>;

export type ApiProductsResponse = {
  products: ApiShortInfo[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductsResponse = Omit<ApiProductsResponse, 'products'> & {
  products: ShortInfo[];
};

export type ProductCardProps = {
  info: ShortInfo;
};

export type ProductListProps = PropsWithClassName & {
  products: ShortInfo[];
  sparse?: boolean;
};

export type ProductPropProps = PropsWithClassName & {
  name: string;
  value: string | number;
};

export type ProductDescriptionLayoutProps = React.PropsWithChildren & {
  id: Product['id'];
  title: Product['title'];
  rating: Product['rating'];
};

export type ProductDescriptionProps = {
  product: Product;
};

export type CalcDiscountPriceArgs = {
  basePrice: number;
  discountPercentage: number;
};
