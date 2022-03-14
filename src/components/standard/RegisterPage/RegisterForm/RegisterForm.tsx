import { TextInput } from '@components/shared';
import { Box, Button, Stack } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { inputsData, registerSchema } from './utils';
import AlreadHaveAccount from './components/AlreadyHaveAccount/AlreadHaveAccount';
import RegisterHeader from './components/RegisterHeader/RegisterHeader';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants';

const RegisterForm = () => {
  const formMethods = useForm<LoginFormProps>({
    resolver: yupResolver(registerSchema)
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormProps> = (formValues) => {
    console.log(formValues);
    navigate(ROUTES.login);
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
            Zarejestruj się
          </Button>
        </Stack>
      </FormProvider>

      <AlreadHaveAccount />
    </Box>
  );
};

export default RegisterForm;
