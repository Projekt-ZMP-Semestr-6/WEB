import { Button, Stack, TextField } from '@mui/material';
import React from 'react';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchGames: () => void;
}

const SearchInput = ({ searchTerm, setSearchTerm, searchGames }: SearchInputProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleClick = () => {
    searchGames();
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id="search-by-name"
        label="Name of the game"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button onClick={handleClick} variant="contained">
        Search
      </Button>
    </Stack>
  );
};

export default SearchInput;
