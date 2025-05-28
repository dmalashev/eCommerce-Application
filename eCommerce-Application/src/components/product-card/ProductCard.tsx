import { Card, Typography, Row, Space } from 'antd';
import { ContentObject } from '../../assets/temporary/temporary';

const { Title, Text, Link } = Typography;

export default function ProductCard({ content }: { content: ContentObject }) {
  return (
    <Link href="/">
      <Card hoverable style={{ width: 300 }} cover={<img src={content.cover} alt="cover" />}>
        <Row>
          <Title level={4} ellipsis style={{ marginTop: 0 }} title={content.name}>
            {content.name}
          </Title>
        </Row>
        <Row>
          <Text ellipsis>{content.author}</Text>
        </Row>
        <Row>
          <Text type="secondary">{content.year}</Text>
        </Row>
        <Row style={{ justifySelf: 'end' }}>
          <Space size="small">
            <Text
              strong
              delete={!!content.discount}
              disabled={!!content.discount}
              style={{ fontSize: 20 }}
            >{`$${content.price}`}</Text>
            {content.discount ? (
              <Text
                strong
                style={{ fontSize: 20, color: '#db4444' }}
              >{`$${(content.price * (1 - content.discount)).toFixed(2)}`}</Text> // logic of calculating a new price can be changed. This exp is only for demo purpose
            ) : undefined}
          </Space>
        </Row>
      </Card>
    </Link>
  );
}
