import { InputData } from 'types/api/types';

export const updateNameInputs: InputData[] = [{ name: 'name', label: 'New name' }];

export const updateEmailInputs: InputData[] = [
  { name: 'email', label: 'New email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' }
];

export const updatePasswordInputs: InputData[] = [
  { name: 'old_password', label: 'Current password', type: 'password' },
  { name: 'new_password', label: 'New password', type: 'password' },
  { name: 'new_password_confirmation', label: 'Confirm new password', type: 'password' }
];
