/**
 * Created by Siddharth Shukla on 3/7/16.
 */

angular
    .module('weatherVis', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'appRoutes', 'MainCtrl', 'WeatherCtrl', 'WeatherService', 'fileInputDirective'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default');
    });