import { type ApiErrorSerialized } from './ApiErrorSerialized'

export type ApiResponse<D, E = any> = {
  data: D
  error: null
} | {
  data: null
  error: ApiErrorSerialized<E>
}
