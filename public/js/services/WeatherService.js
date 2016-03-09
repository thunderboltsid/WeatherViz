/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/services/WeatherService.js
angular.module('WeatherService', []).factory('Weather', ['$http', function($http) {

    return {
        // call to get all weathers
        get : function(id) {
            return $http.get('/api/weathers/'+id);
        },


        // call to POST and create a new weather
        create : function(weatherData) {
            return $http.post('/api/weathers', weatherData);
        }

    }

}]);