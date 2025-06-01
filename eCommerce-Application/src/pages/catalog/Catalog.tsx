import { useEffect, useState } from 'react';
import { dataProducts } from '../../api/product/getProduct';
import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex, Segmented } from 'antd';
import { cards } from '../../assets/temporary/cards'; // TODO: replace card objects with corresponding obj from API
import { MediaTypes } from '../../types/enums';
import { JSX } from 'react';

const { Content } = Layout;

export default function Catalog(): JSX.Element {
  const tabsContent: {
    imagePath: string;
    tabName: MediaTypes;
  }[] = [
    {
      imagePath: './src/assets/images/vinyl.png',
      tabName: MediaTypes.VINYL,
    },
    {
      imagePath: './src/assets/images/cassette.png',
      tabName: MediaTypes.CASSETTES,
    },
    {
      imagePath: './src/assets/images/cd.png',
      tabName: MediaTypes.CD,
    },
  ];

  const tabOptions: {
    label: JSX.Element;
    value: MediaTypes;
  }[] = tabsContent.map((tab) => ({
    label: (
      <Flex vertical align="center" style={{ paddingTop: 8 }}>
        <Flex justify="center" align="center" style={{ width: 50, height: 50 }}>
          <img src={tab.imagePath} width="50px" />
        </Flex>
        <div>{tab.tabName}</div>
      </Flex>
    ),
    value: tab.tabName,
  }));

  const cardComponents: JSX.Element[] = cards.map((card) => <ProductCard content={card} />);

  return (
    <Layout>
      <Content style={{ padding: 24 }}>
        <Flex vertical align="stretch" gap="40px">
          <Segmented block options={tabOptions} />
          <Flex gap="large" wrap justify="center">
            {cardComponents}
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
}
