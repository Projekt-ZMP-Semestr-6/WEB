import { ROUTES } from '@constants';
import useGetUser from 'hooks/apiHooks/useGetUser';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  const { data: userData } = useGetUser();

  if (!userData?.data) {
    return <Navigate to={ROUTES.login} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
