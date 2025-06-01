import ProfileOutlined from '@ant-design/icons/lib/icons/ProfileOutlined';
import { Flex, Typography } from 'antd';

export const PersonalInfo = () => {
  return (
    <>
      <Flex vertical>
        <Flex justify="start" align="center" gap={10} style={{ marginBottom: '10px' }}>
          <Typography.Title level={5} style={{ margin: 0, color: '#DB4444' }}>
            personal information
          </Typography.Title>
          <ProfileOutlined style={{ width: '30px', height: '20px', fontSize: '20px', color: '#DB4444' }} />
        </Flex>
        <Typography.Text strong>Shakhri Ramaldanova</Typography.Text>
        <Typography.Text type="secondary">ramaldanova_sh@mail.ru</Typography.Text>
        <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
          07.10.1992
        </Typography.Text>
      </Flex>
    </>
  );
};
