import { Client, ClientResponse } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';

import {
  ApiRoot,
  BaseAddress,
  createApiBuilderFromCtpClient,
  CustomerSignInResult,
  MyCustomerDraft,
} from '@commercetools/platform-sdk';
import { checkingError } from '../handleError/checking-errors';

export async function createCustomer(customer: MyCustomerDraft): Promise<ClientResponse<CustomerSignInResult>> {
  try {
    const client: Client = clientBuilder
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(authMiddleware)
      .withHttpMiddleware(httpMiddleware)
      .build();

    const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);
    console.log(customer);
    const response: ClientResponse<CustomerSignInResult> = await apiRoot
      .withProjectKey({ projectKey })
      .me()
      .signup()
      .post({ body: customer })
      .execute();
    return response;
  } catch (error: Error | any) {
    checkingError(error);
    return Promise.reject(error);
  }
}

export const createdCustomer = (object: Record<string, string>): MyCustomerDraft => {
  const countryMap: Record<string, string> = {
    Russia: 'RU',
    Germany: 'DE',
    France: 'FR',
    Ukraine: 'UA',
    USA: 'US',
  };

  const billingAddress: BaseAddress = {
    city: object?.billingCity,
    country: countryMap[object?.billingCountry],
    firstName: object?.name,
    lastName: object?.lastName,
    streetName: object?.billingStreet,
    postalCode: object?.billingPostalcode,
  };
  const shippingAddress: BaseAddress = {
    city: object?.shippingCity,
    country: countryMap[object?.shippingCountry],
    firstName: object?.name,
    lastName: object?.lastName,
    streetName: object?.shippingStreet,
    postalCode: object?.shippingPostalcode,
  };
  const arrayAddresses: BaseAddress[] = [billingAddress, shippingAddress].filter((obj) =>
    Object.values(obj).every((value) => value !== undefined),
  );

  const customerDraft: MyCustomerDraft = {
    firstName: object.name,
    lastName: object.lastName,
    email: object.email,
    password: object.password,
    dateOfBirth: new Date(object.date).toISOString().split('T')[0],
    addresses: arrayAddresses,
    defaultShippingAddress: arrayAddresses.indexOf(shippingAddress),
    defaultBillingAddress: arrayAddresses.indexOf(billingAddress),
  };
  return Object.fromEntries(Object.entries(customerDraft).filter(([_, value]) => value !== -1)) as MyCustomerDraft ;
};


export const singUp = async (object: Record<string, string>): Promise<void> => {
  try {

    const response: ClientResponse<CustomerSignInResult> = await createCustomer(createdCustomer(object));
    console.log(response.body?.customer)
  }catch (error: Error | any) {
    checkingError(error);
  }
};

export default createCustomer;