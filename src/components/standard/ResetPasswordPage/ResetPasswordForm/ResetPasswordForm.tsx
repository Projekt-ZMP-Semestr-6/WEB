import { TextInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Stack } from '@mui/material';
import { useResetPassword } from 'hooks/apiHooks';
import useUrlParams from 'hooks/useUrlParams';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ResetPasswordData } from 'types/api/types';
import { inputsData, resetPasswordSchema } from './formUtils';
import { ResetPasswordFormProps } from './types';

const ResetPasswordForm = () => {
  const formMethods = useForm<ResetPasswordFormProps>({
    resolver: yupResolver(resetPasswordSchema)
  });
  const mutation = useResetPassword();
  const { getParam } = useUrlParams();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ResetPasswordFormProps> = (formValues) => {
    const resetPasswordCredentials: ResetPasswordData = {
      ...formValues,
      token: getParam('token') || '',
      email: getParam('email') || ''
    };
    mutation.mutate(resetPasswordCredentials);
    navigate('/', { replace: true });
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
            Set new password
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default ResetPasswordForm;
