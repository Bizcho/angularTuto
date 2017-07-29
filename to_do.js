var app = angular.module("to_do", []);

app.controller("ctrl", function($scope) {
    $scope.item = "";
    $scope.items = ["plop", "plop", "plop"];

    $scope.agregar = function(item){
		$scope.items.push(item);
    };

});