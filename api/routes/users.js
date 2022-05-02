var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/balance', function (req, res, next) {
  res.send('respond with a balance');
});

router.get('/spend-limit', function (req, res, next) {
  res.send('respond with a spend');
});

module.exports = router;
