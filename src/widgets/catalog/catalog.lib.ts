type HasMoreProductsArgs = {
  total: number;
  skip: number;
  limit: number;
};
export function hasMoreProducts({ total, skip, limit }: HasMoreProductsArgs) {
  return limit + skip < total;
}
