import { Box } from '@mui/material';
import React from 'react';
import { singleGame, gridWrapper } from '../styles';

interface FreeGamesGridProps {
  games: { name: string }[];
}

const FreeGameGrid = ({ games }: FreeGamesGridProps) => {
  return (
    <Box sx={gridWrapper}>
      {games.map(({ name }) => (
        <Box key={name} sx={singleGame}>
          {name}
        </Box>
      ))}
    </Box>
  );
};

export default FreeGameGrid;
