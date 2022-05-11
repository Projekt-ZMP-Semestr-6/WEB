import { bestsellers } from 'api/gamesClient';
import { useQuery } from 'react-query';

export default function useGetBestsellers() {
  return useQuery('bestsellers', () => bestsellers());
}
