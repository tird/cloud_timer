(function() {
'use strict';
angular.module('timerApp')
.controller('ArchiveController', ['$scope', 'TasksService', 'timeFormatFilter',
function($scope, TasksService, timeFormatFilter){
	
	$scope.addTaskFromArchive = function(index){
			TasksService.addTask($scope.archive[index], index);
	};	
	$scope.deleteFromArchive = function(index){
			TasksService.removeArchive(index);
	};
  
	$scope.archive = TasksService.getArchiveList();
}]);
})();