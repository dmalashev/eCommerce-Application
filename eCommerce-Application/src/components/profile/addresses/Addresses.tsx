import { Flex } from 'antd';
import { AddressesCard } from './addresses-card/AddressesCard';
import { parseAddressesToArray } from '../../../utils/parse-addresses-to-array';
import { AddressesProfile, AddressProperties } from '../../../types/types';

export const Addresses = ({ user }: AddressProperties) => {
  let [shippingAddressesProfile, billingAddressesProfile] = new Array<AddressesProfile>();
  if (user) {
    [shippingAddressesProfile, billingAddressesProfile] = parseAddressesToArray(user);
  }
  return (
    <div className="addresses">
      <Flex vertical>
        <AddressesCard
          title={'shipping addresses'}
          addresses={shippingAddressesProfile.addresses}
          defaultAddressIndex={shippingAddressesProfile.defaultId}
        />

        <AddressesCard
          title={'billing addresses'}
          addresses={billingAddressesProfile.addresses}
          defaultAddressIndex={billingAddressesProfile.defaultId}
        />
      </Flex>
    </div>
  );
};
