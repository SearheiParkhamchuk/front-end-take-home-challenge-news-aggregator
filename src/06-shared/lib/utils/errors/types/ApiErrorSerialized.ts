import { type ApiErrorCodes } from '../enums/ApiErrorCodes';

export type ApiErrorSerialized<D = any> = {
  code: ApiErrorCodes;
  message: string;
  status: number;
  details?: D;
};
