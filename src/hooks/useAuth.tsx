import { UseAuth } from '@types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({} as UseAuth);

export function useAuth() {
  return useContext(AuthContext);
}

function useAuthProvider() {
  const [user, setUser] = useState<any>(null);

  const signin = (email: string, password: string) => {};

  const signup = (email: string, password: string) => {};

  const signout = () => {};

  useEffect(() => {}, []);

  return {
    signin,
    signup,
    signout,
    user
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const authValue = useAuthProvider();
  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
