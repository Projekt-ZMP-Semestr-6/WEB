import { UseAuth } from '@types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({} as UseAuth);

export function useAuth() {
  return useContext(AuthContext);
}

function useAuthProvider() {
  const [user, setUser] = useState<any>(true);

  // można dodać callback jako argument 2
  const login = (email: string, password: string) => {};

  const register = (email: string, password: string) => {};

  const logout = () => {};

  useEffect(() => {}, []);

  return {
    login,
    register,
    logout,
    user
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const authValue = useAuthProvider();
  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
