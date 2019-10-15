const mongoose = require('mongoose');

const weaponSchema = mongoose.Schema({
    name: String,
    type: String,
    model: String,
    caliber: String,
    clipsize: String,
    originPlace: {
        lat: String,
        long: String
    }
});



module.exports = mongoose.model('Weapon', weaponSchema)