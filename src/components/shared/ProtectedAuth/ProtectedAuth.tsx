import useFromLocation from 'hooks/useFromLocation';
import useGetUser from 'hooks/apiHooks/useGetUser';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

const AuthorizationRoute = () => {
  const from = useFromLocation();
  const { data: user, isLoading } = useGetUser();

  if (user) {
    return <Navigate to={from} replace />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return <Outlet />;
};

export default AuthorizationRoute;
