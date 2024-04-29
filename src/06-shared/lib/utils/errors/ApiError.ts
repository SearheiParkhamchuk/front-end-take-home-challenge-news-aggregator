import { BaseError } from './BaseError'
import { type ApiErrorCodes } from './enums/ApiErrorCodes'
import { type ApiErrorObject } from './types/ApiErrorObject'

export class ApiError<D = any> extends BaseError {
  public readonly code: ApiErrorCodes
  public readonly message: string
  public readonly statusCode: number
  public readonly details?: D

  constructor({ message, details, code, statusCode }: ApiErrorObject<D>) {
    super({ message })
    this.code = code
    this.message = message
    this.statusCode = statusCode
    this.details = details
  }

  serialize(): ApiErrorObject<D> {
    return {
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
      details: this.details
    }
  }
}
