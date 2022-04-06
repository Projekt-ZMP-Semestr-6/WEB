import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const VerifyEmailPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const uri = params.get('verify_url');

  useEffect(() => {
    console.log(uri);
    axios
      .get(uri)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return <>Weryfikaja adresu email</>;
};

export default VerifyEmailPage;
