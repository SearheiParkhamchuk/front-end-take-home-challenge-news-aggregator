import { FetcherError } from '@/06-shared/lib/third-party/fetcher/@types'
import { ApiError } from '@/06-shared/lib/utils/errors/ApiError'
import { ApiErrorCodes } from '@/06-shared/lib/utils/errors/enums/ApiErrorCodes'
import { BaseErrorHandler } from '@/06-shared/lib/utils/errors/handlers/BaseErrorHandler.abstract'

import { type QueryError } from './@types'

export class TheGuardianErrorHandler extends BaseErrorHandler<ApiError<{}>> {
  canHandle(e: unknown): boolean {
    return e instanceof FetcherError && !!(e as FetcherError<QueryError>).response?.data.response
  }

  specificHandler(e: FetcherError<QueryError>): ApiError<QueryError> {
    return new ApiError({
      statusCode: e.response?.status ?? e.status ?? 400,
      code: ApiErrorCodes.BAD_REQUEST,
      message: e.response?.data.response.message ?? e.message,
      details: e.response?.data
    })
  }
}
