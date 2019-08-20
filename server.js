const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const apiFile = require('./apiFolder')
app.use('/api', apiFile)

app.listen(process.env.PORT, function(){
    console.log(`Iniciando servidor en ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}`)
});

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(function(result) {
    console.log('connected with mongo');
  })
  .catch(function(err){
    console.log(err);
  })