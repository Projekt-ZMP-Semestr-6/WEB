import { detachGame } from 'api/gamesClient';
import { useQuery } from 'react-query';

export default function useDetachGame(appId: string) {
  return useQuery('detach-game', () => detachGame(appId), {
    refetchOnWindowFocus: false,
    enabled: false
  });
}
