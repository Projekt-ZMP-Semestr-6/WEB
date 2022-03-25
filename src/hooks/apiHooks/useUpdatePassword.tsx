import { updatePassword } from 'api/useClient';
import { useMutation, useQueryClient } from 'react-query';
import { PasswordUpdate } from 'types/api/types';

export default function useUpdatePassword() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newPassword: PasswordUpdate) => {
      return updatePassword(newPassword);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      }
    }
  );
  return mutation;
}
