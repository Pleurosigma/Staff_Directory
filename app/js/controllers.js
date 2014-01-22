'use strict';

/* Controllers */

'use strict';

/* Controllers */

var staffDirectory = angular.module('staffDirectory.controllers', []);

staffDirectory.controller('DirectoryCtrl', ['$scope',
	function($scope) {
		$scope.directoryClass = 'active';
	}]);

staffDirectory.controller('ContactCtrl', ['$scope',
	function($scope) {
		$scope.contactClass = 'active';
	}]);

staffDirectory.controller('AdminCtrl', ['$scope',
	function($scope) {
		$scope.adminClass = 'active';
	}]);
