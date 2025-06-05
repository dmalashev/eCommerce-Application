import ProfileOutlined from '@ant-design/icons/lib/icons/ProfileOutlined';
import { Flex, Typography } from 'antd';
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
        <Flex justify="start" align="center" gap={10} style={{ marginBottom: '10px' }}>
          <Typography.Title level={4} style={{ margin: 0, color: '#DB4444' }}>
            addresses
          </Typography.Title>
          <ProfileOutlined
            style={{ width: '30px', height: '20px', fontSize: '20px', color: '#DB4444', marginRight: 100 }}
          />
        </Flex>
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
