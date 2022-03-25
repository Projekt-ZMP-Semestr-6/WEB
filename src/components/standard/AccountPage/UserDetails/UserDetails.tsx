import { Box, Stack } from '@mui/material';
import { useGetUser, useUpdateEmail, useUpdateName, useUpdatePassword } from 'hooks/apiHooks';
import EditableUserInfo from './components/EditableUserInfo/EditableUserInfo';
import { updateEmailFormData, updateNameFormData, updatePasswordFormData } from './utils/formData';

const UserDetails = () => {
  const { data: userData } = useGetUser();
  const { name, email } = userData?.data;

  return (
    <Box>
      <Stack component="ul">
        <EditableUserInfo
          property={name}
          label="Name"
          formInfo={updateNameFormData}
          mutationHook={useUpdateName}
        />
        <EditableUserInfo
          property={email}
          label="E-mail"
          formInfo={updateEmailFormData}
          mutationHook={useUpdateEmail}
        />
        <EditableUserInfo
          property="********"
          label="Password"
          formInfo={updatePasswordFormData}
          mutationHook={useUpdatePassword}
        />
      </Stack>
    </Box>
  );
};

export default UserDetails;
