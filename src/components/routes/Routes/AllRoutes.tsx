import { Layout, AuthorizationRoute, ProtectedRoute, Pusher } from '@components/shared';
import { ROUTES } from '@constants';
import {
  AccountPage,
  ForgetPasswordPage,
  IndexPage,
  LoginPage,
  NoMatchPage,
  RegisterPage,
  ResetPasswordPage,
  VerifyEmailPage
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
          <Route path={ROUTES.verifyEmail} element={<VerifyEmailPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<Pusher />}>
            <Route index element={<IndexPage />} />
            <Route path={ROUTES.account} element={<AccountPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
