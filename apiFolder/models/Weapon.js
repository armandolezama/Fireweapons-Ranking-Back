const mongoose = require('mongoose');

const weaponSchema = mongoose.Schema({
    name: String,
    type: String,
    model: String,
    caliber: String,
    clipsize: String,
    originPlace: {
        lat: Number,
        long: Number
    }
});



module.exports = mongoose.model('Weapon', weaponSchema)