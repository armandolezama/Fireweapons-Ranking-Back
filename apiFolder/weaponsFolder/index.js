const express = require('express');
const router = express.Router();

//Métodos
const getWeapons = require('./getWeapons');
const editWeapons = require('./editWeapons');
const createWeapons = require('./createWeapons');
const removeWeapons = require('./removeWeapons');

//route.método
router.get('/getW', getWeapons);
router.post('/postW', createWeapons);
router.put('/putW', editWeapons);
router.delete('/removeW', removeWeapons);

module.exports = router;