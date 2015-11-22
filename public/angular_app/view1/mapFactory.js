//this factory will manage the bulk of shipment data
"use strict";
angular.module('myApp.view1').factory("MapFactory", 
  ['uiGmapGoogleMapApi', function(uiGmapGoogleMapApi){
  var MapFactory = {};

  //grab and map?? (dunno if i wanna map them) the array of shipments.
  //will add other stuff later if needed
  //currently centered on the geographic center of the US
  MapFactory.map = { center: { latitude: 39, longitude: -98 }, zoom: 5 };
  MapFactory.formatMarkers = function(shipments){
    return _.map(shipments, function(shipment, index){
      console.log("shipments in hurr: ", shipment);
      return {latitude: shipment.lat, longitude: shipment.lng, id: index};
    });
  };
  //stubbed out events in case someone wants to do stuff
  MapFactory.events = {
    click: function(marker, eventName, args){
      // this is where we would center the map on this marker, show it's history (make a get request),
      // and also make api calls based on it's total journey
      console.log("clicked on "+ marker.id);

    },
    mouseover: function(marker, eventName, args){
      // this might show a slight visual (like an outline?) and an at-a-glance view of the status.
      console.log("mouseover "+ marker.id);
    },
    mouseout: function(marker, eventName, args){
      // corrolary to mouseover
      console.log("mouseout "+ marker.id);
    }


  };

  return MapFactory;
}]);

