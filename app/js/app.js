'use strict';


// Declare app level module which depends on filters, and services
angular.module('staffDirectory', [
  'ngRoute',
  'staffDirectory.filters',
  'staffDirectory.services',
  'staffDirectory.directives',
  'staffDirectory.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/directory', {
				templateUrl: 'partials/directory.html',
				controller: 'DirectoryCtrl'
		})
		.when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/admin', {
			templateUrl: 'partials/admin.html',
			controller: 'AdminCtrl'
		});
	$routeProvider.otherwise( {
			redirectTo: '/directory'
		});
}]);
