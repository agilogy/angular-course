'use strict';

angular
.module('angularCourseApp', [
  'ngSanitize',
  'ngRoute',
  'mgcrea.ngStrap',
  'hljs'
])

.value('$anchorScroll', angular.noop)

.config(function () {
  // $routeProvider
  //   .when('/', {
  //     templateUrl: 'views/main.html',
  //     controller: 'MainCtrl'
  //   })
  //   .otherwise({
  //     redirectTo: '/'
  //   });
})

;