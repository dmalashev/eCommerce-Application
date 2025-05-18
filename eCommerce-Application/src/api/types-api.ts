import { ClientResponse, CustomerSignInResult } from '@commercetools/platform-sdk';
import { TokenStore } from '@commercetools/ts-client';

export enum ErrorsName {
  BadRequest = 'BadRequest',
}
export enum BadRequest {
  InvalidCustomerAccountCredentials = 'invalid_customer_account_credentials',
  DuplicateField = 'DuplicateField',
  General = 'General',
  InvalidOperation = 'InvalidOperation',
  InvalidJsonInput = 'InvalidJsonInput',
}

export type HttpError = {
  body: any;
  code?: string;
  error?: { code: string; message: string }[];
  message: string;
  name: string;
  statusCode: number;
};
export type LoginRequest = Promise<{
  customer: ClientResponse<CustomerSignInResult>;
  token: TokenStore;
}>;
