/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// app/models/weather.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our weather model
// module.exports allows us to pass this to other files when it is called
var weatherSchema = new Schema({
    dataset_id: {type: Schema.Types.ObjectId},
    datetime: {type: Date, default: Date.now()},
    pressure: {
        data: {type: Number, default: 1013.25},
        unit: {type: String, default: 'mBar'}
    },
    rainfall: {
        data: {type: Number, default: 0},
        unit: {type: String, default: 'mm'}
    },
    wind: {
        data: {type: Number, default: 0},
        unit: {type: String, default: 'm/s'}
    },
    wind_direction: {
        data: {type: Number, default: 0},
        unit: {type: String, default: 'degrees'}
    },
    surface_temperature: {
        data: {type: Number, default: 0},
        unit: {type: String, default: 'C'}
    },
    relative_humidity: {
        data: {type: Number, default: 100},
        unit: {type: String, default: '%'}
    },
    solar_flux: {
        data: {type: Number, default: 0},
        unit: {type: String, default: 'Kw/m2'}
    },
    battery: {
        data: {type: Number, default: 0},
        unit: {type: String, default: 'V'}
    }
});

var Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
