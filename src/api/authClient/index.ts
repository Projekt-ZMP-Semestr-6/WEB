import { LoginCredentials, RegisterCredentials } from '@types';
import { authClient } from './config';

export function login(loginCredentials: LoginCredentials) {
  return authClient.post('/login', { ...loginCredentials, device_name: 'web' });
}

export function register(registerCredentials: RegisterCredentials) {
  return authClient.post('/register', registerCredentials);
}

export function logout() {
  return authClient.get('/logout');
}
