import { useAuth } from '@hooks';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  from: {
    pathname: string;
  };
}

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const locationState = location.state as LocationState;
  const from = locationState?.from?.pathname || '/';

  return <div>Login Page</div>;
};

export default LoginPage;
