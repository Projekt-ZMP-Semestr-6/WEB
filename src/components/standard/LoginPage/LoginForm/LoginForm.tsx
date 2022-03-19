import { TextInput } from '@components/shared';
import { Box, Button, Stack } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import DontHaveAccount from './components/DontHaveAccount/DontHaveAccount';
import LoginHeader from './components/LoginHeader/LoginHeader';
import { LoginFormProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { inputsData, loginSchema } from './formUtils';
import { login } from 'api/authClient';
import { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import useFromLocation from 'hooks/useFromLocation';
import { useNavigate } from 'react-router-dom';
import useGetUser from 'hooks/useGetUser';

const LoginForm = () => {
  const from = useFromLocation();
  const navigate = useNavigate();
  const { data: user, isLoading } = useGetUser();

  const formMethods = useForm<LoginFormProps>({
    resolver: yupResolver(loginSchema)
  });

  const onLoginSuccess = (response: AxiosResponse<any, any>) => {
    const { Bearer } = response.data;
    Cookies.set('token', Bearer);

    toast.success('Zalogowano pomyślnie');
    navigate(from);
  };

  const onLoginFailure = (error: AxiosError<any, any>) => {
    const msg = error?.response?.data;
    toast.error(msg);
  };

  const onSubmit: SubmitHandler<LoginFormProps> = (formValues) => {
    login(formValues).then(onLoginSuccess).catch(onLoginFailure);
  };

  if (isLoading) {
    return <h1>LOADING..</h1>;
  }

  if (user) {
    navigate(from);
  }

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
