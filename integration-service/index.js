const express = require('express');
const app = express();
app.use(express.json());

app.post('/sales', (req, res) => {
  const { agentCode, product, amount } = req.body;
  console.log(`Received sale: ${agentCode} sold ${product} for ${amount}`);
  res.status(200).json({ message: 'Sale received' });
});

app.listen(3001, () => {
  console.log('Integration Service running on port 3001');
});
