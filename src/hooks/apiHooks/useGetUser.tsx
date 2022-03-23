import { getUser } from 'api/useClient';
import { useQuery } from 'react-query';

export default function useGetUser() {
  return useQuery('user', getUser, {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 20
  });
}
