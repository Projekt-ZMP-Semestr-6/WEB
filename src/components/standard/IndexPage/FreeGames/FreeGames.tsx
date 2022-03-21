import { Box } from '@mui/material';

import 'swiper/css';
import FreeGameGrid from './components/FreeGameGrid';
import FreeGameSlider from './components/FreeGameSlider';

const placeholderFreeGames = [
  { name: 'Game A' },
  { name: 'Game B' },
  { name: 'Game C' },
  { name: 'Game D' },
  { name: 'Game E' },
  { name: 'Game F' }
];

const FreeGames = () => {
  return (
    <Box>
      <FreeGameSlider games={placeholderFreeGames} />
      <FreeGameGrid games={placeholderFreeGames} />
    </Box>
  );
};

export default FreeGames;
