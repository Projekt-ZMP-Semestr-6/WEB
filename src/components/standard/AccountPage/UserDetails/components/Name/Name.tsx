import { TextInput } from '@components/shared';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import useUpdateName from 'hooks/apiHooks/useUpdateName';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import DetailElement from '../DetailElement/DetailElement';

// Add types
// Create dialog component with dynamic inputs

const Name = ({ userName }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const formMethods = useForm();
  const { reset: resetForm, handleSubmit } = formMethods;
  const mutation = useUpdateName();

  const closeDialog = () => {
    setDialogOpen(false);
    resetForm();
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const onSubmit = (formValues) => {
    mutation.mutate(formValues);
    closeDialog();
    resetForm();
  };

  return (
    <>
      <DetailElement label="Name" value={userName} openDialog={openDialog} />

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Edit Name</DialogTitle>
        <DialogContent>
          <FormProvider {...formMethods}>
            <Box id="update-name-form" component="form" my={1} onSubmit={handleSubmit(onSubmit)}>
              <TextInput name="name" label="New name" />
            </Box>
          </FormProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button type="submit" form="update-name-form">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Name;
