angular.module("myApp", ["ngAnimate"])
	    
.controller("myCtrl", function($scope, $http) {
    //ajax request for retrieving portfolio data
    $http.get("../portfolios.json")
    .success(function(data) {
	    $scope.portfolios = data;
    })
    .error(function() {
	    $scope.dataError = true;
    });
    
    $scope.itemSearch = function(resultsLength) {
	    if(resultsLength === 0) {
			return "No results found...";
	    }
	    else if(resultsLength === 1) {
		    return String(resultsLength) + " item was searched.";
	    }
	    else {
		    return String(resultsLength) + " items were searched.";
	    }
	};
});