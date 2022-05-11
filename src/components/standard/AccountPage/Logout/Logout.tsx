import { ROUTES } from '@constants';
import { Button, Box } from '@mui/material';
import { logout } from 'api/authClient';
import Cookies from 'js-cookie';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    logout().then(() => {
      Cookies.remove('token');
      queryClient.clear();
      navigate(ROUTES.login);
    });
  };

  return (
    <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
      <Button variant="outlined" sx={{ my: 1 }} onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
