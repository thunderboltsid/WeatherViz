/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/weathers', {
            templateUrl: 'views/weather.html',
            controller: 'WeatherController'
        });

    $locationProvider.html5Mode(true);

}]);