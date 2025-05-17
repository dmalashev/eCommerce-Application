import { useNavigate, useLocation } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const noSelectedKey: number = -1;

export default function HeaderView() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: {
    login: PageRoutes;
    registration: PageRoutes;
    catalog: PageRoutes;
  } = {
    login: PageRoutes.LOGIN,
    registration: PageRoutes.REGISTRATION,
    catalog: PageRoutes.CATALOG,
  };

  const navNames: string[] = Object.keys(navItems);

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
  }[] = navNames.map((item, index) => ({
    key: index,
    label: item,
    onClick: () => navigate(`${item}`),
  }));

  return (
    <Header>
      <Menu items={navItemObjects} mode="horizontal" defaultSelectedKeys={[`${selectedKey}`]}></Menu>
    </Header>
  );
}
