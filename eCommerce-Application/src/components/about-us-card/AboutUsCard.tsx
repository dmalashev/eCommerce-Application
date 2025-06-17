import { Flex, Typography } from 'antd';

type AboutUsCard = {
  photo: string;
  name: string;
  description: string;
};

const { Title, Text } = Typography;

export default function AboutUsCard({ photo, name, description }: AboutUsCard) {
  return (
    <Flex>
      <img alt="photo" src={photo} />
      <Flex>
        <Title level={2}>{name}</Title>
        <Text>{description}</Text>
      </Flex>
    </Flex>
  );
}
