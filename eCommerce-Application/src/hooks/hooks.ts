import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../app/auth-context';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context!;
};
