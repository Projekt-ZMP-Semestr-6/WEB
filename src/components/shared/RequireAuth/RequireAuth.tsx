import { ROUTES } from '@constants';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  const location = useLocation();

  // if (!user) {
  //   return <Navigate to={ROUTES.login} state={{ from: location }} replace />;
  // }

  return <Outlet />;
};

export default RequireAuth;
