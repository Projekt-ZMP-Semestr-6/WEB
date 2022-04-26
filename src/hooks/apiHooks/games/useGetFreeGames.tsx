import { getFreeGames } from 'api/gamesClient';
import { useQuery } from 'react-query';

export default function useGetFreeGames() {
  return useQuery('freebies', getFreeGames, {
    refetchOnWindowFocus: false
  });
}
