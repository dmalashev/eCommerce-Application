import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SessionState } from '../types/types';

export const useUserSession = create<SessionState>()(
  persist(
    (set) => ({
      user: undefined,
      accessToken: undefined,
      refreshToken: undefined,
      setUser: (user) => set({ user }),
      setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
      logout: () => set({ user: undefined, accessToken: undefined, refreshToken: undefined }),
    }),
    {
      name: 'user-session', // the key used in localStorage to store the session
      storage: createJSONStorage(() => localStorage), // use localStorage to persist the state
    },
  ),
);
