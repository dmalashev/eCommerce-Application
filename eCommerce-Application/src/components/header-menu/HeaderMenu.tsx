import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { PageRoutes } from '../../types/enums';
import { Menu, Button, Flex, Badge } from 'antd';
import { LoginOutlined, LogoutOutlined, ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';
import formatName from '../../utils/format-name';
import { logout } from '../../api/customer/logout';
import { useAuth } from '../../hooks/hooks';

const NO_SELECTED_KEY: string = '';

export default function HeaderMenu({ isHorizontal = false, itemsClassName = '' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuKey, setMenuKey] = useState(0);
  const auth = useAuth();

  const isLoggedIn: boolean = auth?.isLoggedIn ?? false;

  const refreshMenu = (): void => {
    setMenuKey((previousKey) => previousKey + 1);
  };

  const navItems: {
    home: PageRoutes;
    catalog: PageRoutes;
    about_us: PageRoutes;
    profile?: PageRoutes;
  } = {
    home: PageRoutes.MAIN,
    catalog: PageRoutes.CATALOG,
    about_us: PageRoutes.ABOUT_US,
    ...(isLoggedIn && { profile: PageRoutes.PROFILE }),
  };

  const currentPath: string = location.pathname;

  let selectedKey: string = NO_SELECTED_KEY;

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

  const onClickLogOut = (): void => {
    logout();
    navigate(PageRoutes.MAIN);
    auth.setIsLoggedIn(false);
    auth.setItemsInCart([]);
    refreshMenu();
  };

  const onClickRegistration = (): void => {
    refreshMenu();
    navigate(PageRoutes.REGISTRATION);
  };

  const onClickShoppingCart = (): void => {
    navigate(PageRoutes.CART);
  };

  return (
    <>
      <Menu
        items={navItemObjects}
        mode={isHorizontal ? 'horizontal' : 'vertical'}
        selectedKeys={[selectedKey]}
        disabledOverflow={true}
        className={itemsClassName}
        style={{ border: 'none' }}
      ></Menu>
      <Flex gap="small" vertical={!isHorizontal} className={itemsClassName}>
        <Button
          type="default"
          icon={isLoggedIn ? <LogoutOutlined /> : <LoginOutlined />}
          onClick={isLoggedIn ? onClickLogOut : onClickLogin}
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        {isLoggedIn ? undefined : (
          <Button type="primary" icon={<UserAddOutlined />} onClick={onClickRegistration}>
            Sign Up
          </Button>
        )}
        <Badge count={auth.itemsInCart.length}>
          <Button
            icon={<ShoppingCartOutlined style={{ fontSize: '18px' }} />}
            shape="circle"
            onClick={onClickShoppingCart}
          />
        </Badge>
      </Flex>
    </>
  );
}
