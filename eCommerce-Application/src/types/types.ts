import { MyCustomerDraft } from '@commercetools/platform-sdk';

export type FieldType = {
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  date?: Date;
  shippingStreet?: string;
  shippingCity?: string;
  shippingCountry?: string;
  shippingPostalcode?: string;
  billingStreet?: string;
  billingCity?: string;
  billingCountry?: string;
  billingPostalcode?: string;
  defaultShippingAddressChecker?: boolean;
  defaultBillingAddressChecker?: boolean;
  theSameShippingBillingAddressChecker?: boolean;
};

export type PostalCodeFormat = {
  pattern: RegExp;
  message: string;
};

export type Address = {
  id: string | undefined;
  streetName: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
  country: string | undefined;
};

export type User = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string;
  dateOfBirth: string | undefined;
  addresses: Address[];
  defaultShippingAddressId: string | undefined;
  deffaultBillingAddressId: string | undefined;
  billingAddressIds: string[] | undefined;
  shippingAddressIds: string[] | undefined;
};

export type SessionState = {
  user: User | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  setUser: (user: User) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
};

export interface MyCustomerDraftExtended extends MyCustomerDraft {
  shippingAddresses?: Array<number>;
  billingAddresses?: Array<number>;
}
