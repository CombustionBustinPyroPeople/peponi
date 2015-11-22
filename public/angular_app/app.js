'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'uiGmapgoogle-maps'
]).
config(['$routeProvider', 'uiGmapGoogleMapApiProvider',function($routeProvider, uiGmapGoogleMapApiProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
  uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}]);
