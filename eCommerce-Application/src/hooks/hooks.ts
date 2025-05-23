import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../app/AuthProvider';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context!;
};
