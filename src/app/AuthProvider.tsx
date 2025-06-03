import { useEffect, useState, ReactNode } from 'react';
import { StorageTokenKeys } from '../types/enums';
import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(StorageTokenKeys.ACCESS_TOKEN);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>;
};
