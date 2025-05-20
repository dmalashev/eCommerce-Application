import { RegistrationForm } from '../../components/registration-form/RegistrationForm';
import { useAuth } from '../../utils/hooks';
import { Navigate } from 'react-router';
import { PageRoutes } from '../../utils/page-routes';

export default function Registration() {
  const auth = useAuth();

  return auth.isLoggedIn ? <Navigate to={PageRoutes.MAIN} replace={true} /> : <RegistrationForm />;
}
