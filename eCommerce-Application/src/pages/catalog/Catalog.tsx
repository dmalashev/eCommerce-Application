import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex, Segmented, Button, Modal, Form } from 'antd';
import { cards } from '../../assets/temporary/cards'; // TODO: replace card objects with corresponding obj from API
import { MediaTypes } from '../../types/enums';
import { JSX } from 'react';
import SortForm from '../../components/sort-form/SortForm';
import { BarsOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './catalog.css';

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

  const cardComponents: JSX.Element[] = cards.map((card) => <ProductCard content={card} />);

  const onChangeTab = (value: MediaTypes): void => {
    console.log(value); // TODO: replace this instruction with code that gets corresponding collections of cards
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
        <SortForm form={form} />
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
            <SortForm form={form} closeModal={closeModal} />
          </Modal>
          <Flex gap="large" wrap justify="center">
            {cardComponents}
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
}
