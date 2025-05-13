import { z, ZodError } from 'zod';
import { HttpStatus } from '../http-status.type';
import type { NextFunction, Request, Response } from 'express';

export function validateRequestBody(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }));

        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'Invalid data', details: errorMessages });
      } else {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: 'Internal Server Error' });
      }
    }
  };
}
