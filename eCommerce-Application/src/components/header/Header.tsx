import { useNavigate } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function HeaderView() {
  const navigate = useNavigate();

  const navItems: {
    key: number;
    label: string;
  }[] = ['login', 'registration', 'catalog'].map((item, index) => ({
    key: index,
    label: item,
  }));

  return (
    // <header style={{ display: 'flex', gap: '20px' }}>
    //   <button
    //     onClick={() => {
    //       navigate(PageRoutes.LOGIN);
    //     }}
    //   >
    //     Login
    //   </button>
    //   <button
    //     onClick={() => {
    //       navigate(PageRoutes.REGISTRATION);
    //     }}
    //   >
    //     Registration
    //   </button>
    //   <button
    //     onClick={() => {
    //       navigate(PageRoutes.CATALOG);
    //     }}
    //   >
    //     Catalog
    //   </button>
    // </header>
    <Header>
      <Menu items={navItems} mode="horizontal"></Menu>
    </Header>
  );
}
