import { type ApiError } from '../ApiError'
import { type BaseErrorHandler } from '../handlers/BaseErrorHandler.abstract'
import { type ApiResponse } from '../types/ApiResponse'

type AnyFunction<TArgs extends unknown[], TReturn> = (...args: TArgs) => Promise<TReturn>

export function withError<
TArgs extends unknown[],
E extends ApiError,
Details extends object,
TReturn extends ApiResponse<unknown, Details>
>(
  func: AnyFunction<TArgs, TReturn>,
  handler: BaseErrorHandler<E>
) {
  return async function(...args: TArgs): Promise<TReturn> {
    try {
      return await func(...args)
    } catch (e: unknown) {
      const error = handler.handle(e).serialize()
      // @ts-ignore
      return { error, data: null }
    }
  }
}
