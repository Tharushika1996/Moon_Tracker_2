const express = require('express');
const app = express();
app.use(express.json());

let agents = [];

app.get('/agents', (req, res) => {
  res.json(agents);
});

app.post('/agents', (req, res) => {
  const agent = req.body;
  agents.push(agent);
  res.status(201).json(agent);
});

app.listen(3000, () => {
  console.log('Agent Service running on port 3000');
});
