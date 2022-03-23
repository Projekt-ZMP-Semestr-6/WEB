import { Chip, Stack, Typography } from '@mui/material';

interface DetailElementProps {
  label: string;
  value: string;
  openDialog: () => void;
}

const DetailElement = ({ label, value, openDialog }: DetailElementProps) => {
  return (
    <Stack component="li">
      <Typography>{label}</Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>{value}</Typography>
        <Chip variant="outlined" color="primary" label="Edit" size="small" onClick={openDialog} />
      </Stack>
    </Stack>
  );
};

export default DetailElement;
