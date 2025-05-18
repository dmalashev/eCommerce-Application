import { useNavigate, useLocation } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';
import { Layout, Menu, Button, Flex } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import formatName from '../../utils/format-name';
import Logo from '../logo/Logo';

const { Header } = Layout;
const noSelectedKey: number = -1;

export default function HeaderView() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: {
    catalog: PageRoutes;
  } = {
    catalog: PageRoutes.CATALOG,
  };

  const currentPath: string = location.pathname;

  const navPaths: PageRoutes[] = Object.values(navItems);

  let selectedKey: number = noSelectedKey;

  for (const [index, navPath] of navPaths.entries()) {
    if (navPath === currentPath) {
      selectedKey = index;
      break;
    }
  }

  const navItemObjects: {
    key: number;
    label: string;
    onClick: () => void | Promise<void>;
  }[] = Object.entries(navItems).map(([name, path], index) => ({
    key: index,
    label: formatName(name),
    onClick: () => navigate(path),
  }));

  return (
    <Header style={{ backgroundColor: 'white' }}>
      <Flex justify="space-between" align="center">
        <Logo />
        <Menu items={navItemObjects} mode="horizontal" defaultSelectedKeys={[`${selectedKey}`]}></Menu>
        <Flex gap="small">
          <Button type="default" icon={<LoginOutlined />} onClick={() => navigate(PageRoutes.LOGIN)}>
            Log In
          </Button>
          <Button type="primary" icon={<UserAddOutlined />} onClick={() => navigate(PageRoutes.REGISTRATION)}>
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Header>
  );
}
