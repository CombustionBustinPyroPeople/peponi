//this factory will manage the bulk of shipment data
"use strict";
angular.module('myApp.view1').factory("ShipmentFactory", ['RequestFactory','$q',function(RequestFactory, $q){
  var ShipmentFactory = {};
  
  // ShipmentFactory.getAllShipments = function(){
  //   console.log("in get getAllShipments");
  //   var context = this;
  //   return RequestFactory.getAllShipments().then(function(data){
  //     context.shipments = data.shipments;
  //   });
  // };
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
    destination: "Chicago, IL",
    orign: "New York, NY",
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
    destination: "San Jose, CA",
    orign: "Washington, DC",
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
    destination: "Portland, OR",
    orign: "Austin, TX",
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
    destination: "Whitefish, MT",
    orign: "Los Angeles, CA",
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