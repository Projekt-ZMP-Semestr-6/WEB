import { ROUTES } from '@constants';
import useGetUser from 'hooks/useGetUser';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  const { data: user } = useGetUser();

  if (!user) {
    return <Navigate to={ROUTES.login} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
