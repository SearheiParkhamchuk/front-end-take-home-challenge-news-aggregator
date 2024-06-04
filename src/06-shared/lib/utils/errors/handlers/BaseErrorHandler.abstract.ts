import { never } from 'src/06-shared/lib/utils/misc/never';

export abstract class BaseErrorHandler<D> {
  constructor(private readonly nextHandler: BaseErrorHandler<D> | null) {}

  handle(error: unknown): D {
    if (this.canHandle(error)) {
      return this.specificHandler(error);
    } else if (this.nextHandler) {
      return this.nextHandler.handle(error);
    } else {
      return never(null, `Unhandled exception: ${error} `);
    }
  }

  abstract canHandle(_error: unknown): boolean;

  abstract specificHandler(_error: unknown): D;
}
