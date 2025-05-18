import { Client, ClientResponse } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';

import {
  ApiRoot,
  createApiBuilderFromCtpClient,
  CustomerSignInResult,
  MyCustomerDraft,
} from '@commercetools/platform-sdk';
import { checkingError } from '../functions/checking-errors';

export async function createCustomer(customer: MyCustomerDraft): Promise<void> {
  try {
    const client: Client = clientBuilder
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(authMiddleware)
      .withHttpMiddleware(httpMiddleware)
      .build();

    const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);

    const response: ClientResponse<CustomerSignInResult> = await apiRoot
      .withProjectKey({ projectKey })
      .me()
      .signup()
      .post({ body: customer })
      .execute();
    console.log('Customer created:', response.body?.customer);
  } catch (error: Error | any) {
    checkingError(error);
  }
}



