/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// app/models/weather.js
// grab the mongoose module
var mongoose = require('mongoose');
var weather = require('./weather');
var Schema = mongoose.Schema;

// define our weather model
// module.exports allows us to pass this to other files when it is called
var datasetSchema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    name: {type: String, default: "Slurm"}
});

datasetSchema.pre('save', function (next) {
    this.created_at = new Date();
    next();
});

var Dataset = mongoose.model('Dataset', datasetSchema);

module.exports = Dataset;
