import {
  apiRootAnonymous,
  apiRootCustomer,
  projectKey,

} from '../client/client';

export async function createAnonymousCustomer() {

  
  const response = await apiRootAnonymous.withProjectKey({ projectKey }).apiClients().get().execute();

  console.log(response  )

}
