import { useNavigate } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function HeaderView() {
  const navigate = useNavigate();

  const navItems: {
    key: number;
    label: string;
    onClick: () => void | Promise<void>;
  }[] = ['login', 'registration', 'catalog'].map((item, index) => ({
    key: index,
    label: item,
    onClick: () => navigate(`${item}`),
  }));

  return (
    <Header>
      <Menu items={navItems} mode="horizontal"></Menu>
    </Header>
  );
}
