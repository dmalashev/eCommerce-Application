import {  CartDiscountDraft } from "@commercetools/platform-sdk";
import { apiRoot, projectKey } from "../client/client";

export async function createCartDiscount() {
  const cartDiscountDraft: CartDiscountDraft = {
    name: {
      en: '10% off discount',
    },
    value: {
      type: 'relative',
      permyriad: 1000,
    },
    cartPredicate: 'totalPrice > "0 USD"',
    sortOrder: '0.1',
    isActive: true,
    requiresDiscountCode: true,
    target: {
      type: 'lineItems',
      predicate: '1= 1',
    },
  };
  const response = await apiRoot.withProjectKey({ projectKey }).cartDiscounts().post({ body: cartDiscountDraft }).execute();
  return response.body;
}