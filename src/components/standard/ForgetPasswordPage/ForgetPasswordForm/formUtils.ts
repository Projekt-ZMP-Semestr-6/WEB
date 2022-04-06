import { InputData } from 'types/api/types';
import * as yup from 'yup';

export const forgetPasswordSchema = yup.object({
  email: yup.string().required().email()
});

export const inputsData: InputData[] = [
  {
    name: 'email',
    label: 'E-mail address',
    type: 'email'
  }
];
