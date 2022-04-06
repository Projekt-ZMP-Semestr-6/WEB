import { InputData } from 'types/api/types';

export interface EditableUserInfoProps {
  property: string;
  label: string;
  formInfo: FormInfo;
  mutationHook: any;
}

export interface FormInfo {
  formId: string;
  formInputs: InputData[];
  formSchema: any;
}
