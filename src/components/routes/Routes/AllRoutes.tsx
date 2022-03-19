import { Layout, RequireAuth } from '@components/shared';
import { ROUTES } from '@constants';
import { IndexPage, LoginPage, NoMatchPage, RegisterPage } from '@pages';
import useGetUser from 'hooks/useGetUser';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const AllRoutes = () => {
  const { data } = useGetUser();

  useEffect(() => {
    if (data) {
      console.log('Jestem zalogowany');
    }
  }, [data]);

  return (
    <Routes>
      <Route path={ROUTES.index} element={<Layout />}>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.register} element={<RegisterPage />} />
        <Route path="*" element={<NoMatchPage />} />

        <Route element={<RequireAuth />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
