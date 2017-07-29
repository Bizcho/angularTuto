var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
	$scope.miMascota = "gato";
	$scope.miColor = "negro";
});

app.controller("myOtherCtrl", function($scope) {
	$scope.miMascota = "perro";
	$scope.miColor = "blanco";
});