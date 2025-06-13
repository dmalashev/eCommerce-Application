import { ApiRoot } from '@commercetools/platform-sdk';
import { projectKey } from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';

export async function createCart(api?: ApiRoot): Promise<void> {

  if (!localStorage.getItem('anonymousId')) {
    await createAnonymousCustomer();
  }

   await api
    ?.withProjectKey({ projectKey })
    .me()
    .carts()
    .post({
      body: {
        currency: 'USD',
        country: 'US',
      },
    })
    .execute();

}
