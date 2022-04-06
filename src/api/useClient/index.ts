import { NameUpdate, EmailUpdate, PasswordUpdate } from 'types/api/types';
import { apiClient } from './config';

export function getUser() {
  return apiClient.get('');
}

export function updateName(newName: NameUpdate) {
  return apiClient.put('/name', newName);
}

export function updateEmail(newEmail: EmailUpdate) {
  return apiClient.put('/email', newEmail);
}

export function updatePassword(newPassword: PasswordUpdate) {
  return apiClient.put('/password', newPassword);
}
