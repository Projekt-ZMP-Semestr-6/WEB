import { ROUTES } from '@constants';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function ForgetPassword() {
  return (
    <Typography variant="subtitle2" component="p" mt={2}>
      Have you forgotten your password?
      <Link underline="none" ml={1} component={RouterLink} to={ROUTES.forgetPassword}>
        Remind password
      </Link>
    </Typography>
  );
}

export default ForgetPassword;
