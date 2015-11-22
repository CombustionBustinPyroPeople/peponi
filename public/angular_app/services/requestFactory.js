'use strict';
angular.module('myApp.services', [])
.factory('RequestFactory', ['$http',function($http) {
  var RequestFactory = {};
  //This endpoint should give me an array of ALL possible preferences
  RequestFactory.getAllPossiblePreferences = function(){
    return $http({
      method: 'GET',
      url: '/api/shipments',
    }).then(function(res){
      console.log('got shipments data!');
      console.log('shipments data: ', res.data);
      return res.data;
    },function(error) {
      console.log('problem getting shipments data: ',error);
      return;
    });
  };
  
  return RequestFactory;
}]);
