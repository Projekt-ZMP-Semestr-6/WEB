import { ROUTES } from '@constants';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function AlreadHaveAccount() {
  return (
    <Typography variant="subtitle2" component="p" mt={2}>
      Posiadasz już konto?{' '}
      <Link underline="none" component={RouterLink} to={ROUTES.login}>
        Zaloguj się
      </Link>
    </Typography>
  );
}

export default AlreadHaveAccount;
