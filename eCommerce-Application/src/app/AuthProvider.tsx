import { createContext, useEffect, useState, ReactNode } from 'react';
import { StorageTokenKeys } from '../types/enums';

export type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
