import express from 'express';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Welcome to the Real World API!');
});

// prettier-ignore
app.listen(3001, () => {
  console.log('\x1b[1;32m%s\x1b[0m', '┌──────────────────────────────────────────────────────────┐');
  console.log('\x1b[1;32m%s\x1b[0m', '│         RUNNING REAL WORLD API SERVER                    │');
  console.log('\x1b[1;32m%s\x1b[0m', '└──────────────────────────────────────────────────────────┘');
  console.log('\x1b[1;32m%s\x1b[0m', '┌──────────────────────────────────────────────────────────┐');
  console.log('\x1b[32m%s\x1b[0m',   '│         API:  http://localhost:3001/api                  │');
  console.log('\x1b[1;32m%s\x1b[0m', '└──────────────────────────────────────────────────────────┘');
});
