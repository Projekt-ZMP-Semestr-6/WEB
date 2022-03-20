import { ROUTES } from '@constants';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function AlreadHaveAccount() {
  return (
    <Typography variant="subtitle2" component="p" mt={2}>
      Already have an account?{' '}
      <Link underline="none" component={RouterLink} to={ROUTES.login}>
        Sign in
      </Link>
    </Typography>
  );
}

export default AlreadHaveAccount;
