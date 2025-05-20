import { Navigate } from 'react-router';
import { LoginForm } from '../../components/login-form/LoginForm';
import { useAuth } from '../../utils/hooks';
import { PageRoutes } from '../../utils/page-routes';

export default function Login() {
  const auth = useAuth();

  return auth.isLoggedIn ? <Navigate to={PageRoutes.MAIN} replace={true} /> : <LoginForm />;
}
