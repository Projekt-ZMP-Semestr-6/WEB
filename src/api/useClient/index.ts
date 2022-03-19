import { apiClient } from './config';

export function getUser() {
  return apiClient.get('/user');
}
