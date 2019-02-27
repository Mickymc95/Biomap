import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import L from "leaflet";//L represents leaflet funtions
import 'leaflet.locatecontrol';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

   ionViewDidLoad() {
    
    this.loadmap();
  }

   loadmap(){
     // <!-- Starting latitude and longitude of the center of the map -->
    //<!-- Here is the CENTER coordinates of our map -->
    var LatitudeCenter = 53.3819;
    var LongitudeCenter = -6.60009;

    //<!-- Here is the starting zoom level of our map -->
    var ZoomLevel = 15.4;
    var map = L.map('map', {
      center: [LatitudeCenter, LongitudeCenter],
      zoom: ZoomLevel,
    });

    //Adds locate button and locate function
     L.control.locate({
       locateOptions: {
         maxZoom: 17, //set maxZoom for locate button
         enableHighAccuracy: true
       }
     }).addTo(map);

  
    //<!-- Select our background layers - Usually from the Leaflet Layer Providers website -->
    //<!-- The first layer here will be the one which is 'switched on' when the user loads the page -->

    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'///////////////////////////////////////////////////////Legal stuff *********
    });
    map.addLayer(OpenStreetMap_Mapnik);

    var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      //attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'//Legal stuff *********
    });
    map.addLayer(Esri_WorldImagery);

    // Assigning links for custom markers to add to the map 
        
                var treeIcon = new L.icon({
                    iconUrl: "./assets/icon/TreeIcon.png",
                    iconSize: [15, 25],
                    iconAnchor: [7.5156, 25],
                    popupAnchor: [0, -20]
        });
        
                var insectIcon = new L.icon({
                    iconUrl: "./assets/icon/insectIcon.png",
                    iconSize: [30, 30],
                    iconAnchor: [15, 20],
                    popupAnchor: [0, -20]
                });

                var plantIcon = new L.icon({
                    iconUrl: "./assets/icon/plantIcon.png",
                    iconSize: [30, 30],
                    iconAnchor: [15, 20],
                    popupAnchor: [0, -20]
                });
                
                var meadowIcon = new L.icon({
                    iconUrl: "./assets/icon/wildflowerIcon.png",
                    iconSize: [30, 30],
                    iconAnchor: [15, 20],
                    popupAnchor: [0, -20]
                }); 

        // Assigning Colours for Each Fossitt Code 

        var geoJSONStyle1 = {
            "opacity": 0.6,
            "fillColor": "#eada0a",
            "fillOpacity": 0.8
        };
        var geoJSONStyle2 = {
            "opacity": 0.6,
            "fillColor": "#a5a384",
            "fillOpacity": 0.8
        };

        var geoJSONStyle3 = {
            "opacity": 0.6,
            "fillColor": "#c1ec77",
            "fillOpacity": 0.8
        };

        var geoJSONStyle4 = {
            "opacity": 0.6,
            "fillColor": "#0c9416",
            "fillOpacity": 0.8
        };

        var geoJSONStyle5 = {
            "opacity": 0.6,
            "fillColor": "#9047da",
            "fillOpacity": 0.8
        };

        var geoJSONStyle6 = {
            "opacity": 0.6,
            "fillColor": "#f9050f",
            "fillOpacity": 0.8
        };

        var geoJSONStyle7 = {
            "opacity": 0.6,
            "fillColor": "#f89005",
            "fillOpacity": 0.8
        };

        var geoJSONStyle8 = {
            "opacity": 0.6,
            "fillColor": "#6ff2ec",
            "fillOpacity": 0.8
        };
                
                var geoJSONStyle9 = {
            "opacity": 0.6,
            "fillColor": "#109e00",
            "fillOpacity": 0.8
        };

        var geoJSONStyle10 = {
            "opacity": 0.6,
            "fillColor": "#1aff00",
            "fillOpacity": 0.8
        };


  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 

   
var MUTreeLayer = L.layerGroup();
    

   this.http.get('./assets/GeoJson/Trees.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile1 = L.geoJSON(data,{
                                        pointToLayer: function(feature, latlng) {
                                          console.log(latlng, feature);
                                          return L.marker(latlng, 
                                          {
                                                icon: treeIcon
                                          }
                                          );
                                        },
                                        onEachFeature:
                                        action_To_Perform_When_Feature_Is_Clicked_On_The_Map});
            
              MUTreeLayer.addLayer(geoJsonFromExternalFile1);
              // This ends the code to get the GeoJSON from a FILE
              }, 
              (err) => {
                alert("failed to load Trees json data");
              });

  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 

var WildFlowerMeadowLayer = L.layerGroup();

    this.http.get('./assets/GeoJson/meadow.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile2 = L.geoJSON(data,{
                                        pointToLayer: function(feature, latlng) {
                                          console.log(latlng, feature);
                                          return L.marker(latlng, 
                                          {
                                                icon: meadowIcon
                                          }
                                          );
                                        },
                                        onEachFeature:
                                        action_To_Perform_When_Feature_Is_Clicked_On_The_Map});

              WildFlowerMeadowLayer.addLayer(geoJsonFromExternalFile2);
              // This ends the code to get the GeoJSON from a FILE
              }, 
              (err) => {
                alert("failed to load Meadows json data");
              });

  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 

var InsectsLayer = L.layerGroup();

    this.http.get('./assets/GeoJson/insects.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile3 = L.geoJSON(data,{
                                        pointToLayer: function(feature, latlng) {
                                          console.log(latlng, feature);
                                          return L.marker(latlng, 
                                          {
                                                icon: insectIcon
                                          }
                                          );
                                        },
                                        onEachFeature:
                                        action_To_Perform_When_Feature_Is_Clicked_On_The_Map});

              InsectsLayer.addLayer(geoJsonFromExternalFile3);
              // This ends the code to get the GeoJSON from a FILE
              }, 
              (err) => {
                alert("failed to load Insects json data");
              });
  
  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 

var BiodiversityHotspotsLayer = L.layerGroup();

    this.http.get('./assets/GeoJson/10Sites.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile4 = L.geoJSON(data,{
                                        onEachFeature:
                                        action_To_Perform_When_Feature_Is_Clicked_On_The_Map});

              BiodiversityHotspotsLayer.addLayer(geoJsonFromExternalFile4);
              // This ends the code to get the GeoJSON from a FILE
              }, 
              (err) => {
                alert("failed to load Hotspot json data");
              });
  
  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 

var AllPlantsLayer = L.layerGroup();

    this.http.get('./assets/GeoJson/AllPlants.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile5 = L.geoJSON(data,{
                                        pointToLayer: function(feature, latlng) {
                                          console.log(latlng, feature);
                                          return L.marker(latlng, 
                                          {
                                                icon: plantIcon 
                                          }
                                          );
                                        },
                                        onEachFeature:
                                        action_To_Perform_When_Feature_Is_Clicked_On_The_Map});

              AllPlantsLayer.addLayer(geoJsonFromExternalFile5);
              // This ends the code to get the GeoJSON from a FILE
              }, (err) => {
                alert("failed to load Plant json data");
              });
  
  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 
  
var MUGrassLayer = L.layerGroup();
    
    this.http.get('./assets/GeoJson/Grass.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile6 = L.geoJSON(data,{
                                        onEachFeature:
                                        action_To_Perform_When_Feature_Is_Clicked_On_The_Map});

              MUGrassLayer.addLayer(geoJsonFromExternalFile6);
              // This ends the code to get the GeoJSON from a FILE
              }, (err) => {
        alert("failed to load Grass json data");
              });

  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 

var HabitatLayer = L.layerGroup();

    this.http.get('./assets/GeoJson/Habitat.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile7 = L.geoJSON(data,{onEachFeature: 
                action_To_Perform_When_Feature_Is_Clicked_On_The_Map,style:style_for_geojson});

              HabitatLayer.addLayer(geoJsonFromExternalFile7);
              // This ends the code to get the GeoJSON from a FILE
              }, (err) => {
                alert("failed to load Habitatlayer json data");
              });
  
  //Accessing a FILE which contains GeoJSON 
  //This is where we are going to use the get http request to gather the GeoJSON and make it available
  // so that Leaflet can display it
  // We need to make a special LAYER for our GeoJson 
  // We are going to make a group for our overlay layer 

var LyreenWalkLayer = L.layerGroup();

    this.http.get('./assets/GeoJson/LyreenWalk.geojson').subscribe(data => {
              
              var geoJsonFromExternalFile8 = L.geoJSON(data,{
                                        onEachFeature:
                                        action_To_Perform_When_Feature_Is_Clicked_On_The_Map});

              LyreenWalkLayer.addLayer(geoJsonFromExternalFile8);
              // This ends the code to get the GeoJSON from a FILE
              
              }, (err) => {
                alert("failed to load 2.8km Walking Route json data");
              });

  

        
  


     // Create the information for the layer switcher so users know which background layer is on or off 
        var backgroundLayerNames = {"ESRI Aerial": Esri_WorldImagery, "OpenStreetMap Streets": OpenStreetMap_Mapnik};

        // Create the information for the layer switcher so users know which foreground layer is on or off 
        var overlayGeoLayerNames = {
        "Wild Flower Meadow":WildFlowerMeadowLayer,
        "Insects":InsectsLayer,
        "Biodiversity Hotspots":BiodiversityHotspotsLayer,
        "All Plants":AllPlantsLayer,
        "Trees":MUTreeLayer,
        "Grass":MUGrassLayer,
        "Habitat":HabitatLayer,
        "2.8km Walking Route":LyreenWalkLayer};

        // This creates the layer switcher in the top corner of your map container 
        // This allows you to switch between the layers - turning them on or off 

        L.control.layers(backgroundLayerNames,overlayGeoLayerNames).addTo(map);

        // This is where Leaflet will go if you click on any of the objects which are in the
        // GeoJSON file
        function action_To_Perform_When_Feature_Is_Clicked_On_The_Map(feature, layer) {
            // does this clicked feature have any properties in its GeoJSON?
            // does it have any attributes?
            if (feature.properties)
            {
            // Each feature in the GeoJSON dataset has a Feature Object.
            // This object has a list of properties (an array). We get
            // Javascript to map these to a string. We put some HTML formatting in the string
            // This is then bound to the popup.
            // There is the option to access specific attributes (properties) by name
            // For example: feature.properties.place for the place attribute
            layer.bindPopup(
              Object.keys(feature.properties).map(
              function(k) {
                    return "<b>" + k + "</b>" + ": " + feature.properties[k];
                    }
                  ).join("<br />"),

                  {
                    maxHeight: 200
                  });

          } // end if
                        
                    
        } // end of function action_To_Perform_When_Feature_Is_Clicked_On_The_Map
                
                
                
        
        function style_for_geojson(feature) {
            if (feature.properties.Fossitt_Code) // check that this property is not null
            {
                if (feature.properties.Fossitt_Code == "GA2")
                    return geoJSONStyle1;

                if (feature.properties.Fossitt_Code == "GS2")
                    return geoJSONStyle2;

                if (feature.properties.Fossitt_Code == "WD1")
                    return geoJSONStyle3;

                if (feature.properties.Fossitt_Code == "WD5")
                    return geoJSONStyle4;

                if (feature.properties.Fossitt_Code == "WL1")
                    return geoJSONStyle5;

                if (feature.properties.Fossitt_Code == "BC4")
                    return geoJSONStyle6;

                if (feature.properties.Fossitt_Code == "WL2")
                    return geoJSONStyle7;

                if (feature.properties.Fossitt_Code == "WS2")
                    return geoJSONStyle8;

                if (feature.properties.Fossitt_Code == "WD3")
                    return geoJSONStyle9;

                if (feature.properties.Fossitt_Code == "WD2")
                    return geoJSONStyle10;
            }
        } // end of our STYLE DECISION for CLASSES or INTERVALS.


  }
}
