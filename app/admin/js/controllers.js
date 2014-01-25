'use strict';

/* Controllers */

'use strict';

/* Controllers */

var staffDirectory = angular.module('staffDirectoryAdmin.controllers', []);

staffDirectory.controller('DashboardCtrl', ['$scope',
	function($scope) {
		$scope.dashboardClass='active';
	}]);

staffDirectory.controller('AddStaffCtrl', ['$scope', 
	function($scope) {
		$scope.addStaffClass='active';
		$scope.editStaff = function() {
			console.log($scope.staff);
		}
	}]);