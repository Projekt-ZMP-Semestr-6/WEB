import { attachGame } from 'api/gamesClient';
import { useQuery } from 'react-query';

export default function useAttachGame(appId: string) {
  return useQuery('attach-game', () => attachGame(appId), {
    refetchOnWindowFocus: false,
    enabled: false
  });
}
