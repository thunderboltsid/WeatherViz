/**
 * Created by Siddharth Shukla on 3/7/16.
 */

angular
    .module('weatherViz', ['ngMaterial', 'ngRoute', 'appRoutes', 'MainCtrl', 'WeatherCtrl', 'WeatherService'])
    .config(function ($mdThemingProvider, $mdIconProvider) {
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 512);
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    });