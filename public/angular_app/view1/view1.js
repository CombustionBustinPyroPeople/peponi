'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'MainCtrl as main'
  });
}])
.controller('MainCtrl', ['uiGmapGoogleMapApi','ShipmentFactory','MapFactory', '$q', 'uiGmapIsReady', 
  function(uiGmapGoogleMapApi, ShipmentFactory, MapFactory, $q, uiGmapIsReady) {
  //"vm" is shorthand for "View-Model", and stores our context and cleans up our code a bit (in theory)
  var vm = this;
  vm.polyline = [];
  //this waits until:
  // 1) the google map api and it's dependencies are ready
  // 2) the markers have loaded up
  vm.mapObj = MapFactory;
  vm.control = {};
  $q.all([MapFactory.loadMapApi(), ShipmentFactory.getAllShipments()]).then(function() {
    vm.markers = MapFactory.formatMarkers(ShipmentFactory.shipments);
    vm.map = vm.mapObj.map;
    //console.log("$scope: ", $scope);
  });
  //some bullsh*t to grab a reference to the map. I pass the reference to my factory from the controller.
  //This is most likely not a good practice. We'll also be adding info windows here because we need a map
  // reference and also because fk it
  uiGmapIsReady.promise().then(function (maps) {
        console.log("in thing!");
        console.log("is there thing?", maps);
        vm.mapRef = vm.control.getGMap();
        MapFactory.setMap(vm.mapRef);
        vm.infoWindows = MapFactory.formatInfoWindows(ShipmentFactory.shipments);
  });
  vm.drawPolyline = function(marker){
    //origin and current are uh. queries. great.
    var shipment = marker.model.mirror;
    console.log("shipment: ", marker);
    var origin = shipment.origin;
    var destination = shipment.destination;
    var current = marker.getPosition();
    vm.polylines =[
            {
                id: 1,
                path: [
                    {
                        latitude: origin.lat,
                        longitude: origin.lng,
                    },
                    {
                        latitude: current.lat(),
                        longitude: current.lng()
                    }
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                geodesic: true,
                visible: true,
                icons: [{
                    icon: {
                        path: MapFactory.google.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    offset: '25px',
                    repeat: '50px'
                }]
            },
            {
                id: 2,
                path: [
                    {
                        latitude: current.lat(),
                        longitude: current.lng()
                    },
                    {
                        latitude: destination.lat,
                        longitude: destination.lng,
                    }
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                geodesic: true,
                visible: true,
                icons: [{
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    offset: '25px',
                    repeat: '50px'
                }]
            }
        ];
    console.log("polyline: ", vm.polyline);
  };
  //these events get added to the custom directive.
  vm.events = {
    click: function(marker, eventName, args){
      // this is where we would center the map on this marker, show it's history (make a get request),
      // and also make api calls based on it's total journey
      var latLng = marker.getPosition();
      //centers the map on the current node
      MapFactory.mapReference.setCenter(latLng);
      //draws a polyline from the origin to the focus node to the destination
      vm.drawPolyline(marker);
      console.log("clicked on ", latLng);
    },
    mouseover: function(marker, eventName, args){
      // this might show a slight visual (like an outline?) and an at-a-glance view of the status.
      var markerIndex = marker.model.id;
      console.log("context.infoWindows: ", MapFactory.infoWindows);
      MapFactory.infoWindows[markerIndex].open(MapFactory.mapReference, marker);
    },
    mouseout: function(marker, eventName, args){
      // corrolary to mouseover
      var markerIndex = marker.model.id;
      MapFactory.infoWindows[markerIndex].close();
    }
  };
}]);

// var dummyData = {
// shipments: [
//   {
//     receiver: "Chandra Industries",
//     destination: "Chicago, IL",
//     orign: "New York, NY",
//     description: "Large shipment of rubies, delivered via rail",
//     bol: 1111,
//     custody: "Ian's Shipping Service",
//     hasDamaged: false,
//     hasSeparated: false,
//     isLate: false,
//     lat: 42.3314,
//     lng: -83.0458,
//     pallets: [
//       {
//         weight: 100, /* in pounds? */
//         height: 200, /* in inches */
//         width: 250,
//         lat: 42.3314,
//         lng: -83.0458, /* in inches */
//         isDamaged: false,
//         isSeparated: false,
//       },
//       {
//         weight: 150, /* in pounds? */
//         height: 210, /* in inches */
//         width: 250,
//         lat: 42.3314,
//         lng: -83.0458, /* in inches */
//         isDamaged: false,
//         isSeparated: false,
//       },
//        etc.. each pallet as an index 
//     ]
//   },
//   {
//     receiver: "Ricco Motors",
//     destination: "San Jose, CA",
//     orign: "Washington, DC",
//     description: "Batteries n shit",
//     bol: 1111,
//     custody: "Brendan's Shitty Rickshaw Deliveries",
//     hasDamaged: true,
//     hasSeparated: true,
//     isLate: true,
//     lat: 40.4397,
//     lng: -79.9764,
//     pallets: [
//       {
//         weight: 100, /* in pounds? */
//         height: 200, /* in inches */
//         width: 250,
//         lat: 40.4397,
//         lng: -79.9764,
//         isDamaged: true,
//         isSeparated: false,
//       },
//       {
//         weight: 100, /* in pounds? */
//         height: 200, /* in inches */
//         width: 250,
//         lat: 39.9833,
//         lng: -82.9833,
//         isDamaged: false,
//         isSeparated: true,
//       },
//       /* etc.. each pallet as an index */
//     ]}
//   /*etc, add more pallets */
//   ]
// };