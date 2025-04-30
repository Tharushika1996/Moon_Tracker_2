const express = require('express');
const app = express();
app.use(express.json());

app.post('/notify', (req, res) => {
  const { team, message } = req.body;
  console.log(`Notification for ${team}: ${message}`);
  res.status(200).json({ status: 'Notification sent' });
});

app.listen(3002, () => {
  console.log('Notification Service running on port 3002');
});
