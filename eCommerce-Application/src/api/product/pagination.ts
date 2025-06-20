import { ClientResponse, ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot, projectKey } from '../client/client';
import { PaginationResponse } from '../types-api';

export async function paginateProducts(page: number, size: number): Promise<PaginationResponse | undefined> {
  const offset: number = (page - 1) * size;

  // const queryArguments = {
  //   limit: size.toString(),
  //   offset: offset.toString(),
  //   withTotal: 'true',
  //   sort: ['createdAt desc'],
  // };

  const responseResults: ClientResponse<ProductProjectionPagedQueryResponse> = await apiRoot
    .withProjectKey({ projectKey })
    .productProjections()
    .get({
      queryArgs: {
        limit: size,
        offset: offset,
        withTotal: true,
        sort: ['createdAt desc'],
      },
    })
    .execute();
  if (!responseResults.body.results) return undefined;

  const { results, total } = responseResults.body;

  const totalPages: number = Math.ceil(total! / size);

  return {
    results,
    page,
    totalPages,
  };
}
