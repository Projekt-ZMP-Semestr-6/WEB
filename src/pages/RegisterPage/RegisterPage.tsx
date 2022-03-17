import { RegisterForm } from '@components/standard';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  from: {
    pathname: string;
  };
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as LocationState;
  const from = locationState?.from?.pathname || '/';

  //   if (auth.user) {
  //     navigate(from, { replace: true });
  //   }

  return (
    <>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
