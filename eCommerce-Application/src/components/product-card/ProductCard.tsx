import { ProductProjection } from '@commercetools/platform-sdk';
import { Card, Typography, Row, Space } from 'antd';
import { ContentObject } from '../../assets/temporary/temporary';
import { addItemToCart } from '../../api/Cart/add';
import { createAnonymousCustomer } from '../../api/customer/anonymous-customer';

const { Title, Text, Link } = Typography;

export default function ProductCard({ content }: { content: ProductProjection }) {
  const card: ContentObject = {
    name: content.name.en,
    author: content.masterVariant.attributes?.find((attribute) => attribute.name === 'artist')?.value,
    year: content.masterVariant.attributes?.find((attribute) => attribute.name === 'year')?.value,
    cover: content.masterVariant.images?.[0].url || '',
    discount: content.masterVariant.price?.discounted?.value.centAmount,
    price: content.masterVariant.price?.value?.centAmount || 0,
  };

  const click = () => addItemToCart(content, 1);

  return (
    <Link href="#" onClick={click}>
      <Card hoverable style={{ width: 300 }} cover={<img src={card.cover} alt="cover" />}>
        <Row>
          <Title level={4} ellipsis style={{ marginTop: 0 }} title={card.name}>
            {card.name}
          </Title>
        </Row>
        <Row>
          <Text ellipsis>{card.author}</Text>
        </Row>
        <Row>
          <Text type="secondary">{card.year}</Text>
        </Row>
        <Row style={{ justifySelf: 'end' }}>
          <Space size="small">
            <Text strong style={{ fontSize: 20 }}>{`$${card.price! / 100}`}</Text>
            {card.discount ? (
              <Text strong style={{ fontSize: 20, color: '#db4444' }}>
                ${card.discount! / 100}
              </Text> // logic of calculating a new price can be changed. This exp is only for demo purpose
            ) : undefined}
          </Space>
        </Row>
      </Card>
    </Link>
  );
}
