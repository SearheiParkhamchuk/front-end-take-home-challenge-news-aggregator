import { type ApiErrorCodes } from '../enums/ApiErrorCodes'

export type ApiErrorObject<D> = {
  code: ApiErrorCodes
  message: string
  statusCode: number
  details?: D
}
