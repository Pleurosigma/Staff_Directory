'use strict';

/* Controllers */

'use strict';

/* Controllers */

var staffDirectory = angular.module('staffDirectory.controllers', []);

staffDirectory.controller('DirectoryCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.directoryClass = 'active';
		$scope.persons = [];
		$scope.divisions = [];
		$scope.staffLevels = [];
		$scope.personOrder = 'personId';

		var setPersonsDivisions = function() {
			_.each($scope.persons, function(person) {
				var division = _.find($scope.divisions, function(division) {
					return division.divisionId == person.divisionId;
				});
				var staffLevel = _.find($scope.staffLevels, function(staffLevel) {
					return staffLevel.staffLevelId == person.staffLevelId;
				});
				person.division = division;
				person.staffLevel = staffLevel;
			});
		}
		$http.get('/app/json/person.json').success(function(data) {
			$scope.persons = data;
			if($scope.divisions.length != 0 && $scope.staffLevels.length != 0) {
				setPersonsDivisions();
			}
		});
		$http.get('/app/json/division.json').success(function(data) {
			$scope.divisions = data;
			if($scope.persons.length != 0 && $scope.staffLevels.length != 0) {
				setPersonsDivisions();
			}
		});
		$http.get('/app/json/staffLevel.json').success(function(data) {
			$scope.staffLevels = data;
			if($scope.persons.length != 0 && $scope.divisions.length !=0) {
				setPersonsDivisions();
			}
		});
	}]);

staffDirectory.controller('PersonDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$scope.directoryClass = 'active';
		$scope.person = {};
		$http.get('/app/json/person.json').success(function(data) {
			$scope.person = _.find(data, function(person) {
				return person.personId == $routeParams.personId;
			});
		});
	}]);

staffDirectory.controller('ContactCtrl', ['$scope',
	function($scope) {
		$scope.contactClass = 'active';
	}]);

staffDirectory.controller('LoginCtrl', ['$scope',
	function($scope) {
		$scope.loginClass = 'active';
	}]);
