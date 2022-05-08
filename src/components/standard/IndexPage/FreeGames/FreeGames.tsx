import { Box, Alert } from '@mui/material';
import { useGetFreeGames } from 'hooks/apiHooks';

import 'swiper/css';
import FreeGameGrid from './components/FreeGameGrid';
import FreeGameSlider from './components/FreeGameSlider';

const FreeGames = () => {
  const { data } = useGetFreeGames();
  const freeGames = data?.data;

  return (
    <Box>
      {freeGames && freeGames.length > 0 ? (
        <>
          <FreeGameSlider games={freeGames} />
          <FreeGameGrid games={freeGames} />
        </>
      ) : (
        <Alert severity="info" sx={{ width: 'max-content', marginInline: 'auto' }}>
          There are currently no free games. If there is anything, you can find it here.
        </Alert>
      )}
    </Box>
  );
};

export default FreeGames;
