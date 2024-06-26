import { type HttpError } from '../HttpError';
import { type BaseErrorHandler } from '../handlers/BaseErrorHandler.abstract';
import { type ApiResponse } from '../types/ApiResponse';

type AnyFunction<TArgs extends unknown[], TReturn> = (...args: TArgs) => Promise<TReturn>;

export function withError<TArgs extends unknown[], TReturn extends ApiResponse<unknown>>(
  func: AnyFunction<TArgs, TReturn>,
  handler: BaseErrorHandler<HttpError>,
) {
  return async function (...args: TArgs): Promise<TReturn> {
    try {
      return await func(...args);
    } catch (e: unknown) {
      const error = handler.handle(e).serialize();
      // @ts-ignore
      return { error, data: null };
    }
  };
}
