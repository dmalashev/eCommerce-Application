import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import { Flex, Typography } from 'antd';
import { User } from '../../../types/types';
type Properties = {
  user: User | undefined;
};
export const PersonalInfo = ({ user }: Properties) => {
  return (
    <>
      <Flex vertical>
        <Flex justify="start" align="center" gap={10} style={{ marginBottom: '10px' }}>
          <Typography.Title level={4} style={{ margin: 0, color: '#DB4444' }}>
            personal information
          </Typography.Title>
          <UserOutlined style={{ width: '30px', height: '20px', fontSize: '20px', color: '#DB4444' }} />
        </Flex>
        <Typography.Text style={{ fontSize: '16px' }}>{`${user?.firstName} ${user?.lastName}`}</Typography.Text>
        <Typography.Text type="secondary">{user?.email}</Typography.Text>
        <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
          {user?.dateOfBirth}
        </Typography.Text>
      </Flex>
    </>
  );
};
