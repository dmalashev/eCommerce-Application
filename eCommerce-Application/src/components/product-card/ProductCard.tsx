import { Card, Typography, Row, Space } from 'antd';
import coverImg from '../../assets/temporary/David-bowie-lets-dance.jpg';

const { Title, Text } = Typography;

// TODO: replace card obj with corresponding obj from API
const card = {
  cover: coverImg,
  name: "Let's Dance",
  author: 'David Bowie',
  year: 1983,
  price: 14.99,
  discount: 0.3,
};

export default function ProductCard() {
  return (
    <Card hoverable style={{ width: 300 }} cover={<img src={card.cover} alt="cover" />}>
      <Row>
        <Title level={4} style={{ marginTop: 0 }}>
          {card.name}
        </Title>
      </Row>
      <Row>
        <Text>{card.author}</Text>
      </Row>
      <Row>
        <Text type="secondary">{card.year}</Text>
      </Row>
      <Row style={{ justifySelf: 'end' }}>
        <Space size="small">
          <Text
            strong
            delete={!!card.discount}
            disabled={!!card.discount}
            style={{ fontSize: 20 }}
          >{`$${card.price}`}</Text>
          {card.discount ? (
            <Text
              strong
              style={{ fontSize: 20, color: '#db4444' }}
            >{`$${(card.price * (1 - card.discount)).toFixed(2)}`}</Text> // logic of calculating a new price can be changed. This exp is only for demo purpose
          ) : undefined}
        </Space>
      </Row>
    </Card>
  );
}
