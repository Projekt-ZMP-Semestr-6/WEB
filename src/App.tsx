import { Layout, RequireAuth } from '@components/shared';
import { AuthProvider } from '@hooks';
import { IndexPage, LoginPage, NoMatchPage } from '@pages';
import { ROUTES } from '@constants';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path={ROUTES.index} element={<Layout />}>
            {/* TO MOŻNA WYDZIELIĆ DO OSOBNYCH PLIKÓW PRIVATE/PUBLIC ROUTES */}
            {/* public routes */}
            <Route path={ROUTES.login} element={<LoginPage />} />
            <Route path={ROUTES.register} element={<RegisterPage />} />
            <Route path="*" element={<NoMatchPage />} />

            {/* private routes */}
            <Route element={<RequireAuth />}>
              <Route index element={<IndexPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
