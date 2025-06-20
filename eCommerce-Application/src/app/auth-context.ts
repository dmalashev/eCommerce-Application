import { createContext } from 'react';
import { LineItem } from '@commercetools/platform-sdk';

export type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  itemsInCart: LineItem[];
  setItemsInCart: (value: LineItem[]) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
