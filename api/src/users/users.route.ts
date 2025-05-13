import { Router, type Request, type Response } from 'express';
import { validateRequestBody } from '../common/middleware/validate-request-body';
import {
  userRegistrationSchema,
  type UserRegistrationBody,
} from './users.schema';
import { usersService } from './users.service';
import { HttpStatus } from '../common/http-status.type';

export const usersRouter = Router();

usersRouter.post(
  '/',
  validateRequestBody(userRegistrationSchema),
  async (
    req: Request<{}, {}, UserRegistrationBody>,
    res: Response,
    next: any
  ): Promise<any> => {
    const newUser = await usersService.create(req.body);
    return res.status(HttpStatus.CREATED).json(newUser);
  }
);

usersRouter.get('/', (req, res) => {
  res.json({
    message: 'Return all users',
  });
});
