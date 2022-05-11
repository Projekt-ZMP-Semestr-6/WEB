import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@components/shared';

const Layout = () => {
  return (
    <Container sx={{ marginBlock: '3rem' }}>
      <Outlet />
      <Navigation />
    </Container>
  );
};

export default Layout;
