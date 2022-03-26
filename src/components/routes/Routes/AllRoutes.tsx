import { Layout, AuthorizationRoute, ProtectedRoute } from '@components/shared';
import { ROUTES } from '@constants';
import {
  AccountPage,
  ForgetPasswordPage,
  IndexPage,
  LoginPage,
  NoMatchPage,
  RegisterPage,
  ResetPasswordPage
} from '@pages';
import { Route, Routes } from 'react-router-dom';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.index} element={<Layout />}>
        <Route element={<AuthorizationRoute />}>
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.register} element={<RegisterPage />} />
          <Route path={ROUTES.noMatch} element={<NoMatchPage />} />
          <Route path={ROUTES.forgetPassword} element={<ForgetPasswordPage />} />
          <Route path={ROUTES.resetPassword} element={<ResetPasswordPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route index element={<IndexPage />} />
          <Route path={ROUTES.account} element={<AccountPage />} />
          {/* widok pojedyńczej obserwowanej gry */}
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
