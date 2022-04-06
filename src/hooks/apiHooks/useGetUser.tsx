import { getUser } from 'api/useClient';
import { useQuery } from 'react-query';

const STALE_TIME_SECONDS = 1000 * 5;

export default function useGetUser() {
  return useQuery('user', getUser, {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME_SECONDS
  });
}
