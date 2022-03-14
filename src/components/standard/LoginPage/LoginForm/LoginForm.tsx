import { TextInput } from '@components/shared';
import { Box, Button, Stack } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import DontHaveAccount from './components/DontHaveAccount/DontHaveAccount';
import LoginHeader from './components/LoginHeader/LoginHeader';
import { LoginFormProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { inputsData, loginSchema } from './utils';
import { useAuth } from '@hooks';

const LoginForm = () => {
  const formMethods = useForm<LoginFormProps>({
    resolver: yupResolver(loginSchema)
  });
  const { login } = useAuth();

  const onSubmit: SubmitHandler<LoginFormProps> = (formValues) => {
    console.log(formValues);
  };

  return (
    <Box mt={5} textAlign="center">
      <LoginHeader />

      <FormProvider {...formMethods}>
        <Stack component="form" spacing={2} onSubmit={formMethods.handleSubmit(onSubmit)}>
          {inputsData.map((input) => (
            <TextInput key={input.name} {...input} />
          ))}

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
