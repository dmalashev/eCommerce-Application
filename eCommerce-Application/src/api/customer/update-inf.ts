import { apiRootCustomer, projectKey } from '../client/client';
import { MyCustomerUpdateAction } from '@commercetools/platform-sdk';

type optionForUpdate = {
  email: 'setEmail';
  firstName: 'setFirstName';
  dateOfBirth: 'setDateOfBirth';
  lastName: 'setLastName';
};

export async function updateCustomerInfo(parameters: optionForUpdate): Promise<void> {
  const { email, firstName, dateOfBirth, lastName } = parameters;

  const customer = await apiRootCustomer.withProjectKey({ projectKey }).me().get().execute();

  const actions: MyCustomerUpdateAction[] = [
    { action: 'setFirstName', firstName: firstName },
    { action: 'setLastName', lastName: lastName },
    { action: 'setDateOfBirth', dateOfBirth: dateOfBirth },
    { action: 'changeEmail', email: email },
  ];
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
