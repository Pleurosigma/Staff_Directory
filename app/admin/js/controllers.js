'use strict';

/* Controllers */

var staffDirectory = angular.module('staffDirectoryAdmin.controllers', []);

staffDirectory.controller('DashboardCtrl', ['$scope',
	function($scope) {
		$scope.dashboardClass='active';
	}]);

staffDirectory.controller('AddPersonCtrl', ['$scope', 
	function($scope) {
		$scope.addPersonClass='active';
		$scope.personFormPrimaryButtonValue='add';
		$scope.personFormPrimarySubmit = function() {
			console.log($scope.person);
		}
	}]);

staffDirectory.controller('EditPersonCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.editPersonClass='active';
		$scope.personFormPrimaryButtonValue='edit';
		$scope.personFormDangerButtonValue='delete';
		$scope.parentFormShowDangerButton = true;
		$scope.personOrder = 'personId';
		$scope.persons = [];

		$http.get('/app/json/person.json').success(function(data) {
			$scope.persons = data;
		});

		$scope.selectPerson = function(person){
			$scope.person = person
		};


		$scope.personFormPrimarySubmit = function() {
			console.log($scope.person);
		}
	}]);

staffDirectory.controller('AddUserCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.addUserClass='active';
		$scope.persons = [];

		$http.get('/app/json/person.json').success(function(data) {
			$scope.persons = data;
		});
	}]);

staffDirectory.controller('DeleteUserCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.deleteUserClass='active';
		$scope.users = [];
		$http.get('/app/json/user.json').success(function(data) {
			$scope.users = data;
		})
	}]);