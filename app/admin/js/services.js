'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var staffDirectory = angular.module('staffDirectoryAdmin.services', []);

staffDirectory.value('version', '0.1');

staffDirectory.service('$fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}]);

staffDirectory.service('$userTools', [function() {
    this.isDevAdmin = function(user) {
        return user.permissionLevel == 0;
    };
    this.isSuperAdmin = function(user) {
        return user.permissionLevel <= 1;
    };
    this.isAdmin = function(user) {
        return user.permissionLevel <= 2;
    };
}]);
