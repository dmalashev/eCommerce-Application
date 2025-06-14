import { useParams, useNavigate } from 'react-router';
import { getProductByKey } from '../../api/product/get-product-by-key';
import { Product } from '@commercetools/platform-sdk';
import { JSX, useEffect, useState } from 'react';
import { Typography, Image, Descriptions, Table } from 'antd';
import type { DescriptionsProps, TableProps } from 'antd';
import { PageRoutes } from '../../types/enums';
import './product.css';

const { Title, Text } = Typography;

type TrackType = {
  key: number;
  count: number;
  track: string;
};

export default function ProductPage() {
  const { productId } = useParams();
  const [productObject, setProductObject] = useState<Product>();
  const navigate = useNavigate();

  const productKey: string = productId || '';

  useEffect(() => {
    getProductByKey(productKey)
      .then((productObject) => {
        setProductObject(productObject);
      })
      .catch(() => {
        navigate(PageRoutes.NOT_FOUND);
      });
  });

  const name: string = productObject?.masterData.current.name.en || 'No Name';

  const artist: string =
    productObject?.masterData.current.masterVariant.attributes?.find((attribute) => attribute.name === 'artist')
      ?.value || 'No Artist';

  const genres: string =
    productObject?.masterData.current.masterVariant.attributes
      ?.find((attribute) => attribute.name === 'genre')
      ?.value.map((item: { key: string; label: string }) => item.label)
      .join(', ') || 'No Genres';

  const country: string =
    productObject?.masterData.current.masterVariant.attributes?.find((attribute) => attribute.name === 'country')?.value
      .en || 'No Country';

  const year: string =
    productObject?.masterData.current.masterVariant.attributes
      ?.find((attribute) => attribute.name === 'release_year')
      ?.value.split('-')[0] || 'No Year';

  const label: string =
    productObject?.masterData.current.masterVariant.attributes?.find((attribute) => attribute.name === 'record_label')
      ?.value || 'No Label';

  const formats: string =
    productObject?.masterData.current.masterVariant.attributes
      ?.find((attribute) => attribute.name === 'format')
      ?.value.map((item: { en: string; ru: string }) => item.en)
      .join(', ') || 'No Formats';

  const images: JSX.Element[] | undefined = productObject?.masterData.current.masterVariant.images?.map((imageItem) => (
    <Image src={imageItem.url} />
  ));

  const description: string = productObject?.masterData.current.description?.en || 'No Description';

  const tracklist: TrackType[] = productObject?.masterData.current.masterVariant.attributes
    ?.find((attribute) => attribute.name === 'tracklist')
    ?.value.map((track: string, index: number) => ({
      key: index,
      count: index + 1,
      track: track,
    }));
  // const discount = productObject?.masterData.current.masterVariant.price?.discounted?.value.centAmount,
  const price: string =
    '$' +
      productObject?.masterData?.current?.masterVariant?.prices?.find((price) => price?.country === 'US')?.value
        ?.centAmount /
        100 || 'No Price';

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

  return (
    <div className="product-container">
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
        <Title level={4}>{price}</Title>
      </div>
      <div>
        <Table<TrackType> columns={columns} dataSource={tracklist} pagination={false} />
      </div>
    </div>
  );
}
