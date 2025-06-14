import { ClientResponse, DiscountCode, DiscountCodeDraft } from '@commercetools/platform-sdk';
import { apiRoot, projectKey } from '../client/client';

export async function createdCodeDiscount(cartDiscountId: string, code: string): Promise<DiscountCode> {
  const discountCodeDraft: DiscountCodeDraft = {
    code: code,
    cartDiscounts: [
      {
        typeId: 'cart-discount',
        id: cartDiscountId,
      },
    ],
    isActive: true,
  };
  const createResponse: ClientResponse<DiscountCode> = await apiRoot
    .withProjectKey({ projectKey })
    .discountCodes()
    .post({ body: discountCodeDraft })
    .execute();
  return createResponse.body;
}
