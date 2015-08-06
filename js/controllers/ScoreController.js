app.controller('ScoreController', function($scope, $routeParams, scores) {
    scores.getScores().then(function(data) {

        $scope.data = data;
        
        if ($routeParams.id >= data.season.length || $routeParams.id < 0)
        	$scope.detail = data.season[0];
        else
        	$scope.detail = data.season[$routeParams.id];

    });
});