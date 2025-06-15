import { ApiRoot } from '@commercetools/platform-sdk';
import { projectKey } from '../client/client';
import { createAnonymousCustomer } from '../customer/anonymous-customer';
import { CountriesCodes, CurrencyCodes, StorageKeys, StorageTokenKeys } from '../../types/enums';

export async function createCart(api?: ApiRoot): Promise<void> {
  if (!localStorage.getItem(StorageKeys.ANONYMOUS_ID) && !localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN)) {
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
