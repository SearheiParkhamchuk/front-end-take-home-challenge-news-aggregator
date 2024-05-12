import axios from 'axios'

import { type FetcherConfig } from './@types'

const onFulfilledInterceptor = <R>(response: R) => response

export function makeFetcherInstance({ interceptors, baseURL, url }: FetcherConfig) {
  const instance = axios.create({
    baseURL,
    url
  })

  if (interceptors?.onRejected) {
    instance.interceptors.response.use(onFulfilledInterceptor, interceptors?.onRejected)
  }

  return instance
}
