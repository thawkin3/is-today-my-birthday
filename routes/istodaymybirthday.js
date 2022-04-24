const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.json({ data: 'No date provided' });
});

router.get('/:date', function (req, res) {
  const isTodayMyBirthday = req.params.date === '04-20-1990';
  res.json({ data: isTodayMyBirthday });
});

module.exports = router;
