export interface UseAuth {
  user: null;
  login: (email: string, password: string) => void;
}
