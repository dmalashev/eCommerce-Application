import { FrownOutlined } from '@ant-design/icons';
import { Flex, Typography } from 'antd';

const { Title, Text } = Typography;

export default function NotFound() {
  return (
    <Flex vertical justify="center" align="center">
      <Title level={2}>
        404 <FrownOutlined />
      </Title>
      <Text>This page doesn't exist</Text>
    </Flex>
  );
}
