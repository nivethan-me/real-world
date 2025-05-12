import express from 'express';
import { env } from './env.ts';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send(`Welcome to the Real World API! ${process.env.PORT}`);
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
