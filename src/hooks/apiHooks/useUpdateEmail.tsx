import { updateEmail } from 'api/useClient';
import { useMutation, useQueryClient } from 'react-query';
import { EmailUpdate } from 'types/api/types';

export default function useUpdateEmail() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newEmail: EmailUpdate) => {
      return updateEmail(newEmail);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      }
    }
  );
  return mutation;
}
