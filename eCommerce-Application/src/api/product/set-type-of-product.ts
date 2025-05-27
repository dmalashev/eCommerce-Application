import { createApiBuilderFromCtpClient,  ProductTypeDraft } from '@commercetools/platform-sdk';
import { authMiddleware, client as clientBuilder, httpMiddleware, projectKey } from '../client/client';

const typeVinylRecord: ProductTypeDraft = {
  name: 'Vinyl Record',
  description: 'Product type for vinyl records',
  key: 'vinyl-record',
  attributes: [
    {
      name: 'artist',
      label: { en: 'Artist' },
      isRequired: true,
      type: { name: 'text' },
    },
    {
      name: 'album',
      label: { en: 'Album Title' },
      isRequired: true,
      type: { name: 'text' },
    },
    {
      name: 'release_year',
      label: { en: 'Release Year' },
      isRequired: true,
      type: { name: 'number' },
    },
    {
      name: 'genre',
      label: { en: 'Genre' },
      isRequired: true,
      type: {
        name: 'enum',
        values: [
          { key: 'rock', label: 'Rock' },
          { key: 'jazz', label: 'Jazz' },
          { key: 'classical', label: 'Classical' },
        ],
      },
    },
    {
      name: 'record_label',
      label: { en: 'Record Label' },
      isRequired: true,
      type: { name: 'text' },
    },

  ],
};

export async function setProductType() {
  const client = clientBuilder
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddleware)
    .withHttpMiddleware(httpMiddleware)
    .build();
  const apiRoot = createApiBuilderFromCtpClient(client);
  const response = await apiRoot
    .withProjectKey({ projectKey })
    .productTypes().get()
    // .post({ body: typeVinylRecord })
    .execute();
  console.log(response.body)
}
setProductType()


