import { Address, AddressesProfile, User } from '../types/types';

export const parseAddressesToArray = ({
  addresses,
  shippingAddressIds,
  billingAddressIds,
  defaultShippingAddressId,
  defaultBillingAddressId,
}: User): AddressesProfile[] => {
  const addressesProfile = new Array<AddressesProfile>();

  const shippingAddressesProfile = getSpecificAddressesProfile(
    addresses,
    shippingAddressIds || [],
    defaultShippingAddressId || '',
  );
  const billingAddressesProfile = getSpecificAddressesProfile(
    addresses,
    billingAddressIds || [],
    defaultBillingAddressId || '',
  );

  addressesProfile.push(shippingAddressesProfile, billingAddressesProfile);
  return addressesProfile;
};

const getSpecificAddressesProfile = (addresses: Address[], addressIds: string[], defaultAddressId: string) => {
  const specificAddresses: AddressesProfile = {
    addresses: new Array<string>(),
    defaultId: -1,
  };
  const addressesString = new Array<string>();
  const defaultAddress = addresses.find((item) => item.id === defaultAddressId);
  if (defaultAddress) {
    addressesString.push(convertAddressToString(defaultAddress));
    specificAddresses.defaultId = 0;
  }
  if (addressIds) {
    for (const id of addressIds) {
      for (const address of addresses) {
        if (id === address.id && address.id != defaultAddress?.id) {
          addressesString.push(convertAddressToString(address));
        }
      }
    }
  }

  specificAddresses.addresses = addressesString;
  return specificAddresses;
};

const convertAddressToString = (address: Address) => {
  return `${address.country}, ${address.city}, ${address.streetName}, ${address.postalCode}`;
};
