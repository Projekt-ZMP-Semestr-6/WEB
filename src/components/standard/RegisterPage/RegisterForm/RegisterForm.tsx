import { TextInput } from '@components/shared';
import { Box, Button, Stack } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { inputsData, registerSchema } from './formUtils';
import AlreadHaveAccount from './components/AlreadyHaveAccount/AlreadHaveAccount';
import RegisterHeader from './components/RegisterHeader/RegisterHeader';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants';
import { register } from 'api/authClient';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const RegisterForm = () => {
  const navigate = useNavigate();

  const formMethods = useForm<LoginFormProps>({
    resolver: yupResolver(registerSchema)
  });

  const onRegisterSuccess = () => {
    toast.success('Pomyślnie utworzono konto użytkownika. Możesz się teraz zalogować.');
    navigate(ROUTES.login);
  };

  const onRegisterFailure = (error: AxiosError<any, any>) => {
    const emailError = error.response?.data.email[0];
    if (emailError) {
      toast.error(emailError);
    }
  };

  const onSubmit: SubmitHandler<LoginFormProps> = (formValues) => {
    register(formValues).then(onRegisterSuccess).catch(onRegisterFailure);
  };

  return (
    <Box mt={5} textAlign="center">
      <RegisterHeader />

      <FormProvider {...formMethods}>
        <Stack component="form" spacing={2} onSubmit={formMethods.handleSubmit(onSubmit)}>
          {inputsData.map((input) => (
            <TextInput key={input.name} {...input} />
          ))}

          <Button type="submit" variant="contained" size="large">
            Sign Up
          </Button>
        </Stack>
      </FormProvider>

      <AlreadHaveAccount />
    </Box>
  );
};

export default RegisterForm;
