import axios from 'axios'

type OnRejectedInterceptor = (error: unknown) => void

const onFulfilledInterceptor = <R>(response: R) => response

export function makeFetcherInstance({ interceptors }: { interceptors?: { onRejected?: OnRejectedInterceptor } } = {}) {
  const instance = axios.create()

  if (interceptors?.onRejected) {
    instance.interceptors.response.use(onFulfilledInterceptor, interceptors?.onRejected)
  }

  return instance
}
