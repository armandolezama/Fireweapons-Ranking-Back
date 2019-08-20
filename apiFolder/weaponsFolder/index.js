const express = require('express');
const router = express.Router();

//Métodos
const getWeapons = require('./getWeapons')

//route.método
router.get('/', getWeapons)

module.exports = router;