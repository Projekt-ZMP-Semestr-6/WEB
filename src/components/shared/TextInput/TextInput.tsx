import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInputProps } from './types';

const TextInput = ({ name, label, type }: TextInputProps) => {
  const [isError, setError] = useState(false);

  const {
    control,
    formState: { errors }
  } = useFormContext();

  useEffect(() => {
    const errorExist = errors[name];
    if (errorExist) {
      setError(true);
    } else {
      setError(false);
    }
  }, [errors, name]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          error={isError}
          type={type}
          variant="outlined"
          label={label}
          {...field}
          data-testid="text-input"
        />
      )}
    />
  );
};

export default TextInput;
