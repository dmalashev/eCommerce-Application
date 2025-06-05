import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex, Segmented, Button, Modal, Form } from 'antd';
import { MediaTypes } from '../../types/enums';
import { JSX, useEffect } from 'react';
import FilterForm from '../../components/filter-form/FilterForm';
import { BarsOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './catalog.css';
import { getProductsWithCategories } from '../../api/product/getProductWithCategory';
import { ProductProjection } from '@commercetools/platform-sdk';

const { Content, Sider } = Layout;

export default function Catalog(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

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

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
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
        className="sidebar"
      >
        <FilterForm form={form} />
      </Sider>
      <Content style={{ padding: 24 }}>
        <Flex vertical align="stretch" gap="40px">
          <Segmented block options={tabOptions} onChange={onChangeTab} />
          <Button type="primary" icon={<BarsOutlined />} onClick={showModal} className="filters-button">
            Filters
          </Button>
          {/* eslint-disable-next-line unicorn/no-null */}
          <Modal open={isModalOpen} onCancel={closeModal} footer={null}>
            {/* There must be the "null" value for the "footer" property, not "undefined" */}
            <FilterForm form={form} closeModal={closeModal} />
          </Modal>
          <Flex gap="large" wrap justify="center">
            {cardComponents}
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
}
