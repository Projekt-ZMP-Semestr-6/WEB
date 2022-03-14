import * as yup from 'yup';
import { InputData } from './types';

export const registerSchema = yup.object({
  email: yup.string().required().email(),
  name: yup.string().required(),
  password: yup.string().required(),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null])
});

export const inputsData: InputData[] = [
  {
    name: 'email',
    label: 'Adres E-mail'
  },
  {
    name: 'name',
    label: 'Imię'
  },
  {
    name: 'password',
    label: 'Hasło',
    type: 'password'
  },
  {
    name: 'password_confirmation',
    label: 'Potwierdz hasło',
    type: 'password'
  }
];
