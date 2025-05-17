import { Client, ClientResponse } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';
import { ApiRoot, createApiBuilderFromCtpClient, CustomerDraft, CustomerPagedQueryResponse } from '@commercetools/platform-sdk';

export async function createCustomer(customer: CustomerDraft) {
  const client: Client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();

  const apiRoot:ApiRoot = createApiBuilderFromCtpClient(client);
  try {
    const response: ClientResponse<> = await apiRoot.withProjectKey({ projectKey }).customers().post({ body: customer }).execute();
    console.log('Customer created:', response);
  } catch (error) {
    console.error('Error creating customer:', error);
  }
}
