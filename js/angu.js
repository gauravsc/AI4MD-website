var myApp = angular.module('myApp', [
  'ngRoute'
])

myApp.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl : 'home.html',
    }).when('/team' , {
      templateUrl: 'team.html'
    }).when('/contact' , {
      templateUrl: 'contact.html'
    }).otherwise({
      redirectTo : '/home'
    });
  }
]);