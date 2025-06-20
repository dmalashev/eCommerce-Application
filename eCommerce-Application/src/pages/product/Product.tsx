import { useParams, useNavigate } from 'react-router';
import { getProductByKey } from '../../api/product/get-product-by-key';
import { ProductProjection } from '@commercetools/platform-sdk';
import { JSX, useEffect, useState } from 'react';
import { Typography, Image, Descriptions, Table, Space, Button, message, Flex } from 'antd';
import type { DescriptionsProps, TableProps } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';
import { PageRoutes } from '../../types/enums';
import { useAuth } from '../../hooks/hooks';
import { addItemToCart } from '../../api/Cart/add';
import { removedProduct } from '../../api/Cart/remove';
import './product.css';

const { Title, Text } = Typography;

type TrackType = {
  key: number;
  count: number;
  track: string;
};

export default function ProductPage() {
  const { productId } = useParams();
  const [productObject, setProductObject] = useState<ProductProjection>();
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [isRemoveLoading, setIsRemoveLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const [messageApi, contextHolder] = message.useMessage();

  const productKey: string = productId || '';

  useEffect(() => {
    getProductByKey(productKey)
      .then((productObject) => {
        setProductObject(productObject);
      })
      .catch(() => {
        navigate(PageRoutes.NOT_FOUND);
      });
  }, []);

  const name: string = productObject?.name.en || 'No Name';

  const artist: string =
    productObject?.masterVariant.attributes?.find((attribute) => attribute.name === 'artist')?.value || 'No Artist';

  const genres: string =
    productObject?.masterVariant.attributes
      ?.find((attribute) => attribute.name === 'genre')
      ?.value.map((item: { key: string; label: string }) => item.label)
      .join(', ') || 'No Genres';

  const country: string =
    productObject?.masterVariant.attributes?.find((attribute) => attribute.name === 'country')?.value.en ||
    'No Country';

  const year: string =
    productObject?.masterVariant.attributes
      ?.find((attribute) => attribute.name === 'release_year')
      ?.value.split('-')[0] || 'No Year';

  const label: string =
    productObject?.masterVariant.attributes?.find((attribute) => attribute.name === 'record_label')?.value ||
    'No Label';

  const formats: string =
    productObject?.masterVariant.attributes
      ?.find((attribute) => attribute.name === 'format')
      ?.value.map((item: { en: string; ru: string }) => item.en)
      .join(', ') || 'No Formats';

  const images: JSX.Element[] | undefined = productObject?.masterVariant.images?.map((imageItem, index) => (
    <Image key={index} src={imageItem.url} />
  ));

  const description: string = productObject?.description?.en || 'No Description';

  const tracklist: TrackType[] = productObject?.masterVariant.attributes
    ?.find((attribute) => attribute.name === 'tracklist')
    ?.value.map((track: string, index: number) => ({
      key: index,
      count: index + 1,
      track: track,
    }));

  let price: number | string =
    productObject?.masterVariant.prices?.find((price) => price?.country === 'US')?.value.centAmount || 'No Price';

  if (typeof price === 'number') {
    price = `$${price / 100}`;
  }

  const discount: number | undefined = productObject?.masterVariant.prices?.find((price) => price?.country === 'US')
    ?.discounted?.value.centAmount;

  const items: DescriptionsProps['items'] = [
    {
      label: 'Genres',
      span: 'filled',
      children: genres,
    },
    {
      label: 'Country',
      span: 'filled',
      children: country,
    },
    {
      label: 'Year',
      span: 'filled',
      children: year,
    },
    {
      label: 'Label',
      span: 'filled',
      children: label,
    },
    {
      label: 'Available Formats',
      span: 'filled',
      children: formats,
    },
  ];

  const columns: TableProps<TrackType>['columns'] = [
    {
      title: '№',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Track',
      dataIndex: 'track',
      key: 'track',
    },
  ];

  const success = (message: string): void => {
    messageApi.open({
      type: 'success',
      content: message,
    });
  };

  const error = (message: string): void => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  return (
    <div className="product-container">
      {contextHolder}
      <div className="product-title">
        <Title level={2}>{name}</Title>
        <Title level={3}>{artist}</Title>
      </div>
      <div className="product-image">
        <Image.PreviewGroup>{images}</Image.PreviewGroup>
      </div>
      <div className="product-description">
        <div>
          <Descriptions bordered size="small" items={items} />
          <Text>{description}</Text>
        </div>
        <Space size="small">
          <Text strong delete={!!discount} style={{ fontSize: 20 }}>{`${price}`}</Text>
          {discount ? (
            <Text strong style={{ fontSize: 20, color: '#db4444' }}>
              ${discount / 100}
            </Text>
          ) : undefined}
        </Space>
        <Flex gap="small">
          <Button
            type="primary"
            shape="round"
            icon={<ShoppingCartOutlined />}
            size="large"
            block
            loading={isAddLoading}
            disabled={!!auth.itemsInCart.some((item) => item.productKey === productObject?.key)}
            className="product-add-button"
            onClick={() => {
              setIsAddLoading(true);

              addItemToCart(productObject!, 1)
                .then((items) => {
                  setIsAddLoading(false);

                  if (items) {
                    auth.setItemsInCart(items);
                  } else {
                    auth.setItemsInCart([]);
                  }
                })
                .catch(() => {
                  setIsAddLoading(false);
                  error('Failed to add a product');
                });
            }}
          >
            Add to Cart
          </Button>
          {auth.itemsInCart.some((item) => item.productKey === productObject?.key) ? (
            <Button
              icon={<DeleteOutlined style={{ fontSize: '18px' }} />}
              shape="circle"
              size="large"
              loading={isRemoveLoading}
              onClick={async () => {
                setIsRemoveLoading(true);

                removedProduct(productObject!.id)
                  .then((result) => {
                    setIsRemoveLoading(false);
                    success('Product has been removed');

                    const items = result?.lineItems;
                    if (items) {
                      auth.setItemsInCart(items);
                    } else {
                      auth.setItemsInCart([]);
                    }
                  })
                  .catch(() => {
                    setIsRemoveLoading(false);
                    error('Product has not been removed');
                  });
              }}
            />
          ) : undefined}
        </Flex>
      </div>
      <div>
        <Table<TrackType> columns={columns} dataSource={tracklist} pagination={false} />
      </div>
    </div>
  );
}
