import { BaseErrorHandler } from './BaseErrorHandler.abstract';
import { HttpError } from '../HttpError';
import { ApiErrorCodes } from '../enums/ApiErrorCodes';

export class UnhandledErrorHandler extends BaseErrorHandler<HttpError<{}>> {
  canHandle(): boolean {
    return true;
  }

  specificHandler(): HttpError<{}> {
    return new HttpError({
      status: 500,
      code: ApiErrorCodes.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
      details: { root: { server: { type: 'custom', message: 'Internal server error' } } },
    });
  }
}
