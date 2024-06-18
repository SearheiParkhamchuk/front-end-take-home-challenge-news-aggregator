import { BaseError } from './BaseError';
import { type ApiErrorCodes } from './enums/ApiErrorCodes';
import { type ApiErrorSerialized } from './types/ApiErrorSerialized';

export class HttpError<D = any> extends BaseError {
  public readonly code: ApiErrorCodes;
  public readonly message: string;
  public readonly status: number;
  public readonly details?: D;

  constructor({ message, details, code, status }: ApiErrorSerialized<D>) {
    super({ message });
    this.name = 'HttpError';
    this.code = code;
    this.message = message;
    this.status = status;
    this.details = details;
  }

  serialize(): ApiErrorSerialized<D> {
    return {
      code: this.code,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
