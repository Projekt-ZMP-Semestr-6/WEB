import { ROUTES } from '@constants';
import { Home, Person } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [active, setActive] = useState();

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
      <BottomNavigation
        showLabels
        value={active}
        onChange={(event, newValue) => {
          setActive(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to={ROUTES.index}
          value={ROUTES.index}
          label="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTES.account}
          value={ROUTES.account}
          label="Account"
          icon={<Person />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
