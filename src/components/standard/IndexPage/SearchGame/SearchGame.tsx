import { Box, Typography } from '@mui/material';
import { useAttachGame, useGetUser, useSearchGameByName } from 'hooks/apiHooks';
import { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';
import { boxStyle } from './components/style';

const SearchGame = (): JSX.Element => {
  const [appId, setAppId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { data, refetch: searchGames } = useSearchGameByName(searchTerm);
  const searchResult = data?.data;

  const { refetch: attachGame } = useAttachGame(appId);

  const { refetch: updateUser } = useGetUser();

  useEffect(() => {
    if (appId) {
      attachGame();
      setAppId('');
    }
  }, [appId]);

  useEffect(() => {
    if (!appId) {
      setTimeout(() => {
        updateUser();
      }, 200);
    }
  }, [appId]);

  return (
    <Box sx={boxStyle}>
      <Typography variant="h4">Search your new game</Typography>
      <SearchInput
        searchGames={searchGames}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <SearchResults searchResult={searchResult} setAppId={setAppId} />
    </Box>
  );
};

export default SearchGame;
