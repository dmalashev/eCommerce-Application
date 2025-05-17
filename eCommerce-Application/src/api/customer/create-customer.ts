import { Client, ClientResponse } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
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
const user: MyCustomerDraft = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'qwdqwd',
  password: 'dwqdqd',
};

createCustomer(user);

Toastify({
  text: 'This is a toast',
  duration: 3000,
  destination: 'https://github.com/apvarun/toastify-js',
  newWindow: true,
  close: true,
  gravity: 'top', // `top` or `bottom`
  position: 'left', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: 'linear-gradient(to right, #00b09b, #96c93d)',
  },
  onClick: function () {}, // Callback after click
}).showToast();
