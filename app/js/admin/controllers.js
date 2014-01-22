'use strict';

/* Controllers */

'use strict';

/* Controllers */

var staffDirectory = angular.module('staffDirectoryAdmin.controllers', []);

staffDirectory.controller('DirectoryCtrl', ['$scope',
	function($scope) {
		$scope.test = 'nav.html';
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
