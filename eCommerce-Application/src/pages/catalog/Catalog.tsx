import ProductCard from '../../components/product-card/ProductCard';
import { Layout, Flex, Segmented, Button, Modal, Form, Pagination } from 'antd';
import { MediaTypes } from '../../types/enums';
import { JSX, useEffect } from 'react';
import FilterForm from '../../components/filter-form/FilterForm';
import { BarsOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './catalog.css';
// import { getProductsWithCategories } from '../../api/product/getProductWithCategory';
import { ProductProjection } from '@commercetools/platform-sdk';
import vinylImage from '../../assets/images/vinyl.png';
import cassetteImage from '../../assets/images/cassette.png';
import cdImage from '../../assets/images/cd.png';
import { paginateProducts } from '../../api/product/pagination';

const { Content, Sider } = Layout;

export default function Catalog(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const tabsContent: {
    imagePath: string;
    tabName: MediaTypes;
  }[] = [
    {
      imagePath: vinylImage,
      tabName: MediaTypes.VINYL,
    },
    {
      imagePath: cassetteImage,
      tabName: MediaTypes.CASSETTES,
    },
    {
      imagePath: cdImage,
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
    paginateProducts(1, 10).then((response) => {
      if (response) {
        setCards(response.results);
        setTotalPages(response.totalPages);
        setCurrentPage(1);
      }
    });
  }, [activeTab, totalPages]);

  const cardComponents = cards.map((card) => <ProductCard key={card.id} content={card} />);

  const onChangeTab = (value: MediaTypes): void => {
    setActiveTab(value);
    paginateProducts(1, 10).then((response) => {
      if (response) {
        setCards(response.results);
        setTotalPages(response.totalPages);
        setCurrentPage(1);
      }
    });
  };

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const onChange = (page: number): void => {
    paginateProducts(page, 10).then((response) => {
      if (response) {
        setCards(response.results);
        setTotalPages(response.totalPages);
        setCurrentPage(page);
      }
    });
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
          <Pagination align="center" total={totalPages * 10} current={currentPage} onChange={onChange} />
        </Flex>
      </Content>
    </Layout>
  );
}
