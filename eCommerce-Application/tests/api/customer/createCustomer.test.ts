import { describe, it, expect } from 'vitest';
import { createdCustomer } from '../.././../src/api/customer/create-customer';
import { MyCustomerDraft } from '@commercetools/platform-sdk';

describe('createdCustomer', () => {
  const baseObject = {
    name: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: '123456',
    date: '1990-01-01',
    shippingCity: 'Berlin',
    shippingCountry: 'Germany',
    shippingStreet: 'Main St',
    shippingPostalcode: '12345',
  };

  it('should return correct customer with same shipping and billing', () => {
    const input = {
      ...baseObject,
      theSameShippingBillingAddressChecker: 'true',
      defaultShippingAddressChecker: 'true',
      defaultBillingAddressChecker: 'true',
    };

    const result: MyCustomerDraft = createdCustomer(input);

    expect(result.addresses).toHaveLength(1);
    expect(result.defaultShippingAddress).toBe(0);
    expect(result.defaultBillingAddress).toBe(0);
  });

  it('should return customer with separate billing address', () => {
    const input = {
      ...baseObject,
      theSameShippingBillingAddressChecker: '',
      billingCity: 'Munich',
      billingCountry: 'Germany',
      billingStreet: 'Billing St',
      billingPostalcode: '54321',
      defaultBillingAddressChecker: 'true',
    };

    const result: MyCustomerDraft = createdCustomer(input);

    expect(result.addresses).toHaveLength(2);
    expect(result.addresses?.[1].city).toBe('Munich');
    expect(result.defaultBillingAddress).toBe(1);
  });

  it('should not include defaultBillingAddress if not set', () => {
    const input = {
      ...baseObject,
      theSameShippingBillingAddressChecker: '',
      billingCity: 'Munich',
      billingCountry: 'Germany',
      billingStreet: 'Billing St',
      billingPostalcode: '54321',
    };

    const result: MyCustomerDraft = createdCustomer(input);

    expect(result.defaultBillingAddress).toBeUndefined();
  });

  it('should format date correctly', () => {
    const input = {
      ...baseObject,
      theSameShippingBillingAddressChecker: 'true',
    };

    const result: MyCustomerDraft = createdCustomer(input);

    expect(result.dateOfBirth).toBe('1990-01-01'); 
  });
});
