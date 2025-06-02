import { List, Typography } from 'antd';

type Properties = {
  title: string;
  addresses: string[];
  defaultAddressIndex: number;
};

export const AddressesCard = ({ title, addresses, defaultAddressIndex }: Properties) => {
  return (
    <>
      <Typography.Text strong style={{ fontSize: '16px' }}>
        {title}
      </Typography.Text>
      <List
        itemLayout="horizontal"
        dataSource={addresses}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta description={item} />
          </List.Item>
        )}
      />
    </>
  );
};
