/**
 * Created by Siddharth Shukla on 3/7/16.
 */

// public/js/controllers/WeatherCtrl.js
angular.module('WeatherCtrl', ['WeatherService']).controller('WeatherController', function ($scope, $http) {
    $scope.tagline = 'Let us visualize your stuff';
    $scope.visualize = false;

    $scope.submit = function () {
        $http.get('/api/weather/' + $scope.dataset_id).then(function (res) {
            $scope.viz(res);
        });
    };


    function line_chart_temp(dim, grp) {
        var temp_line_chart = dc.lineChart("#chart-line-temp");
        var minDate = dim.bottom(2)[0].date;
        var maxDate = dim.top(1)[0].date;
        var dateFormat = d3.time.format('%m/%d/%Y');
        temp_line_chart.width(800).height(400)
            .dimension(dim)
            .margins({top: 10, right: 10, bottom: 20, left: 40})
            .transitionDuration(500)
            .elasticY(true)
            .elasticX(true)
            .brushOn(false)
            .group(grp, "Daily Temperature minimum")
            .valueAccessor(function (d) {
                return d.value.min ? d.value.min : 0;
            })
            .stack(grp, "Daily Temperature maximum", function (d) {
                return d.value.max ? d.value.max : 0;
            })
            .stack(grp, "Daily Temperature median", function (d) {
                return d.value.median ? d.value.median : 0;
            })
            .colors(['blue', 'green', 'red'])
            .x(d3.time.scale().domain([minDate, maxDate]))
            .y(d3.scale.linear().domain([]))
            .yAxisLabel("Temperature")
            .xAxisLabel("Date")
            .title(function (d) {
                return "Temperature Peaks on " + dateFormat(d.data.key) + "- Min: " + d.data.value.min + ", Max: " + d.data.value.max + ", Median:" + d.data.value.median;
            })
            .mouseZoomable(true)
            .renderHorizontalGridLines(true)
            .renderArea(true);
        dc.renderAll();
    }

    $scope.viz = function (res) {
        $scope.visualize = true;
        data = res.data;
        console.log(data);
        data.forEach(function (d) {
            var temp = new Date(d.datetime);
            d.date = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate());
        });
        var ndx = crossfilter(data);
        var all = ndx.groupAll();
        var dateDim = ndx.dimension(function (d) {
            return d.date;
        });
        var tempGroup = dateDim.group();
        //.reduceSum(function(d){return d.surface_temperature.data;});
        reductio().min(function (d) {
                return d.surface_temperature.data;
            })
            .max(function (d) {
                return d.surface_temperature.data;
            })
            .median(function (d) {
                return d.surface_temperature.data;
            })
            (tempGroup);

        var presDim = ndx.dimension(function (d) {
            return d.pressure.data;
        });
        var rainDim = ndx.dimension(function (d) {
            return d.rainfall.data;
        });
        var rhumDim = ndx.dimension(function (d) {
            return d.relative_humidity.data;
        });
        var solDim = ndx.dimension(function (d) {
            return d.solar_flux.data;
        });
        var tempDim = ndx.dimension(function (d) {
            return d.solar_flux.data;
        });
        var windDim = ndx.dimension(function (d) {
            return d.wind.data;
        });
        var winddDim = ndx.dimension(function (d) {
            return d.wind_direction.data;
        });
        var battDim = ndx.dimension(function (d) {
            return d.battery.data;
        });
        var min_temp_group = dateDim.group().reduceSum(function (d) {
            return d.surface_temperature.data;
        });

        line_chart_temp(dateDim, tempGroup);
    };


});