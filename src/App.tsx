import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AllRoutes } from '@components/routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <AllRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
