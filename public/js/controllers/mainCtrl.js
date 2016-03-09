/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ['WeatherService']).controller('MainController', function($scope, $http, Upload) {
    $scope.tagline = 'Visualize your weather data like never before!';

    $scope.filesChanged = function(elm){
        $scope.files = elm.files;
        $scope.$apply();
    };

    $scope.submit = function () {
        if ($scope.form.file.$valid && $scope.file){
            $scope.upload($scope.file)
        }
    };

    $scope.upload = function (file) {
        Upload.upload({
            url: '/api/weather',
            data: {file: file, 'name': $scope.name}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };

    $scope.uploadCustom = function(){
        var fd = new FormData();
        fd.append('name', $scope.form_data.name);
        angular.forEach($scope.form_data.csv, function(file){
            fd.append('csv', file)
        });
        console.log(fd);
        $http.post('/api/weather', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type':undefined}
        }).success(function(d){
            console.log(d);
        });
    }
});