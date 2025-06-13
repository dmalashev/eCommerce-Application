import { Client, ClientResponse } from '@commercetools/ts-client';
import { projectKey, client as clientBuilder, httpMiddleware, authMiddleware } from '../client/client';
import {
  ApiRoot,
  BaseAddress,
  createApiBuilderFromCtpClient,
  CustomerSignInResult,
  MyCustomerDraft,
} from '@commercetools/platform-sdk';
import { login } from './autorizate-customer';
import { MyCustomerDraftExtended } from '../../types/types';

export async function signUp(object: Record<string, string>): Promise<ClientResponse<CustomerSignInResult>> {
  const customer: MyCustomerDraft = createdCustomer(object);
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

  await login(customer);

  return response;
}

export const createdCustomer = (object: Record<string, string>): MyCustomerDraft => {
  const countryMap: Record<string, string> = {
    Russia: 'RU',
    Germany: 'DE',
    France: 'FR',
    Ukraine: 'UA',
    USA: 'US',
  };

  const shippingAddress: BaseAddress = {
    city: object?.shippingCity,
    country: countryMap[object?.shippingCountry],
    firstName: object?.name,
    lastName: object?.lastName,
    streetName: object?.shippingStreet,
    postalCode: object?.shippingPostalcode,
  };

  const billingAddress: BaseAddress = object?.theSameShippingBillingAddressChecker
    ? shippingAddress
    : {
        city: object?.billingCity,
        country: countryMap[object?.billingCountry],
        firstName: object?.name,
        lastName: object?.lastName,
        streetName: object?.billingStreet,
        postalCode: object?.billingPostalcode,
      };

  const arrayAddresses: BaseAddress[] = [shippingAddress];
  if (!object?.theSameShippingBillingAddressChecker) {
    arrayAddresses.push(billingAddress);
  }

  arrayAddresses.filter((object_) => Object.values(object_).every((value) => value !== undefined));

  const customerDraft: MyCustomerDraftExtended = {
    firstName: object.name,
    lastName: object.lastName,
    email: object.email,
    password: object.password,
    dateOfBirth: new Date(object.date).toLocaleDateString('sv-SE'),
    addresses: arrayAddresses,
    shippingAddresses: [arrayAddresses.indexOf(shippingAddress)],
    billingAddresses: [arrayAddresses.indexOf(billingAddress)],
    ...(object?.defaultShippingAddressChecker && { defaultShippingAddress: arrayAddresses.indexOf(shippingAddress) }),
    ...((object?.defaultBillingAddressChecker ||
      (object?.defaultShippingAddressChecker && object?.theSameShippingBillingAddressChecker)) && {
      defaultBillingAddress: arrayAddresses.indexOf(billingAddress),
    }),
  };

  return Object.fromEntries(
    Object.entries(customerDraft).filter((entry) => entry[1] !== -1),
  ) as MyCustomerDraftExtended;
};
