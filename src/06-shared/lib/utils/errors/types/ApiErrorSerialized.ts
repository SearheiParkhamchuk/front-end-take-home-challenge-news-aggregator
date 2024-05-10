import { type ApiErrorCodes } from '../enums/ApiErrorCodes'

export type ApiErrorSerialized<D> = {
  code: ApiErrorCodes
  message: string
  statusCode: number
  details?: D
}
