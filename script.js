var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.base = 1;
    $scope.altura = 1;
    $scope.perimetro = 0;
    $scope.area = 0;

    $scope.calcular = function(){
    	$scope.perimetro = ($scope.base + $scope.altura) * 2;
    	$scope.area = ($scope.base * $scope.altura);
    };

});