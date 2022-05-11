import { Button, Grid, Typography } from '@mui/material';
import { Game } from '@types';
import { useAttachGame, useGetBestsellers, useGetUser } from 'hooks/apiHooks';
import AppPusher from 'hooks/utils/pusher';
import { useEffect, useState } from 'react';

const Bestsellers = () => {
  const [appId, setAppId] = useState('');

  const { data } = useGetBestsellers();
  const bestsellersGames = data?.data || [];

  const { refetch: attachGame } = useAttachGame(appId);
  const { refetch: updateUser } = useGetUser();

  useEffect(() => {
    if (appId) {
      attachGame().then(() => {
        AppPusher.bindGame(appId);
        updateUser();
      });
    }
  }, [appId]);

  const handleClick = (game: Game) => {
    setAppId(game.appid);
  };

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem' }}>
        Bestsellers
      </Typography>
      <Grid container spacing={2}>
        {bestsellersGames.map((game: Game) => (
          <Grid key={game.appid} item xs={3}>
            <Button onClick={() => handleClick(game)}>
              <img src={game.header_img} alt="" />
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Bestsellers;
