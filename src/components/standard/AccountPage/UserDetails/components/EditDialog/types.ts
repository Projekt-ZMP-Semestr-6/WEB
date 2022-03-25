import { AxiosResponse } from 'axios';
import { UseMutationResult } from 'react-query';
import { InputData } from 'types/api/types';

export interface EditDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  formId: string;
  formInputs: InputData[];
  formSchema: any;
  mutation: UseMutationResult<AxiosResponse<any, any>, unknown, any, unknown>;
}
