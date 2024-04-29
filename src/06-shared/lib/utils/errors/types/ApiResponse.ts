import { type ApiErrorObject } from './ApiErrorObject'

export type ApiResponse<D, E = any> = {
  data: D
  error?: null
} | {
  error: ApiErrorObject<E>
  data?: null
}
