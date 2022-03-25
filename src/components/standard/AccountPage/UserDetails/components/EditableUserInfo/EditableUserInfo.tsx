import { useState } from 'react';
import DetailElement from '../DetailElement/DetailElement';
import EditDialog from '../EditDialog/EditDialog';
import { EditableUserInfoProps } from './types';

const EditableUserInfo = ({ property, label, formInfo, mutationHook }: EditableUserInfoProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const mutation = mutationHook();

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <DetailElement label={label} value={property} openDialog={openDialog} />
      <EditDialog
        isOpen={isDialogOpen}
        closeDialog={closeDialog}
        mutation={mutation}
        {...formInfo}
      />
    </>
  );
};

export default EditableUserInfo;
