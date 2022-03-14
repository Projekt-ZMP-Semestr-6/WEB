import * as yup from 'yup';
import { InputData } from './types';

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required()
});

export const inputsData: InputData[] = [
  {
    name: 'email',
    label: 'Adres E-mail'
  },
  {
    name: 'password',
    label: 'Hasło',
    type: 'password'
  }
];
