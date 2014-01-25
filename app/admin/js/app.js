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
		.when('/addStaff', {
			templateUrl: 'partials/addStaff.html',
			controller: 'AddStaffCtrl'
		})
		;
	$routeProvider.otherwise( {
			redirectTo: '/dashboard'
		});
}]);
