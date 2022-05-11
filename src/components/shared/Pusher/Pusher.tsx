import { useGetUser } from 'hooks/apiHooks';
import { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import AppPusher from 'hooks/utils/pusher';

AppPusher.getInstance();

const Pusher = () => {
  const { data } = useGetUser();
  const ids = useMemo(() => data?.data.observedGames.map((game) => game.appid), []);

  useEffect(() => {
    AppPusher.initGames(ids);
  }, []);

  return <Outlet />;
};

export default Pusher;
