import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Game } from '@types';
import { useDetachGame, useGetUser } from 'hooks/apiHooks';
import { useEffect, useState } from 'react';

const AttachedGames = () => {
  const [appId, setAppId] = useState('');

  const { data, refetch: updateUser } = useGetUser();
  const { observedGames } = data?.data;

  const { refetch: detachGame } = useDetachGame(appId);

  const handleDetachGame = (game: Game) => {
    setAppId(game.appid);
  };

  useEffect(() => {
    if (appId) {
      detachGame();
      setAppId('');
    }
  }, [appId]);

  useEffect(() => {
    if (!appId) {
      setTimeout(() => {
        updateUser();
      }, 500);
    }
  }, [appId]);

  return (
    <Box sx={{ maxWidth: '540px', marginInline: 'auto', marginBlock: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Currently observed games
      </Typography>
      <List>
        {observedGames &&
          observedGames.map((game: Game) => (
            <ListItem
              key={game.name}
              secondaryAction={
                <Button variant="outlined" color="error" onClick={() => handleDetachGame(game)}>
                  Detach
                </Button>
              }
            >
              <ListItemText>{game.name}</ListItemText>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default AttachedGames;
