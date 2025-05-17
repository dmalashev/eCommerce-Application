import { useNavigate, useLocation } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';
import { Layout, Menu } from 'antd';
import formatName from '../../utils/format-name';

const { Header } = Layout;
const noSelectedKey: number = -1;

export default function HeaderView() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: {
    log_in: PageRoutes;
    sign_up: PageRoutes;
    catalog: PageRoutes;
  } = {
    log_in: PageRoutes.LOGIN,
    sign_up: PageRoutes.REGISTRATION,
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
    onClick: () => navigate(`${path}`),
  }));

  return (
    <Header style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <Menu items={navItemObjects} mode="horizontal" defaultSelectedKeys={[`${selectedKey}`]}></Menu>
    </Header>
  );
}
