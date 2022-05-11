import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchGames: () => void;
}

const SearchInput = ({ searchTerm, setSearchTerm, searchGames }: SearchInputProps): JSX.Element => {
  const [msg, setMsg] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleClick = () => {
    if (searchTerm.trim()) {
      searchGames();
      setMsg('');
    } else {
      setMsg('The field cannot be empty!');
    }
  };

  return (
    <>
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
      <Typography color="red">{msg}</Typography>
    </>
  );
};

export default SearchInput;
