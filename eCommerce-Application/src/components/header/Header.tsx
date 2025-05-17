import { useNavigate } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header style={{ display: 'flex', gap: '20px' }}>
      <button
        onClick={() => {
          navigate(PageRoutes.LOGIN);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate(PageRoutes.REGISTRATION);
        }}
      >
        Registration
      </button>
      <button
        onClick={() => {
          navigate(PageRoutes.CATALOG);
        }}
      >
        Catalog
      </button>
    </header>
  );
}
