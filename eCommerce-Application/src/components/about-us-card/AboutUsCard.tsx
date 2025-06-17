import { Flex, Typography } from 'antd';
import './about-us-card.css';

type AboutUsCard = {
  photo: string;
  name: string;
  description: string;
  contribution: string[];
};

const { Title, Text } = Typography;

export default function AboutUsCard({ photo, name, description, contribution }: AboutUsCard) {
  const contributionItems = contribution.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="about-us-card-container">
      <div className="about-us-photo-container">
        <img alt="photo" src={photo} width="500" />
      </div>

      <div className="about-us-card-description-container">
        <Title level={2}>{name}</Title>
        <Text>{description}</Text>
        <ul>{contributionItems}</ul>
      </div>
    </div>
  );
}
