import { useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header style={{ display: 'flex', gap: '20px' }}>
      <button
        onClick={() => {
          navigate('login');
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate('registration');
        }}
      >
        Registration
      </button>
      <button
        onClick={() => {
          navigate('catalog');
        }}
      >
        Catalog
      </button>
    </header>
  );
}
