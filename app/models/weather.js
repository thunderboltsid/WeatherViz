/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// app/models/weather.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our weather model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Weather', {
    datetime: {type: Date, default: Date.now()},
    pressure: {type: Number, default: 1013.25},
    pressure_unit: {type: String, default: 'mBar'},
    rainfall: {type: Number, default: 0},
    rainfall_unit: {type: String, default: 'mm'},
    wind: {type: Number, default: 0},
    wind_unit: {type: String, default: 'm/s'},
    wind_direction: {type: Number, default: 0},
    wind_direction_unit: {type: String, default: 'degrees'},
    surface_temperature: {type: Number, default: 0},
    surface_temperature_unit: {type: String, default: 'C'},
    relative_humidity: {type: Number, default: 100},
    relative_humidity_unit: {type: String, default: '%'},
    solar_flux: {type: Number, default: 0},
    solar_flux_unit: {type: String, default: 'Kw/m2'},
    battery: {type: Number, default: 0},
    battery_unit: {type: String, default: 'V'}
});
