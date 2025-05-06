import { BrowserRouter, Route, Routes } from 'react-router';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import NotFound from '../pages/NotFound';
import Catalog from '../pages/Catalog';

export default function App() {
  return (
    <div>
      App component
      <BrowserRouter>
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
