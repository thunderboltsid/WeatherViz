/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// app/routes.js

// grab the weather model we just created
var Weather = require('./models/weather');

module.exports = function(app) {

    // server routes
    // handle things like api calls
    // authentication routes

    // api route GET all weather data
    app.get('/api/weathers', function(req, res) {
        Weather.find(function(err, weathers) {
            if (err)
                res.send(err);
            res.json(weathers); // return all weather data in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};