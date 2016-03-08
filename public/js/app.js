/**
 * Created by Siddharth Shukla on 3/7/16.
 */

angular
    .module('weatherViz', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'appRoutes', 'MainCtrl', 'WeatherCtrl', 'WeatherService'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default');
    });