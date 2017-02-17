angular.module('app', ['ngRoute'])
.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'public/views/home.html',
		controller: 'homectrl',
		//controllerAs: "$ctrl"
	}).otherwise({ redirectTo: '/' });
}])

