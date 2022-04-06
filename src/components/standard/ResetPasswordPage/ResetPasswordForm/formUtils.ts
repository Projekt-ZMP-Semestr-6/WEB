import { InputData } from 'types/api/types';
import * as yup from 'yup';

export const resetPasswordSchema = yup.object({
  password: yup.string().required(),
  password_confirmation: yup.string().required()
});

export const inputsData: InputData[] = [
  {
    name: 'password',
    label: 'New password',
    type: 'password'
  },
  {
    name: 'password_confirmation',
    label: 'Confirm new password',
    type: 'password'
  }
];
