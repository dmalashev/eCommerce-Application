import { ApiRoot, CartDraft, CustomerSignInResult } from "@commercetools/platform-sdk";
import { projectKey } from "../client/client";

export async function createCart(client: ApiRoot, result?: CustomerSignInResult) {

  const id = localStorage.getItem('anonymousId') || '';
  const  apiClient  = client.withProjectKey({ projectKey });
  const cart: CartDraft = {
    currency: 'USD',
    country: 'US',
    lineItems: [],
    ...(result?.customer.id
      ? {
          customerId: result?.customer.id,
          customerEmail: result?.customer.email,
        }
      : { anonymousId: id }),
  };
   return await apiClient.me().carts().post({ body: cart }).execute();
}

