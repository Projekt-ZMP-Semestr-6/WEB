import { testPriceChange } from 'api/gamesClient';
import { useQuery } from 'react-query';

export default function useTestPriceChange() {
  return useQuery('test-price-change', () => testPriceChange(), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
    refetchOnReconnect: false,
    enabled: false
  });
}
