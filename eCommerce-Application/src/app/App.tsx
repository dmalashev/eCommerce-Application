import { BrowserRouter, Route, Routes } from 'react-router';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import NotFound from '../pages/not-found/NotFound';
import Catalog from '../pages/catalog/Catalog';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { PageRoutes } from '../types/enums';
import { Layout, message } from 'antd';
import { useState, useEffect } from 'react';
import BurgerMenu from '../components/burger-menu/BurgerMenu';
import Profile from '../pages/profile/Profile';
import { Cart } from '../pages/cart/Cart';
import Product from '../pages/product/Product';
import AboutUs from '../pages/about-us/AboutUs';
import { useUserSession } from '../store/userSession.store';
import { getCartPasswordFlow } from '../api/Cart/get';
import { useAuth } from '../hooks/hooks';

const { Content } = Layout;

export default function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const { user } = useUserSession();
  const auth = useAuth();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const error = (): void => {
      messageApi.open({
        type: 'error',
        content: 'Failed to load the cart. Try to refresh the page',
      });
    };

    if (user) {
      getCartPasswordFlow(user.email, user.password)
        .then((result) => auth.setItemsInCart(result.lineItems))
        .catch((error_) => {
          if (error_.statusCode !== 404) {
            error();
          }
        });
    }
  }, []);

  return (
    <BrowserRouter>
      {contextHolder}
      <Layout style={{ minHeight: '100vh' }}>
        <Header onBurgerClick={() => setIsBurgerOpened(true)} />
        <BurgerMenu isBurgerOpened={isBurgerOpened} onBurgerClose={() => setIsBurgerOpened(false)} />
        <Content>
          <Routes>
            <Route path={PageRoutes.MAIN} element={<Main />}></Route>
            <Route path={PageRoutes.LOGIN} element={<Login />}></Route>
            <Route path={PageRoutes.REGISTRATION} element={<Registration />}></Route>
            <Route path={PageRoutes.CATALOG} element={<Catalog />}></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
            <Route path={PageRoutes.PROFILE} element={<Profile />}></Route>
            <Route path={PageRoutes.CART} element={<Cart />}></Route>
            <Route path={PageRoutes.ABOUT_US} element={<AboutUs />}></Route>
            <Route path={PageRoutes.NOT_FOUND} element={<NotFound />}></Route>
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
