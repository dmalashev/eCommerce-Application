import { DiscountCodes } from "../data/codes";
import { createCartDiscount } from "./cart";
import { createdCodeDiscount } from "./code";

export async function addDiscount() {


  const cartId = (await createCartDiscount()).id;

  const mapDiscountsCode = DiscountCodes.map(async (code) => {
    return await createdCodeDiscount(cartId, code);
  });
  await Promise.all(mapDiscountsCode);
}
