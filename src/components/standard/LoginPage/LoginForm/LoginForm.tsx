import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type LoginFormProps = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { control, handleSubmit } = useForm<LoginFormProps>();

  const onSubmit: SubmitHandler<LoginFormProps> = (formValues) => {
    console.log(formValues);
  };

  return (
    <Box m={2} textAlign="center">
      <Typography variant="h3" component="h1" mb={4}>
        Logowanie
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField variant="outlined" label="Adres E-mail" {...field} />}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField variant="outlined" label="Hasło" {...field} />}
          />
          <Button type="submit" variant="contained" size="large">
            Zaloguj
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
