import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size={120} thickness={2} disableShrink />
    </Box>
  );
};

export default Loader;
