'use strict';

angular
.module('angularCourseApp', [
  'ngSanitize',
  'ngRoute',
  'mgcrea.ngStrap'
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