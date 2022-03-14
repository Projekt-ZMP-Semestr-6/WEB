import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';

import 'swiper/css';

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
      <Box sx={{ display: { md: 'none' } }}>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 500, pauseOnMouseEnter: true }}
          speed={3000}
        >
          {placeholderFreeGames.map((game) => (
            <SwiperSlide key={game.name}>
              <Box
                sx={{
                  background: 'teal',
                  width: '100%',
                  height: '140px',
                  display: 'grid',
                  placeItems: 'center'
                }}
              >
                {game.name}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: 'repeat(3,1fr)' }}>
        {placeholderFreeGames.map((game) => (
          <Box
            key={game.name}
            sx={{
              background: 'teal',
              border: '2px solid blue',
              width: '100%',
              height: '140px',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            {game.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FreeGames;
