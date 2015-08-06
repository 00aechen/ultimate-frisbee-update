app.controller('DefaultScoreController', function($scope, $location, scores) {
    scores.getScores().then(function(data) {

        $scope.data = data;
        $scope.detail = data.season[0];
        // console.log(data);

    	$scope.activeIndex = 0;

    	$scope.setActive = function(index) {
    		$scope.activeIndex = index;
    	}
        
    });
});