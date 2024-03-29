import { calcDiscountPrice } from './product.lib';

describe('computed props', () => {
  it('a discont price is 100$', () => {
    const basePrice = 200;
    const discountPercentage = 50;

    const discountPrice = calcDiscountPrice({
      basePrice,
      discountPercentage,
    });

    expect(discountPrice).toBe(100);
  });
});
