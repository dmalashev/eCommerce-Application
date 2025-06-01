import { useEffect, useState } from 'react';
import { dataProducts } from '../../api/product/getProduct';
import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex, Segmented } from 'antd';
import { cards } from '../../assets/temporary/cards'; // TODO: replace card objects with corresponding obj from API
import { MediaTypes } from '../../types/enums';
import { JSX } from 'react';

const { Content } = Layout;

export default function Catalog(): JSX.Element {
  const tabOptions: MediaTypes[] = [MediaTypes.VINYL, MediaTypes.CASSETTES, MediaTypes.CD];
  const cardComponents: JSX.Element[] = cards.map((card) => <ProductCard content={card} />);

  return (
    <Layout>
      <Content style={{ padding: 24 }}>
        <Flex vertical align="stretch" gap="40px">
          <Segmented block options={tabOptions} size="large" style={{ fontWeight: 'bold' }} />
          <Flex gap="large" wrap justify="center">
            {cardComponents}
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
}
