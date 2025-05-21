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

export interface MyCustomerDraftExtended extends MyCustomerDraft {
  shippingAddresses?: Array<number>;
  billingAddresses?: Array<number>;
}
