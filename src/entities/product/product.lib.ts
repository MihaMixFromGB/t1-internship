import {
  ApiShortInfo,
  ShortInfo,
  ApiProductsResponse,
  ProductsResponse,
  SearchProductsRequest,
} from './product.types';

export function transformSearchProductsResponse(
  response: ApiProductsResponse,
  _meta: unknown,
  args: SearchProductsRequest,
): ProductsResponse {
  const { products, ...rest } = response;
  return {
    products: transformShortInfo(products, args.search),
    ...rest,
  };
}

function transformShortInfo(
  products: ApiShortInfo[],
  search: string,
): ShortInfo[] {
  return products.map(p => ({ ...p, searchTag: search }));
}
