import express from 'express';
import { CONFIG } from './config.js';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send(`Welcome to the Real World API! ${process.env.PORT}`);
});

// prettier-ignore
app.listen(CONFIG.PORT || 3001, () => {
  console.log('\x1b[1;32m%s\x1b[0m', '┌──────────────────────────────────────────────────────────┐');
  console.log('\x1b[1;32m%s\x1b[0m', '│         RUNNING REAL WORLD API SERVER                    │');
  console.log('\x1b[1;32m%s\x1b[0m', '└──────────────────────────────────────────────────────────┘');
  console.log('\x1b[1;32m%s\x1b[0m', '┌──────────────────────────────────────────────────────────┐');
  console.log('\x1b[32m%s\x1b[0m',   `│         API:  http://localhost:${CONFIG.PORT}/api        │`);
  console.log('\x1b[1;32m%s\x1b[0m', '└──────────────────────────────────────────────────────────┘');
});
