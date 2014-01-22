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
		.when('/directory', {
				templateUrl: 'partials/admin/directory.html',
				controller: 'DirectoryCtrl'
		})
		.when('/contact', {
			templateUrl: 'partials/admin/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/admin', {
			templateUrl: 'partials/admin/admin.html',
			controller: 'AdminCtrl'
		});
	$routeProvider.otherwise( {
			redirectTo: '/directory'
		});
}]);
