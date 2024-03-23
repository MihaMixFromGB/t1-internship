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

export type ShortInfo = Pick<
  Product,
  'id' | 'title' | 'price' | 'thumbnail' | 'category'
>;

type BaseProductsRequest = {
  skip: number;
};
export type GetProductsRequest = BaseProductsRequest;
export type GetProductsByCategoryRequest = BaseProductsRequest & {
  category: Product['category'];
};
export type SearchProductsRequest = BaseProductsRequest & {
  search: string;
};

export type ProductsResponse = {
  products: ShortInfo[];
  total: number;
  skip: number;
  limit: number;
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
