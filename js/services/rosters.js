app.factory('rosters', function($q, $timeout, $http) {
	var Rosters = {
		getRosters : function(callback) {
			var deferred = $q.defer();

			$timeout(function() {
                $http.get('../../data/roster.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
		}
	}

	return Rosters;
});