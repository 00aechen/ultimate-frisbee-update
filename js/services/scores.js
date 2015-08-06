app.factory('scores', function($q, $timeout, $http) {
	var Scores = {
		getScores : function(callback) {
			var deferred = $q.defer();

			$timeout(function() {
                $http.get('../../data/scores.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
		}
	}

	return Scores;
});