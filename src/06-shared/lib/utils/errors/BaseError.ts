export class BaseError extends Error {
  public readonly message: string;

  constructor({ message }: { message: string }) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  serialize() {
    return { message: this.message };
  }
}
