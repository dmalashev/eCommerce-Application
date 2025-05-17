import { BrowserRouter, Route, Routes } from 'react-router';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import NotFound from '../pages/not-found/NotFound';
import Catalog from '../pages/catalog/Catalog';
import Header from '../components/header/Header';
import { PageRoutes } from '../utils/page-routes';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path={PageRoutes.MAIN} element={<Catalog />}></Route>
            <Route path={PageRoutes.LOGIN} element={<Login />}></Route>
            <Route path={PageRoutes.REGISTRATION} element={<Registration />}></Route>
            <Route path={PageRoutes.CATALOG} element={<Catalog />}></Route>
            <Route path={PageRoutes.NOT_FOUND} element={<NotFound />}></Route>
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>The Records Store © 2025</Footer>
      </Layout>
    </BrowserRouter>
  );
}
