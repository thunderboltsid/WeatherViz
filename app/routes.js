/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// app/routes.js

// grab the weather model we just created
var Weather = require('./models/weather');
var Dataset = require('./models/dataset');
var csv = require('ya-csv');

module.exports = function (app) {

    // server routes
    // handle things like api calls
    // authentication routes

    // api route GET weather data
    app.get('/api/weather', function (req, res) {
        Weather.find(function (err, weather) {
            if (err)
                res.send(err);
            res.json(weather); // return all weather data in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    app.post('/api/weather', function (req, res) {
        var dataset_name = req.body.name;
        var dataset_csv = req.files.csv;
        var reader = csv.createCsvFileReader(dataset_csv.path, {
            'separator': ',',
            'quote': '',
            'escape': '',
            'comment': ''
        });
        var dataset = Dataset({
            _id: mongoose.Types.ObjectId(),
            name: dataset_name
        });
        dataset.save(function (err) {
            if (err) throw err;
            console.log("Dataset created with object id: " + dataset._id)
        });
        reader.addListener('data', function (data) {
            var weather = Weather({
                dataset_id: dataset._id,
                datetime: new Date(data[0]),
                pressure: {data:parseFloat(data[1])},
                rainfall: {data:parseFloat(data[2])},
                wind: {data:parseFloat(data[3])},
                wind_direction: {data:parseFloat(data[4])},
                surface_temperature: {data:parseFloat(data[5])},
                relative_humidity: {data:parseFloat(data[6])},
                solar_flux: {data:parseFloat(data[7])},
                battery: {data:parseFloat(data[8])}
            });
            weather.save(function (err) {
                if (err) throw err;
                console.log("Weather save for dataset: " + weather.dataset_id);
            })
        });
        res.json({dataset_id: dataset._id});
    });

    // frontend routes
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};