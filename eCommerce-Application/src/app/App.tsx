import { BrowserRouter, Route, Routes } from 'react-router';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import NotFound from '../pages/not-found/NotFound';
import Catalog from '../pages/catalog/Catalog';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { PageRoutes } from '../utils/page-routes';
import { Layout } from 'antd';

const { Content } = Layout;

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path={PageRoutes.MAIN} element={<Main />}></Route>
            <Route path={PageRoutes.LOGIN} element={<Login />}></Route>
            <Route path={PageRoutes.REGISTRATION} element={<Registration />}></Route>
            <Route path={PageRoutes.CATALOG} element={<Catalog />}></Route>
            <Route path={PageRoutes.NOT_FOUND} element={<NotFound />}></Route>
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
