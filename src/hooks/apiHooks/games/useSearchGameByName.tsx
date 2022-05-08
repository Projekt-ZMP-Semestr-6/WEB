import { searchGameByName } from 'api/gamesClient';
import { useQuery } from 'react-query';

export default function useSearchGameByName(gameName: string) {
  return useQuery('searchByName', () => searchGameByName(gameName), {
    refetchOnWindowFocus: false,
    enabled: false
  });
}
