import { ResetPasswordData, ResetPasswordEmail } from 'types/api/types';
import { passwordResetClient } from './config';

export function forgotPassword(emailToReset: ResetPasswordEmail) {
  return passwordResetClient.post('/send', emailToReset);
}

export function resetPassword(emailResetData: ResetPasswordData) {
  return passwordResetClient.post('/reset', emailResetData);
}
