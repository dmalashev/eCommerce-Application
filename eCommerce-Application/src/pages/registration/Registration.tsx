import { RegistrationForm } from '../../components/registration-form/RegistrationForm';
import { useAuth } from '../../utils/hooks';
import { useNavigate } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';

export default function Registration() {
  const navigate = useNavigate();
  const auth = useAuth();

  if (auth.isLoggedIn) {
    navigate(PageRoutes.MAIN);
  }

  return <RegistrationForm />;
}
