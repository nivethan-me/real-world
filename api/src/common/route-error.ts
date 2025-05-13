import type { HttpStatusType } from './http-status.type';

/**
 * Error with status code and message.
 * Source: https://github.com/seanpmaxwell/express5-typescript-template/blob/master/src/common/route-errors.ts
 */
export class RouteError extends Error {
  public status: HttpStatusType;

  public constructor(status: HttpStatusType, message: string) {
    super(message);
    this.status = status;
  }
}
