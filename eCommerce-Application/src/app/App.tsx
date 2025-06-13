import { BrowserRouter, Route, Routes } from 'react-router';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import NotFound from '../pages/not-found/NotFound';
import Catalog from '../pages/catalog/Catalog';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { PageRoutes } from '../types/enums';
import { Layout } from 'antd';
import { useState } from 'react';
import BurgerMenu from '../components/burger-menu/BurgerMenu';
import Profile from '../pages/profile/Profile';
import Product from '../pages/product/Product';

const { Content } = Layout;

export default function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  return (
    <BrowserRouter>
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
            <Route path={PageRoutes.NOT_FOUND} element={<NotFound />}></Route>
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
