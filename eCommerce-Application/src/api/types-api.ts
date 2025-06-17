import { ProductData, ProductProjection } from '@commercetools/platform-sdk';

export type DataProduct = {
  id: string;
  current: ProductData;
};
export type PaginationResponse = {
  results: ProductProjection[];
  page: number;
  totalPages: number;
};