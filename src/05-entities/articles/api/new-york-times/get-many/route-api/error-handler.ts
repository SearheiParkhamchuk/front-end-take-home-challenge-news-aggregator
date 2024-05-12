import { FetcherError } from '@/06-shared/lib/third-party/fetcher/@types'
import { ApiError } from '@/06-shared/lib/utils/errors/ApiError'
import { ApiErrorCodes } from '@/06-shared/lib/utils/errors/enums/ApiErrorCodes'
import { BaseErrorHandler } from '@/06-shared/lib/utils/errors/handlers/BaseErrorHandler.abstract'

import { type QueryError } from './@types'

export class NewYorkTimesErrorHandler extends BaseErrorHandler<ApiError<{}>> {
  canHandle(e: unknown): boolean {
    return e instanceof FetcherError && e.response?.data.fault
  }

  specificHandler(e: FetcherError<QueryError>): ApiError<QueryError['fault']['detail']> {
    return new ApiError({
      statusCode: e.response?.status ?? e.status ?? 400,
      code: ApiErrorCodes.BAD_REQUEST,
      message: e.response?.data.fault.faultstring ?? e.response?.statusText ?? e.message,
      details: e.response?.data.fault.detail
    })
  }
}
