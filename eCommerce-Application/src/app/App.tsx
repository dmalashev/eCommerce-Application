import { BrowserRouter, Route, Routes } from 'react-router';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import NotFound from '../pages/not-found/NotFound';
import Catalog from '../pages/catalog/Catalog';
import Header from '../components/header/Header';
import { PageRoutes } from '../utils/page-routes';

export default function App() {
  return (
    <div id="root" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={PageRoutes.MAIN} element={<Catalog />}></Route>
          <Route path={PageRoutes.LOGIN} element={<Login />}></Route>
          <Route path={PageRoutes.REGISTRATION} element={<Registration />}></Route>
          <Route path={PageRoutes.CATALOG} element={<Catalog />}></Route>
          <Route path={PageRoutes.NOT_FOUND} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
