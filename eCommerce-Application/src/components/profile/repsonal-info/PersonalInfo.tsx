import ProfileOutlined from '@ant-design/icons/lib/icons/ProfileOutlined';
import { Typography } from 'antd';

export const PersonalInfo = () => {
  return (
    <>
      <Typography.Title level={5} style={{ margin: 0, color: '#DB4444' }}>
        personal information
      </Typography.Title>
      <ProfileOutlined />
    </>
  );
};
