app.controller('RosterController', function($scope, $routeParams, rosters) {
    rosters.getRosters().then(function(data) {
        
        $scope.data = data;
        $scope.detail = data.season[$routeParams.id];
        
    })
});