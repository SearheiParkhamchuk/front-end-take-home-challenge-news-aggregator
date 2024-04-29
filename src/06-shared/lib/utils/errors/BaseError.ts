export class BaseError extends Error {
  public readonly message: string

  constructor({ message }: { message: string }) {
    super(message)
    this.message = message
  }

  serialize() {
    return { message: this.message }
  }
}
