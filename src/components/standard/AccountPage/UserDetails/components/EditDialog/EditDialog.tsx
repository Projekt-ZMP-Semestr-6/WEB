import { TextInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { EditDialogProps } from './types';

const EditDialog = ({
  isOpen,
  closeDialog,
  formId,
  formInputs,
  formSchema,
  mutation
}: EditDialogProps) => {
  const formMethods = useForm<any>({
    resolver: yupResolver(formSchema)
  });
  const { reset: resetForm, handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<any> = (formValues) => {
    mutation.mutate(formValues);
    closeDialog();
    resetForm();
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle>Edit Name</DialogTitle>
      <DialogContent>
        <FormProvider {...formMethods}>
          <Stack spacing={3} my={1} id={formId} component="form" onSubmit={handleSubmit(onSubmit)}>
            {formInputs.map((input) => (
              <TextInput key={input.name} {...input} />
            ))}
          </Stack>
        </FormProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button type="submit" form={formId}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
