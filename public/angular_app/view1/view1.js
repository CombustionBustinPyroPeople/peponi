'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'MainCtrl as main'
  });
}])

.controller('MainCtrl', ['uiGmapGoogleMapApi',function(uiGmapGoogleMapApi) {
  var vm = this;
  uiGmapGoogleMapApi.then(function(maps) {
    vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
}]);