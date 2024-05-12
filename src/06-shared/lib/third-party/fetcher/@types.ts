import { AxiosError, type AxiosInstance } from 'axios'

type OnRejectedInterceptor = (error: unknown) => void

export type FetcherInstance = AxiosInstance

export { AxiosError as FetcherError }

export type FetcherConfig = {
  baseURL?: string
  interceptors?: { onRejected?: OnRejectedInterceptor }
  url?: string
}
