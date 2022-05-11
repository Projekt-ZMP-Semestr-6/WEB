import { ROUTES } from '@constants';
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyEmailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const uri = params.get('verify_url') as string;

  useEffect(() => {
    axios
      .get(uri)
      .then(() => {
        navigate(ROUTES.login);
      })
      .catch(() => {});
  }, []);

  return <>Weryfikaja adresu email</>;
};

export default VerifyEmailPage;
