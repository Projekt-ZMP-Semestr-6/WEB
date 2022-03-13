import { ROUTES } from '@constants';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function DontHaveAccount() {
  return (
    <Typography variant="subtitle2" component="p" mt={2}>
      Nie posiadasz jeszcze konta?{' '}
      <Link underline="none" component={RouterLink} to={ROUTES.register}>
        Zarejestruj się
      </Link>
    </Typography>
  );
}

export default DontHaveAccount;
