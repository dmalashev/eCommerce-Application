import { List, Typography } from 'antd';
import { AddressesCardProperties } from '../../../../types/types';

export const AddressesCard = ({ title, addresses, defaultAddressIndex }: AddressesCardProperties) => {
  return (
    <>
      <Typography.Text strong style={{ fontSize: '16px' }}>
        {title}
      </Typography.Text>
      <List
        itemLayout="horizontal"
        dataSource={addresses}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta description={item} />
            {defaultAddressIndex === index && <p>default</p>}
          </List.Item>
        )}
      />
    </>
  );
};
