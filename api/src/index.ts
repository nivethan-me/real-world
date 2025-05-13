import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import { RouteError } from './common/route-error.ts';
import { env } from './env.ts';
import { usersRouter } from './users/users.route.ts';

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);

app.get('/api', (_: Request, res: Response) => {
  res.send(`Welcome to the Real World API! ${process.env.PORT}`);
});

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof RouteError) {
    res.status(err.status).json({ error: err.message });
  }
  return next(err);
});

// prettier-ignore
app.listen(env.PORT, () => {
  console.log('\x1b[1;32m%s\x1b[0m', '┌──────────────────────────────────────────────────────────┐');
  console.log('\x1b[1;32m%s\x1b[0m', '│         RUNNING REAL WORLD API SERVER                    │');
  console.log('\x1b[1;32m%s\x1b[0m', '└──────────────────────────────────────────────────────────┘');
  console.log('\x1b[1;32m%s\x1b[0m', '┌──────────────────────────────────────────────────────────┐');
  console.log('\x1b[32m%s\x1b[0m',   `│         API:  http://localhost:${env.PORT}/api           │`);
  console.log('\x1b[1;32m%s\x1b[0m', '└──────────────────────────────────────────────────────────┘');
});
