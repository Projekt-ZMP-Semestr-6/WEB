import { getGameById } from 'api/gamesClient';
import { useQuery } from 'react-query';

export default function useGetGameById(gameId: string) {
  return useQuery('gameById', () => getGameById(gameId), {
    refetchOnWindowFocus: false
  });
}
