const Place = require('../models/Weapon');

function createWeapon(req, res) {
  const newWeapon = new Place({
    name: req.body.name,
    type: req.body.type,
    model: req.body.model,
    caliber: req.body.caliber,
    clipsize: req.body.clipsize,
    originPlace: {
      lat: req.body.originPlace.lat,
      long: req.body.originPlace.long
    }
  });

  newWeapon.save()
    .then(function(result){
      res.json({
        message: 'Arma creada correctamente'
      })
    })
    .catch(function(err){
      res.json({
        error: err
      })
    })
}

module.exports = createWeapon;

/*
    name: String,
    type: String,
    model: String,
    caliber: String,
    clipsize: String,
    originPlace: {
        lat: Number,
        long: Number
    }
*/