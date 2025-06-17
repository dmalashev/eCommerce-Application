import { Flex, Typography, Space, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './about-us-card.css';

type AboutUsCard = {
  photo: string;
  name: string;
  description: string;
  contribution: string[];
  githubName: string;
  githubLink: string;
};

const { Title, Text } = Typography;

export default function AboutUsCard({ photo, name, description, contribution, githubName, githubLink }: AboutUsCard) {
  const contributionItems = contribution.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="about-us-card-container">
      <div className="about-us-photo-container">
        <img alt="photo" src={photo} width="500" />
      </div>

      <div className="about-us-card-description-container">
        <Space>
          <Title level={2}>{name}</Title>
          <Button type="text" icon={<GithubOutlined />} href={githubLink} target="_blank" size="large">
            {githubName}
          </Button>
        </Space>
        <Text>{description}</Text>
        <ul>{contributionItems}</ul>
      </div>
    </div>
  );
}
