import { updateName } from 'api/useClient';
import { useMutation, useQueryClient } from 'react-query';
import { NameUpdate } from 'types/api/types';

export default function useUpdateName() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newName: NameUpdate) => {
      return updateName(newName);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      }
    }
  );
  return mutation;
}
