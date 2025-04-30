const express = require('express');
const app = express();
app.use(express.json());

app.get('/aggregate', (req, res) => {
  // Simulate aggregation
  const report = {
    topTeams: ['Team Alpha', 'Team Beta'],
    topProducts: ['Term Life', 'Retirement Plan'],
    branchPerformance: [
      { branch: 'Singapore Central', sales: 150000 },
      { branch: 'East Coast', sales: 120000 }
    ]
  };
  res.json(report);
});

app.listen(3003, () => {
  console.log('Aggregator Service running on port 3003');
});
