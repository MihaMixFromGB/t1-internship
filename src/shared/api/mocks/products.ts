const productDto = {
  label: "Nike Air Force 1 '07 QS",
  image: '/images/mocks/product_big.png',
  priceInUSD: 110,
};

export const products = Array.from({ length: 6 }).map((_, idx) => ({
  id: String(idx + 1),
  ...productDto,
}));
