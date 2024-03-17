import { products } from '@/shared/api';
import { ShortInfo } from './product.types';

export const useProducts = (): ShortInfo[] => {
  return products;
};
