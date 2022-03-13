import { TextInput } from '@components/shared';
import { Box, Button, Stack } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import DontHaveAccount from './components/DontHaveAccount/DontHaveAccount';
import LoginHeader from './components/LoginHeader/LoginHeader';
import { LoginFormProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required()
});

const LoginForm = () => {
  const formMethods = useForm<LoginFormProps>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<LoginFormProps> = (formValues) => {
    console.log(formValues);
  };

  return (
    <Box mt={5} textAlign="center">
      <LoginHeader />

      <FormProvider {...formMethods}>
        <Stack component="form" spacing={2} onSubmit={formMethods.handleSubmit(onSubmit)}>
          <TextInput name="email" label="Adres E-mail" />
          <TextInput name="password" label="Hasło" type="password" />
          <Button type="submit" variant="contained" size="large">
            Zaloguj się
          </Button>
        </Stack>
      </FormProvider>

      <DontHaveAccount />
    </Box>
  );
};

export default LoginForm;
