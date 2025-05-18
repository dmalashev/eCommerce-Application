import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';
import { Menu, Button, Flex } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import formatName from '../../utils/format-name';

const noSelectedKey: string = '';

export default function HeaderMenu({ isHorizontal = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuKey, setMenuKey] = useState(0);

  const refreshMenu = (): void => {
    setMenuKey((previousKey) => previousKey + 1);
  };

  const navItems: {
    home: PageRoutes;
    catalog: PageRoutes;
  } = {
    home: PageRoutes.MAIN,
    catalog: PageRoutes.CATALOG,
  };

  const currentPath: string = location.pathname;

  let selectedKey: string = noSelectedKey;

  for (const [name, path] of Object.entries(navItems)) {
    if (path === currentPath) {
      selectedKey = `${name}${menuKey}`;
      break;
    }
  }

  const navItemObjects: {
    key: string;
    label: string;
    onClick: () => void | Promise<void>;
  }[] = Object.entries(navItems).map(([name, path]) => ({
    key: `${name}${menuKey}`,
    label: formatName(name),
    onClick: () => navigate(path),
  }));

  const onClickLogin = (): void => {
    refreshMenu();
    navigate(PageRoutes.LOGIN);
  };

  const onClickRegistration = (): void => {
    refreshMenu();
    navigate(PageRoutes.REGISTRATION);
  };

  return (
    <>
      <Menu
        items={navItemObjects}
        mode={isHorizontal ? 'horizontal' : 'vertical'}
        selectedKeys={[selectedKey]}
        disabledOverflow={true}
        style={{ border: 'none' }}
      ></Menu>
      <Flex gap="small" vertical={!isHorizontal}>
        <Button type="default" icon={<LoginOutlined />} onClick={onClickLogin}>
          Log In
        </Button>
        <Button type="primary" icon={<UserAddOutlined />} onClick={onClickRegistration}>
          Sign Up
        </Button>
      </Flex>
    </>
  );
}
