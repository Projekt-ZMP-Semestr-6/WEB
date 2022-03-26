import { FreeGames } from '@components/standard';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

const IndexPage = () => {
  // WERSJA ROBOCZA, WERYFIKACJA STWORZENIA KONTA

  // const location = useLocation();

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const uri = params.get('verify_url');
  //   axios
  //     .get(uri)
  //     .then((response) => console.log('UDAŁO SIĘ'))
  //     .catch((error) => console.log(JSON.stringify(error)));
  // });

  return (
    <>
      <FreeGames />
    </>
  );
};

export default IndexPage;
