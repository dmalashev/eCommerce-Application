import { apiRoot, projectKey } from "../client/client";



export async function getCategories(value:string) {

  const response = await apiRoot
    .withProjectKey({projectKey} )
    .categories()
     .withKey({ key: `cat-${value}` })
  .get()
    .execute();
  console.log(response.body);
  return response.body;

}
// { queryArgs: { where:`slug(en:"${value}")` , limit: 500} }