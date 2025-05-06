import { BrowserRouter, Route, Routes } from 'react-router';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import NotFound from '../pages/not-found/NotFound';
import Catalog from '../pages/catalog/Catalog';
import Header from '../components/header/Header';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="registration" element={<Registration />}></Route>
          <Route path="catalog" element={<Catalog />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
