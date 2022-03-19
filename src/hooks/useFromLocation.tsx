import { useLocation } from 'react-router-dom';

interface LocationState {
  from: {
    pathname: string;
  };
}

export default function useFromLocation() {
  const location = useLocation();

  const locationState = location.state as LocationState;
  const from = locationState?.from?.pathname || '/';

  return from;
}
