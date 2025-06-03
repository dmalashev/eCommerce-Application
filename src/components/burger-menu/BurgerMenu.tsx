import { Drawer, Flex } from 'antd';
import HeaderMenu from '../header-menu/HeaderMenu';
import './burger-menu.css';

type BurgerMenuProperties = {
  isBurgerOpened: boolean;
  onBurgerClose: () => void;
};

export default function BurgerMenu({ isBurgerOpened, onBurgerClose }: BurgerMenuProperties) {
  return (
    <Drawer open={isBurgerOpened} onClose={onBurgerClose} className="burger-menu">
      <Flex vertical gap="large">
        <HeaderMenu />
      </Flex>
    </Drawer>
  );
}
