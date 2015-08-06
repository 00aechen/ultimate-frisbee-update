var app = angular.module('Score', ['ngAnimate','ngRoute']);

app.config(function ($routeProvider)
{
	$routeProvider.when('/', {
		templateUrl: 'views/seasonScore.html'
	})
	.when('/:id', {
		controller: 'ScoreController',
		templateUrl: 'views/seasonScore.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});