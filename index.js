const express = require('express');

const isTodayMyBirthdayRoutes = require('./routes/istodaymybirthday.js');

const app = express();
const port = process.env.PORT || 3000;

app.use('/istodaymybirthday', isTodayMyBirthdayRoutes);

app.get('/', (req, res) => {
  res.send(
    'Welcome to Is Today My Birthday, the best, easiest, and fastest way to determine if today is your birthday.'
  );
});

app.listen(port, () => {
  console.log(`Is Today My Birthday listening at http://localhost:${port}`);
});
