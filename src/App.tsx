import { Layout, RequireAuth } from '@components/shared';
import { AuthProvider } from '@hooks';
import { IndexPage, LoginPage, NoMatchPage } from '@pages';
import { ROUTES } from '@constants';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={ROUTES.index} element={<Layout />}>
          {/* public routes */}
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path="*" element={<NoMatchPage />} />

          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route index element={<IndexPage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
