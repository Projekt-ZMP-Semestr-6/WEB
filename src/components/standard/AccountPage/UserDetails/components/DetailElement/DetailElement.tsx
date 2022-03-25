import { Chip, Stack, Typography } from '@mui/material';
import { DetailElementProps } from './types';

const sx = { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' };

const DetailElement = ({ label, value, openDialog }: DetailElementProps) => {
  return (
    <Stack component="li">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography sx={sx} variant="h6">
          {label}
        </Typography>
        <Chip variant="outlined" color="primary" label="Edit" size="small" onClick={openDialog} />
      </Stack>

      <Typography sx={sx} variant="body1">
        {value}
      </Typography>
    </Stack>
  );
};

export default DetailElement;
