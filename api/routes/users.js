var express = require('express');
var router = express.Router();

/* GET static user. */
router.get('/', function (req, res, next) {
  res.send({
    firstName: 'Mark',
    lastName: 'Henry',
    email: 'markhenty@aspireapp.com',
    image: 'https://img.icons8.com/stickers/100/000000/user.png',
  });
});

//get random balance
router.get('/balance', function (req, res, next) {
  let balance = Math.random() * 888;
  res.send({balance});
});

//get random spend limit
router.get('/spend-limit', function (req, res, next) {
  let limit = Math.random() * 1000;
  res.send({limit});
});

module.exports = router;
