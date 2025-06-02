import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex, Segmented } from 'antd';
import { cards } from '../../assets/temporary/cards'; // TODO: replace card objects with corresponding obj from API
import { MediaTypes } from '../../types/enums';
import { JSX } from 'react';
import SortForm from '../../components/sort-form/SortForm';

const { Content, Sider } = Layout;

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

  const onChangeTab = (value: MediaTypes): void => {
    console.log(value); // TODO: replace this instruction with code that gets corresponding collections of cards
  };

  return (
    <Layout>
      <Sider
        theme="light"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          bottom: 0,
          scrollbarWidth: 'thin',
          scrollbarGutter: 'stable',
        }}
      >
        <SortForm />
      </Sider>
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
