import { updateEmailInputs, updateNameInputs, updatePasswordInputs } from './inputs';
import { updateEmailSchema, updateNameSchema, updatePasswordSchema } from './schemas';

export const updateNameFormData = {
  formId: 'update-name',
  formInputs: updateNameInputs,
  formSchema: updateNameSchema
};

export const updateEmailFormData = {
  formId: 'update-email',
  formInputs: updateEmailInputs,
  formSchema: updateEmailSchema
};

export const updatePasswordFormData = {
  formId: 'update-email',
  formInputs: updatePasswordInputs,
  formSchema: updatePasswordSchema
};
