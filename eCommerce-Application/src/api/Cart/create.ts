import { ApiRoot } from '@commercetools/platform-sdk';
import { projectKey } from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';
import { CountriesCodes, CurrencyCodes, StorageKeys } from '../../types/enums';

export async function createCart(api?: ApiRoot): Promise<void> {
  if (!localStorage.getItem(StorageKeys.ANONYMOUS_ID)) {
    await createAnonymousCustomer();
  }

  await api
    ?.withProjectKey({ projectKey })
    .me()
    .carts()
    .post({
      body: {
        currency: CurrencyCodes.USD,
        country: CountriesCodes.US,
      },
    })
    .execute();
}
