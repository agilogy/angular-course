'use strict';

angular
.module('angularCourseApp', [
  'ngSanitize',
  'ngRoute',
  'mgcrea.ngStrap'
])

.value('$anchorScroll', angular.noop)

.directive('prettyprint', function(){
  // Runs during compile
  return {
    controller: function($scope, $element) {
      $element.addClass('prettyprint');
      prettyPrint();
    }
  };
})

.config(function ($routeProvider) {
  
  $routeProvider
    // .when('/', {
    //   templateUrl: 'views/main.html',
    //   controller: 'MainCtrl'
    // })
    .otherwise({
      redirectTo: '/'
    });
})

;