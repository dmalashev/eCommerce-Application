import { ProductProjection } from '@commercetools/platform-sdk';
import { Card, Typography, Row, Space, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ContentObject } from '../../assets/temporary/temporary';
import { addItemToCart } from '../../api/Cart/add';
import { useAuth } from '../../hooks/hooks';

const { Title, Text } = Typography;

export default function ProductCard({ content }: { content: ProductProjection }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const card: ContentObject = {
    name: content.name.en,
    author: content.masterVariant.attributes?.find((attribute) => attribute.name === 'artist')?.value,
    year: content.masterVariant.attributes?.find((attribute) => attribute.name === 'year')?.value,
    cover: content.masterVariant.images?.[0].url || '',
    discount: content.masterVariant.price?.discounted?.value.centAmount,
    price: content.masterVariant.price?.value?.centAmount || 0,
  };

  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img src={card.cover} alt="cover" />}
      onClick={() => navigate('/product/' + content.key)}
    >
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
            </Text>
          ) : undefined}
        </Space>
      </Row>
      <Row style={{ paddingTop: 10 }}>
        <Button
          type="primary"
          shape="round"
          block
          icon={<ShoppingCartOutlined />}
          size="large"
          loading={isLoading}
          disabled={!!auth.itemsInCart.some((item) => item.productKey === content.key)}
          onClick={(event) => {
            event.stopPropagation();
            setIsLoading(true);

            addItemToCart(content, 1)
              .then((items) => {
                setIsLoading(false);

                if (items) {
                  auth.setItemsInCart(items);
                } else {
                  auth.setItemsInCart([]);
                }
              })
              .catch(() => setIsLoading(false));
          }}
        >
          Add to Cart
        </Button>
      </Row>
    </Card>
  );
}
