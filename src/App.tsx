import { AuthProvider } from 'hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <h1>Hello and welcome</h1>
    </AuthProvider>
  );
}

export default App;
