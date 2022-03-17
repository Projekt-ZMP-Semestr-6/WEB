import { LoginForm } from '@components/standard';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  from: {
    pathname: string;
  };
}

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as LocationState;
  const from = locationState?.from?.pathname || '/';

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
