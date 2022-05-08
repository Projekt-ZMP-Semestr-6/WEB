import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Game } from '@types';
import React from 'react';

interface SearchResultsProps {
  setAppId: React.Dispatch<React.SetStateAction<string>>;
  searchResult: Game[];
}

const SearchResults = ({ searchResult, setAppId }: SearchResultsProps): JSX.Element => {
  const handleGameClick = (game: Game) => {
    setAppId(game.appid);
  };

  return (
    <List>
      {searchResult &&
        searchResult.map((game) => (
          <ListItem key={game.name}>
            <ListItemButton onClick={() => handleGameClick(game)}>
              <img src={game.header_img} style={{ marginRight: '1rem' }} />
              <ListItemText>{game.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
};

export default SearchResults;
