export enum ErrorsName {
  BadRequest = 'BadRequest',
}
export enum BadRequest {
  InvalidCustomerAccountCredentials = 'InvalidCustomerAccountCredentials',
}

export type CommercetoolsError = {
  code?: string;
  error?: { code: string; message: string }[];
  message: string;
  name: string;
  statusCode: number;
};
type LoginRequest = Promise<{
  customer: ClientResponse<CustomerSignInResult>;
  token: TokenStore;
}>;
