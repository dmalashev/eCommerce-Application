import { useEffect, useState } from 'react';
import {  dataProducts } from '../../api/product/getProduct';
import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex, Segmented } from 'antd';
import { MediaTypes } from '../../types/enums';
import { JSX, useEffect, useState } from 'react';
import { getProductsWithCategories } from '../../api/product/getProductWithCategory';
import { ProductProjection } from '@commercetools/platform-sdk';

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
  const [cards, setCards] = useState<ProductProjection[]>([]);
  const [activeTab, setActiveTab] = useState<MediaTypes>(MediaTypes.VINYL);
  useEffect(() => {
    getProductsWithCategories(activeTab).then(setCards);
  }, [activeTab]);

  const cardComponents = cards.map((card) => <ProductCard key={card.id} content={card} />);

  const onChangeTab = (value: MediaTypes): void => {
    setActiveTab(value);
  };

  return (
    <Layout>
      <Content style={{ padding: 24 }}>
        <Flex vertical align="stretch" gap="40px">
          <Segmented block options={tabOptions} onChange={onChangeTab} />
          <Flex gap="large" wrap justify="center">
            {cardComponents}
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
}
