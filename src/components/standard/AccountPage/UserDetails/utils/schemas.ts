import * as yup from 'yup';

export const updateNameSchema = yup.object({
  name: yup.string().required().min(4)
});

export const updateEmailSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
});

export const updatePasswordSchema = yup.object({
  old_password: yup.string().required(),
  new_password: yup.string().required(),
  new_password_confirmation: yup.string().required()
});
