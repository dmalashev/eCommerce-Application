import { Link } from 'react-router';

export default function Header() {
  return (
    <>
      <Link to={'login'}>Login</Link>
      <Link to={'registration'}>Registration</Link>
      <Link to={'catalog'}>Catalog</Link>
    </>
  );
}
