import { useLocation } from 'react-router-dom';

export default function useUrlParams() {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const parameters = new Map(urlSearchParams.entries());

  const getParam = (key: string) => {
    return parameters.get(key);
  };

  return {
    getParam
  };
}
