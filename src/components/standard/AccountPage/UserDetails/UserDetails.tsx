import { Box, Stack, Typography } from '@mui/material';
import useGetUser from 'hooks/useGetUser';

const UserDetails = () => {
  const { data: userData } = useGetUser();
  const { name, email } = userData?.data;

  return (
    <Box>
      <Stack component="ul">
        <Stack component="li">
          <Typography component="span" variant="body1">
            Name
          </Typography>
          <Typography
            component="span"
            variant="h6"
            sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            {name}
          </Typography>
        </Stack>
        <Stack component="li">
          <Typography component="span" variant="body1">
            E-mail
          </Typography>
          <Typography
            component="span"
            variant="h6"
            sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            {email}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default UserDetails;
