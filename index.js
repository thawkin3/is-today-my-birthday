const express = require('express');
const path = require('path');

const isTodayMyBirthdayRoutes = require('./routes/istodaymybirthday.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/istodaymybirthday', isTodayMyBirthdayRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Is Today My Birthday listening at http://localhost:${port}`);
});
