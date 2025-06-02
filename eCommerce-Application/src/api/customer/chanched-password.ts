import { apiRootCustomer, projectKey } from '../client/client';

export async function changePassword(parameters: { currentPassword: string; newPassword: string }): Promise<void> {
  const { currentPassword, newPassword } = parameters;

  const customer = await apiRootCustomer.withProjectKey({ projectKey }).me().get().execute();

  await apiRootCustomer
    .withProjectKey({ projectKey })
    .me()
    .password()
    .post({ body: { version: customer.body.version, currentPassword, newPassword } })
    .execute();
}
