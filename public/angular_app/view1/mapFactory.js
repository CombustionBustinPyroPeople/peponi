//this factory will manage the bulk of shipment data
"use strict";

// icon object format: 
/* 
{
  anchor: Point(x:number, y:number) => where to anchor in relation to the marker (default: bottom, middle)
  labelOrigin: Point(x:number, y:number) => The origin of the label relative to the top-left corner of the icon image, if a label is supplied by the marker. By default, the origin is located in the center point of the image.
  origin: Point(x:number, y:number) => The position of the image within a sprite, if any. By default, the origin is located at the top left corner of the image
  scaledSize: Point(x:number, y:number) => The size of the entire image after scaling, if any. Use this property to stretch/shrink an image or a sprite.
  size: Size(width:number, height:number, widthUnit?:string, heightUnit?:string) The display size of the sprite or image. When using sprites, you must specify the sprite size. If the size is not provided, it will be set when the image loads.
  url: string
}
*/
angular.module('myApp.view1').factory("MapFactory",
  ['uiGmapGoogleMapApi', function(uiGmapGoogleMapApi){
  var MapFactory = {};
  var context = this;
  MapFactory.iconUrls = {
    late: "assets/clock.png",
    separated: "assets/brokenHeart.png",
    possDamage: "assets/warningSign.png",
    good: "assets/checkmark.png"
  };
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
  MapFactory.loadMapApi = function(){
    console.log("LOAD MAP API CALLED");
    var context = this;
    return uiGmapGoogleMapApi.then(function(obj){   
      console.log("setting google object");
      context.google = obj;
      console.log("is this a thing? ", context.google);
      //size in pixels #stayDry
      var size = 75;
      context.iconDefaults = {
          anchor: new context.google.Point(size/2,size/2),
          scaledSize: new context.google.Size(size, size)
      };
    });
  };
    
  //grab and map?? (dunno if i wanna map them) the array of shipments.
  //will add other stuff later if needed
  
  //currently centered on the geographic center of the US
  MapFactory.map = { center: { latitude: 39, longitude: -98 }, zoom: 5 };
  //helper function to choose the appropriate marker
  function chooseMarker(shipment){
    var urls = {
      late: "assets/clock.png",
      separated: "assets/brokenHeart.png",
      possDamage: "assets/warningSign.png",
      good: "assets/checkmark.png"
    };
    if(shipment.isLate){
      return urls.late;
    }
    if(shipment.hasSeparated){
      return urls.separated;
    }
    if(shipment.hasDamaged){
      return urls.possDamage;
    }
    return urls.good;
  }
  MapFactory.formatMarkers = function(shipments){
    console.log("FORMAT MARKERS CALLED");
    
    var context = this;
    
    return context.markers = _.map(shipments, function(shipment, index){
      console.log("shipments in hurr: ", shipment);
      var icon = {url: chooseMarker(shipment)};
      //TODO: refactor later into helper function this is ridiculous
      _.assign(icon, context.iconDefaults);
      return {latitude: shipment.lat, longitude: shipment.lng, id: index, icon: icon};
    });
  };
  MapFactory.formatInfoWindows = function(shipments){
    console.log("FORMAT INFO WINDOWS CALLED");
    var context = this;
    console.log("context in other func: ", context);
    
    return context.infoWindows = _.map(shipments, function(shipment, index){
      console.log("shipments in hurr: ", shipment);
      //NOTE: refactor into directive this is hideous
      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+ shipment.bol + '</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
      //var icon = {url: chooseMarker(shipment)};
      //TODO: refactor later into helper function this is ridiculous
      //_.assign(icon, context.iconDefaults);
      return new context.google.InfoWindow({position: {
                lat: shipment.lat,
                lng: shipment.lng},
                id: index, 
                content: contentString});
    });
  };

  MapFactory.setMap = function(map){
    MapFactory.mapReference = map;
  };
  //stubbed out events in case someone wants to do stuff
  MapFactory.events = {
    click: function(marker, eventName, args){
      // this is where we would center the map on this marker, show it's history (make a get request),
      // and also make api calls based on it's total journey
      //console.log("clicked on ", marker.get(id));
      var markerIndex = marker.model.id;
      console.log("context.infoWindows: ", MapFactory.infoWindows);
      console.log("context: ", MapFactory);

      MapFactory.infoWindows[markerIndex].open(MapFactory.mapReference, marker);

    },
    mouseover: function(marker, eventName, args){
      // this might show a slight visual (like an outline?) and an at-a-glance view of the status.
      console.log("mouseover ", marker.model.id);
    },
    mouseout: function(marker, eventName, args){
      // corrolary to mouseover
      console.log("mouseout ", marker);
    }


  };

  return MapFactory;
}]);

