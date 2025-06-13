import { Navigate } from 'react-router';
import { LoginForm } from '../../components/login-form/LoginForm';
import { useAuth } from '../../hooks/hooks';
import { PageRoutes } from '../../types/enums';

export default function Login() {
  const auth = useAuth();

  return auth.isLoggedIn ? <Navigate to={PageRoutes.MAIN} replace={true} /> : <LoginForm />;
}
