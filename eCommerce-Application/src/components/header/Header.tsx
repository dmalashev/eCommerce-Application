// import { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router';
// import { PageRoutes } from '../../utils/page-routes';
import { Layout, Flex } from 'antd';
// import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
// import formatName from '../../utils/format-name';
import Logo from '../logo/Logo';
import HeaderMenu from '../header-menu/HeaderMenu';

const { Header } = Layout;
// const noSelectedKey: string = '';

export default function HeaderView() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [menuKey, setMenuKey] = useState(0);

  // const refreshMenu = (): void => {
  //   setMenuKey((previousKey) => previousKey + 1);
  // };

  // const navItems: {
  //   home: PageRoutes;
  //   catalog: PageRoutes;
  // } = {
  //   home: PageRoutes.MAIN,
  //   catalog: PageRoutes.CATALOG,
  // };

  // const currentPath: string = location.pathname;

  // let selectedKey: string = noSelectedKey;

  // for (const [name, path] of Object.entries(navItems)) {
  //   if (path === currentPath) {
  //     selectedKey = `${name}${menuKey}`;
  //     break;
  //   }
  // }

  // const navItemObjects: {
  //   key: string;
  //   label: string;
  //   onClick: () => void | Promise<void>;
  // }[] = Object.entries(navItems).map(([name, path]) => ({
  //   key: `${name}${menuKey}`,
  //   label: formatName(name),
  //   onClick: () => navigate(path),
  // }));

  // const onClickLogin = (): void => {
  //   refreshMenu();
  //   navigate(PageRoutes.LOGIN);
  // };

  // const onClickRegistration = (): void => {
  //   refreshMenu();
  //   navigate(PageRoutes.REGISTRATION);
  // };

  return (
    <Header style={{ backgroundColor: 'white' }}>
      <Flex justify="space-between" align="center">
        <Logo />
        <HeaderMenu isHorizontal />
      </Flex>
    </Header>
  );
}
