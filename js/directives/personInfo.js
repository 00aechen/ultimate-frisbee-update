app.directive('personInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      person: '=' 
    }, 
    templateUrl: 'js/directives/personInfo.html'
  }; 
});