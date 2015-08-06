app.controller('DefaultSeasonController', function($scope, $routeParams, rosters) {
    rosters.getRosters().then(function(data) {

        $scope.data = data;
        $scope.detail = data.season[0]; // this year

        // console.log($scope.detail.year);
        // console.log($scope.data);

        $scope.activeIndex = 0;

        $scope.setActive = function(index) {
            $scope.activeIndex = index;
        }
    });
});