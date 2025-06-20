import { CartDiscount } from '@commercetools/platform-sdk';
import { DiscountCodes } from '../data/codes';
import { createCartDiscount } from './cart';
import { createdCodeDiscount } from './code';

export async function addDiscount(): Promise<void> {
  const cart: CartDiscount = await createCartDiscount();

  const mapDiscountsCode = DiscountCodes.map(async (code) => {
    return await createdCodeDiscount(cart.id, code);
  });
  await Promise.all(mapDiscountsCode);
}
