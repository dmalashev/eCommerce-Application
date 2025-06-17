import { ClientResponse, ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot, projectKey } from '../client/client';
import { PaginationResponse } from '../types-api';

export async function paginateProducts(page: number, size: number): Promise<PaginationResponse | []> {
  const offset: number = (page - 1) * size;

  const queryArgs: any = {
    limit: size.toString(),
    offset: offset.toString(),
    withTotal: 'true',
    sort: ['createdAt desc'],
  };

  const responseResults: ClientResponse<ProductProjectionPagedQueryResponse> = await apiRoot
    .withProjectKey({ projectKey })
    .productProjections()
    .get({ queryArgs })
    .execute();
  if (!responseResults.body.results) return [];

  const { results, total } = responseResults.body;

  const totalPages: number = Math.ceil(total! / size);

  return {
    results,
    page,
    totalPages,
  };
}
