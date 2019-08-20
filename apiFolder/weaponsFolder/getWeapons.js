const Weapons = require('../models/Weapon')

function getWeapons(req, res){
    Weapons.find().then(function(docs){
        res.json({
          weapons: docs
        })
      }).catch(function(err) {
        res.json({
          error: err
        })
      })
}

module.exports = getWeapons;