var app = angular.module("myApp", []);

app.controller("mascotasCtrl", function($scope) {
	$scope.perros = ["pirinolo", "pinki", "bambi", "maiko", "pelusa"];
	$scope.gatos = ["camila", "tamit", "thaisha", "anubis"];
});