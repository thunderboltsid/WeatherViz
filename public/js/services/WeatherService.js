/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/services/WeatherService.js
angular.module('WeatherService', []).factory('Weather', ['$http', function($http) {

    return {
        // call to get weather
        get : function(id) {
            return $http.get('/api/weather/'+id);
        },


        // call to POST and create a new weather
        create : function(weatherData) {
            return $http.post('/api/weather', weatherData);
        }

    }

}]);