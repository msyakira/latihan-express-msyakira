var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

router.get('/paketwisata', function(req, res, next) {
  res.render('paketwisata', { title: 'paketwisata' });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Pwmwsanan' });
});

router.post('/orderdetail', function(req, res, next) {
  res.render('orderdetail', { title: 'Detail Pemesanan Paket Wisata' });
});



module.exports = router;
