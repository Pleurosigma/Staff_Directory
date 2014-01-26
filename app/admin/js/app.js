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
		.when('/addPerson', {
			templateUrl: 'partials/addPerson.html',
			controller: 'AddPersonCtrl'
		})
		.when('/editPerson', {
			templateUrl: 'partials/editPerson.html',
			controller: 'EditPersonCtrl'
		})
		.when('/addUser', {
			templateUrl: 'partials/addUser.html',
			controller: 'AddUserCtrl'
		})
		.when('/deleteUser', {
			templateUrl: 'partials/deleteUser.html',
			controller: 'DeleteUserCtrl'
		})
		;
	$routeProvider.otherwise( {
			redirectTo: '/dashboard'
		});
}]);
