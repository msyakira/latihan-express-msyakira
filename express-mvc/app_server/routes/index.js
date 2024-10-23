var express = require('express');
var router = express.Router();

const mainController =require("../controllers/main")
/* GET home page. */
//router.get('/', mainController.index);

//buat route ke halaman kontak (/kontak) dengan method get
//router.get('/kontak', mainController.kontak);

const mhsController = require('../controllers/mahasiswa');
router.get("/", mhsController.index); //list mahasiswa
router.post("/insert", mhsController.insert); //insert mahasiswa
router.patch("/update/:id", mhsController.update); //mengupdate mahasiswa
router.get("/show/:id", mhsController.show); //show detail mahasiswa by id
router.delete("/delete/:id", mhsController.destroy); //delete mahasiswa by id

module.exports = router;
