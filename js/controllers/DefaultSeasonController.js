app.controller('DefaultSeasonController', function($scope, $routeParams, rosters) {
    rosters.getRosters().then(function(data) {

        $scope.data = data;
        $scope.detail = data.season[3]; // this year

        // console.log($scope.detail.year);
        // console.log($scope.data);

        // selected button code
        $scope.selectedIndex = 3;

        $scope.select = function(ind){
            if( ind === $scope.selectedIndex ){
                $scope.selectedIndex = -1;
            } else{
                $scope.selectedIndex = ind;
            }
        }

        $scope.getClass = function(ind){
            if( ind === $scope.selectedIndex ){
                return "btn-primary";
            } else{
                return "";
            }
        }
    });
});