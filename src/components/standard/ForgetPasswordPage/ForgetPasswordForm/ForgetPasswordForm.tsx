import { TextInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Stack } from '@mui/material';
import { forgotPassword } from 'api/passwordResetClient';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { inputsData, forgetPasswordSchema } from './formUtils';
import { ForgetPasswordFormProps } from './types';

const ForgetPasswordForm = () => {
  const formMethods = useForm<ForgetPasswordFormProps>({
    resolver: yupResolver(forgetPasswordSchema)
  });

  const onSubmit: SubmitHandler<ForgetPasswordFormProps> = (formValues) => {
    forgotPassword(formValues)
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <Box mt={5} textAlign="center">
      <FormProvider {...formMethods}>
        <Stack
          component="form"
          spacing={2}
          maxWidth="sm"
          mx="auto"
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          {inputsData.map((input) => (
            <TextInput key={input.name} {...input} />
          ))}
          <Button type="submit" variant="contained" size="large">
            Reset password
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default ForgetPasswordForm;
