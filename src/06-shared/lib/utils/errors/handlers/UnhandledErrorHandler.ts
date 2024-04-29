import { BaseErrorHandler } from './BaseErrorHandler.abstract'
import { ApiError } from '../ApiError'
import { ApiErrorCodes } from '../enums/ApiErrorCodes'

export class UnhandledErrorHandler extends BaseErrorHandler<ApiError<{}>> {
  canHandle(): boolean {
    return true
  }

  specificHandler(): ApiError<{}> {
    return new ApiError({
      statusCode: 500,
      code: ApiErrorCodes.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
      details: { root: { server: { type: 'custom', message: 'Internal server error' } } }
    })
  }
}
