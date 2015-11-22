//this factory will manage the bulk of shipment data
"use strict";
angular.module('myApp.view1').factory("ShipmentFactory", ['RequestFactory','$q',function(RequestFactory, $q){
  var ShipmentFactory = {};
  
  ShipmentFactory.getActualShipments = function(){
    console.log("in get getAllShipments");
    var context = this;
    return RequestFactory.getAllShipments().then(function(data){
      context.actualShipments = data;
    });
  };
  //stub for loading dummy data, REMOVE WHEN HOOKED TO DA BACKEND
  ShipmentFactory.getAllShipments = function(){
    var context = this;
    return $q(function(resolve, reject){
      //this will eventually grab my dummy data when I make it
      console.log("in the promise???");
      context.shipments = dummyData.shipments;
      console.log("ShipmentFactory shipments: ", context.shipments);
      resolve();
    });
  };
  ShipmentFactory.user = "Toby";
  return ShipmentFactory;
}]);

var dummyData = {
shipments: [
  {
    receiver: "Chandra Industries",
    destination: {name: "Chicago, IL",
                  lat:41.8369,
                  lng: -87.6847},
    origin: {name: "New York, NY",
             lat: 40.7127,
             lng: -74.0059},
    description: "Large shipment of rubies, delivered via rail",
    bol: 1111,
    custody: "Ian's Solid Shipping Service",
    hasDamaged: false,
    hasSeparated: false,
    isLate: false,
    lat: 42.3314,
    lng: -83.0458,
    pallets: [
      {
        weight: 100, /* in pounds? */
        height: 200, /* in inches */
        width: 250,
        lat: 42.3314,
        lng: -83.0458, /* in inches */
        isDamaged: false,
        isSeparated: false,
      },
      {
        weight: 150, /* in pounds? */
        height: 210, /* in inches */
        width: 250,
        lat: 42.3314,
        lng: -83.0458, /* in inches */
        isDamaged: false,
        isSeparated: false,
      },
      /* etc.. each pallet as an index */
    ]
  },
  {
    receiver: "Ricco Motors",
    destination: {name: "San Jose, CA",
                  lat: 37.3382,
                  lng: -121.8863},
    origin: {name: "Washington, DC",
             lat: 38.9047,
             lng: -77.0164},
    description: "Batteries n shit",
    bol: 2222,
    custody: "Brendan's Shitty Rickshaw Deliveries",
    hasDamaged: false,
    hasSeparated: false,
    isLate: true,
    lat: 40.4397,
    lng: -79.9764,
    pallets: [
      {
        weight: 100, /* in pounds? */
        height: 200, /* in inches */
        width: 250,
        lat: 40.4397,
        lng: -79.9764,
        isDamaged: true,
        isSeparated: false,
      },
      {
        weight: 100, /* in pounds? */
        height: 200, /* in inches */
        width: 250,
        lat: 39.9833,
        lng: -82.9833,
        isDamaged: false,
        isSeparated: true,
      },
    ]},
  {
    receiver: "Allie's Soccer Supply",
    destination: {name: "Portland, OR",
             lat: 45.5200,
             lng: -122.6819},
    origin: {name: "Austin, TX",
             lat: 30.2500,
             lng: -97.7500},
    description: "Size 5 regulation soccer balls, uninflated",
    bol: 3333,
    custody: "Toby's Terrifying Go-Kart Deliveries",
    hasDamaged: true,
    hasSeparated: false,
    isLate: false,
    lat: 40.2444,
    lng: -111.6608,
    pallets: [
      {
        weight: 100, 
        height: 200,  
        width: 250,
        lat: 40.2444,
        lng: -111.6608,
        isDamaged: true,
        isSeparated: false,
      },
      {
        weight: 100, 
        height: 200, 
        width: 250,
        lat: 40.2444,
        lng: -111.6608,
        isDamaged: false,
        isSeparated: true,
      },
      
    ]},
  {
    receiver: "Ian's Painting Emporium",
    destination: {name: "Whitefish, MT",
                  lat: 48.4117,
                  lng: -114.3400},
    origin: {name: "Los Angeles, CA",
             lat: 34.0500,
             lng: -118.2500},
    description: "Ultra-toxic oil paints",
    bol: 3333,
    custody: "Neeraj's Tailgate-less Flatbed Truck",
    hasDamaged: false,
    hasSeparated: true,
    isLate: false,
    lat: 36.1215,
    lng: -115.1739,
    pallets: [
      {
        weight: 100, 
        height: 200,  
        width: 250,
        lat: 36.1215,
        lng: -115.1739,
        isDamaged: true,
        isSeparated: false,
      },
      {
        weight: 100, 
        height: 200, 
        width: 250,
        lat: 36.1215,
        lng: -115.1739,
        isDamaged: false,
        isSeparated: true,
      },
      
    ]},
  ]
};