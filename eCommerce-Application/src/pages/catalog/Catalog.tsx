import { useEffect, useState } from 'react';
import { dataProducts } from '../../api/product/getProduct';
import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex } from 'antd';
import { cards } from '../../assets/temporary/cards'; // TODO: replace card objects with corresponding obj from API

const { Content } = Layout;

export default function Catalog() {
  const cardComponents = cards.map((card) => <ProductCard content={card} />);

  return (
    <Layout>
      <Content style={{ padding: 24 }}>
        <Flex gap="large" wrap justify="center">
          {cardComponents}
        </Flex>
      </Content>
    </Layout>
  );
}
