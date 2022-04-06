import { resetPassword } from 'api/passwordResetClient';
import { useMutation } from 'react-query';
import { ResetPasswordData } from 'types/api/types';

export default function useResetPassword() {
  const mutation = useMutation(
    (newPassword: ResetPasswordData) => {
      return resetPassword(newPassword);
    },
    {
      onError: (error) => console.log(error),
      onSuccess: (response) => console.log(response)
    }
  );
  return mutation;
}
