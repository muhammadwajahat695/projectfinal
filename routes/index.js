var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/product', function (req, res, next) {
  res.send(["a", "b", "c"])
});
module.exports = router;
