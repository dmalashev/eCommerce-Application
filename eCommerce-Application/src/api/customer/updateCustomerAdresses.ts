import { MyCustomerUpdateAction } from '@commercetools/platform-sdk';
import { apiRootCustomer, projectKey } from '../client/client';

export async function updateCustomer(actions: MyCustomerUpdateAction[]): Promise<void> {
  const customer = await apiRootCustomer.withProjectKey({ projectKey }).me().get().execute();

  await apiRootCustomer
    .withProjectKey({ projectKey })
    .me()
    .post({
      body: {
        version: customer.body.version,
        actions: actions,
      },
    })
    .execute();
}
