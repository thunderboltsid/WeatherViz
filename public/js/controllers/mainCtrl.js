/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {
    $scope.tagline = 'Visualize your weather data like never before!';
    $scope.filesChanged = function(elm){
        $scope.files = elm.files;
        $scope.$apply();
    }
});