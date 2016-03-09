/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/controllers/WeatherCtrl.js
angular.module('WeatherCtrl', ['WeatherService']).controller('WeatherController', function($scope, $http) {
    $scope.tagline = 'Let us visualize your stuff';
    $scope.visualize = false;

    $scope.submit = function(){
        $http.get('/api/weather/'+ $scope.dataset_id).then(function (res) {
            $scope.data = res;
            console.log(res);
            $scope.viz();
        });
    };

    $scope.viz = function(){
        $scope.data.forEach(function (d) {
            d.date = parseDate(d.datetime);
        });
        var ndx = crossfilter($scope.data);
        var dateDim = ndx.dimension(function(d) {
            return d.date;
        });
        var presDim = ndx.dimension(function(d){
            return d.pressure.data;
        });
        var rainDim = ndx.dimension(function(d){
            return d.rainfall.data;
        });
        var rhumDim = ndx.dimension(function(d){
            return d.relative_humidity.data;
        });
        var solDim = ndx.dimension(function(d){
            return d.solar_flux.data;
        });
        var tempDim = ndx.dimension(function(d){
            return d.solar_flux.data;
        });
        var windDim = ndx.dimension(function(d){
            return d.wind.data;
        });
        var winddDim = ndx.dimension(function(d){
            return d.wind_direction.data;
        });
        var battDim = ndx.dimension(function(d){
            return d.battery.data;
        });
    };

    var parseDate = d3.time.format("%m%d%Y").parse;

});