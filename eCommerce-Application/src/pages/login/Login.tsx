import { LoginForm } from '../../components/login-form/LoginForm';
import { useAuth } from '../../utils/hooks';
import { useNavigate } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  if (auth.isLoggedIn) {
    navigate(PageRoutes.MAIN);
  }

  return <LoginForm />;
}
