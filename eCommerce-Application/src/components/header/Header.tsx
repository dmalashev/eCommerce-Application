import { Layout, Flex } from 'antd';
import Logo from '../logo/Logo';
import HeaderMenu from '../header-menu/HeaderMenu';
import { MenuOutlined } from '@ant-design/icons';
import './header.css';

const { Header } = Layout;

type HeaderViewProperties = {
  onBurgerClick: () => void;
};

export default function HeaderView({ onBurgerClick }: HeaderViewProperties) {
  return (
    <Header style={{ backgroundColor: 'white' }}>
      <Flex justify="space-between" align="center">
        <Logo />
        <HeaderMenu itemsClassName="menu-item" isHorizontal />
        <div className="burger-button" onClick={onBurgerClick}>
          <MenuOutlined style={{ fontSize: 24 }} />
        </div>
      </Flex>
    </Header>
  );
}
