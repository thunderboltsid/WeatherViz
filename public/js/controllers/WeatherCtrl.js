/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/controllers/WeatherCtrl.js
angular.module('WeatherCtrl', ['WeatherService']).controller('WeatherController', function($scope, $http) {
    $scope.tagline = 'Let us visualize your stuff';

    $scope.submit = function(){
        $http.get('/api/weather/'+ $scope.dataset_id).then(function (res) {
            $scope.data = res;
            console.log(res);
            $scope.visualize();
        });
    };

    $scope.visualize = function(){
    }

});