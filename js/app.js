var app = angular.module('Roster', ['ngRoute']);

app.config(function ($routeProvider)
{
	$routeProvider.when('/', {
		templateUrl: 'views/seasonRoster.html'
	})
	.when('/:id', {
		controller: 'RosterController',
		templateUrl: 'views/seasonRoster.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});