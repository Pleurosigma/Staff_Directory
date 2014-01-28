'use strict';

/* Controllers */

var staffDirectory = angular.module('staffDirectoryAdmin.controllers', []);

staffDirectory.controller('AdminCtrl', ['$scope', '$http', '$userTools',
	function($scope, $http, $userTools) {
		$http.get('/app/json/me.json').success(function(data) {
			if(!$userTools.isAdmin(data)){
				window.location = '/app/index.html';
			}
		});
	}]);

staffDirectory.controller('DashboardCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.dashboardClass='active';
		$scope.me = {};
		$http.get('/app/json/me.json').success(function(data) {
			$scope.me = data;
		});
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

staffDirectory.controller('NavCtrl', ['$scope', '$http', '$userTools',
	function($scope, $http, $userTools) {
		$scope.me = {};
		$http.get('/app/json/me.json').success(function(data) {
			$scope.me = data;
		});

		$scope.isSuperAdmin = function() {
			return $userTools.isSuperAdmin($scope.me);
		};

		$scope.isDevAdmin = function() {
			return $userTools.isDevAdmin($scope.me);
		}
	}]);