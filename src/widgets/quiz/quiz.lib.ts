import { ShortInfo } from '@/entities/product';

export function getTopProductsByRating(products: ShortInfo[]): ShortInfo[] {
  return products
    .slice()
    .sort((p1, p2) => p2.rating - p1.rating)
    .slice(0, 3);
}
