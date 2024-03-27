import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
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

export function transformApiError(error: unknown): FetchBaseQueryError {
  if (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    (typeof error.status === 'number' ||
      error.status === 'FETCH_ERROR' ||
      error.status === 'PARSING_ERROR')
  ) {
    return error as FetchBaseQueryError;
  }
  return {
    status: 'CUSTOM_ERROR',
    error: 'Unknown error by requesting top products',
  };
}
