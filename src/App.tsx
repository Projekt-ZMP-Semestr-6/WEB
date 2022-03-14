import { AuthProvider } from '@hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AllRoutes } from '@components/routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
