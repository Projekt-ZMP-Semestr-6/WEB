import { InputData } from 'types/api/types';
import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required()
});

export const inputsData: InputData[] = [
  {
    name: 'email',
    label: 'E-mail address'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password'
  }
];
