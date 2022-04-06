import { ROUTES } from '@constants';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function DontHaveAccount() {
  return (
    <Typography variant="subtitle2" component="p" mt={2}>
      You don't have and account yet?
      <Link underline="none" ml={1} component={RouterLink} to={ROUTES.register}>
        Sing Up
      </Link>
    </Typography>
  );
}

export default DontHaveAccount;
