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
    label: 'E-mail address'
  },
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password'
  },
  {
    name: 'password_confirmation',
    label: 'Confirm password',
    type: 'password'
  }
];
