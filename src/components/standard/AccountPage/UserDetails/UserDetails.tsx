import { Box, Chip, Stack } from '@mui/material';
import useGetUser from 'hooks/apiHooks/useGetUser';
import Name from './components/Name/Name';

// sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}

const UserDetails = () => {
  const { data: userData } = useGetUser();
  const { name, email } = userData?.data;

  return (
    <Box>
      <Stack component="ul">
        <Name userName={name} />

        <li>
          <h6>Label</h6>
          <h5>{name}</h5>
          <Chip label="Edit" />
        </li>
      </Stack>
    </Box>
  );
};

export default UserDetails;
