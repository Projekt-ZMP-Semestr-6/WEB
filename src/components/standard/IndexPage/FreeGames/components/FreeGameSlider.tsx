import { Box } from '@mui/material';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { singleGame, sliderWrapper } from '../styles';

interface FreeGamesSliderProps {
  games: { name: string }[];
}

const FreeGameSlider = ({ games }: FreeGamesSliderProps) => {
  return (
    <Box sx={sliderWrapper}>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        speed={1000}
      >
        {games.map(({ name }) => (
          <SwiperSlide key={name}>
            <Box sx={singleGame}>{name}</Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FreeGameSlider;
