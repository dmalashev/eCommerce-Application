import { createContext } from 'react';

export type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
