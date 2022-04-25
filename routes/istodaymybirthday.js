const format = require('date-fns/format');
const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  if (!req.query.birthday) {
    return res.json({ data: 'Please provide your birthdate' });
  }

  const todaysDate = new Date(req.query.today) || new Date();
  const birthDate = new Date(req.query.birthday);

  const todaysMonthAndDay = format(todaysDate, 'MM-dd');
  const birthdayMonthAndDay = format(birthDate, 'MM-dd');

  const isTodayMyBirthday = todaysMonthAndDay === birthdayMonthAndDay;

  return res.json({ data: isTodayMyBirthday });
});

module.exports = router;
