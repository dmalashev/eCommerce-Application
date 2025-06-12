import { ApiRoot } from '@commercetools/platform-sdk';
import { projectKey } from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';

export async function createCart(api?: ApiRoot): Promise<void> {
  console.log(api);

  if (!localStorage.getItem('anonymousId')) {
    await createAnonymousCustomer();
  }

  const resp = await api
    ?.withProjectKey({ projectKey })
    .me()
    .carts()
    .post({ body: {
      currency: 'USD',
      country: 'US',
    } })
    .execute();

  console.log(resp?.body, 'cart create-cart');
}
