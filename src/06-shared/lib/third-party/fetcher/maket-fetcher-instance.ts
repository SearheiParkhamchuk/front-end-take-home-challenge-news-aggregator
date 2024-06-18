import axios, { type AxiosError } from 'axios';

import { type FetcherConfig } from './@types';
import { HttpError } from '../../utils/errors/HttpError';
import { ApiErrorCodes } from '../../utils/errors/enums/ApiErrorCodes';
import { type ApiErrorSerialized } from '../../utils/errors/types/ApiErrorSerialized';

const onFulfilledInterceptor = <R>(response: R) => response;

export function makeFetcherInstance({ baseURL, url }: FetcherConfig) {
  const instance = axios.create({
    baseURL,
    url,
  });

  instance.interceptors.response.use(onFulfilledInterceptor, async (e: AxiosError<ApiErrorSerialized>) => {
    const payload = e.response?.data ?? { message: e.message, status: e.status ?? 500, code: ApiErrorCodes.UNHANDLED_EXCEPTION };
    return Promise.reject(new HttpError(payload));
  });

  return instance;
}
