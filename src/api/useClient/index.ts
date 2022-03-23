import { NameUpdate } from 'types/api/types';
import { apiClient } from './config';

export function getUser() {
  return apiClient.get('');
}

export function updateName(newName: NameUpdate) {
  return apiClient.put('/name', newName);
}

// export function updateEmail() {
//   return apiClient.put('/email');
// }

// export function updatePassword() {
//   return apiClient.put('/password');
// }
