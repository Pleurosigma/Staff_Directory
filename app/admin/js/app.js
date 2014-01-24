'use strict';


// Declare app level module which depends on filters, and services
angular.module('staffDirectoryAdmin', [
  'ngRoute',
  'staffDirectoryAdmin.filters',
  'staffDirectoryAdmin.services',
  'staffDirectoryAdmin.directives',
  'staffDirectoryAdmin.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'DashboardCtrl'
		})
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
			redirectTo: '/dashboard'
		});
}]);
