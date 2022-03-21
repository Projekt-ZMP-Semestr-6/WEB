import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@components/shared';

const Layout = () => {
  return (
    <Container>
      <Outlet />
      <Navigation />
    </Container>
  );
};

export default Layout;
