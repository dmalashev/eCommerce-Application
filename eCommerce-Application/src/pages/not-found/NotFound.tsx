import { FrownOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';
import { useNavigate } from 'react-router';
import { PageRoutes } from '../../types/enums';

const { Title, Text } = Typography;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Flex vertical justify="center" align="center" gap="middle">
      <Title level={2}>
        404 <FrownOutlined />
      </Title>
      <Text>This page doesn't exist</Text>
      <Button type="primary" onClick={() => navigate(PageRoutes.MAIN)}>
        Back to home page
      </Button>
    </Flex>
  );
}
