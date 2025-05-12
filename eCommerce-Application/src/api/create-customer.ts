import {
  projectKey,
  client as clientBuilder,
  httpMiddleware,
  authMiddleware,
} from './client';
import { createApiBuilderFromCtpClient, CustomerDraft } from '@commercetools/platform-sdk';

export async function createCustomer(customer: CustomerDraft) {
  const client = clientBuilder.withProjectKey(projectKey).withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();

  const apiRoot = createApiBuilderFromCtpClient(client);
  try {
    const response = await apiRoot.withProjectKey({ projectKey }).customers().post({ body: customer }).execute();
    console.log('Customer created:', response);
  } catch (error) {
    console.error('Error creating customer:', error);
  }
}
