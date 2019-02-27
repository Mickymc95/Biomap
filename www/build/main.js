webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_locatecontrol__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_locatecontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_locatecontrol__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //L represents leaflet funtions

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadmap();
    };
    HomePage.prototype.loadmap = function () {
        // <!-- Starting latitude and longitude of the center of the map -->
        //<!-- Here is the CENTER coordinates of our map -->
        var LatitudeCenter = 53.3819;
        var LongitudeCenter = -6.60009;
        //<!-- Here is the starting zoom level of our map -->
        var ZoomLevel = 15.4;
        var map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map('map', {
            center: [LatitudeCenter, LongitudeCenter],
            zoom: ZoomLevel,
        });
        //Adds locate button and locate function
        __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.control.locate({
            locateOptions: {
                maxZoom: 17,
                enableHighAccuracy: true
            }
        }).addTo(map);
        //<!-- Select our background layers - Usually from the Leaflet Layer Providers website -->
        //<!-- The first layer here will be the one which is 'switched on' when the user loads the page -->
        var OpenStreetMap_Mapnik = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        });
        map.addLayer(OpenStreetMap_Mapnik);
        var Esri_WorldImagery = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});
        map.addLayer(Esri_WorldImagery);
        // Assigning links for custom markers to add to the map 
        var treeIcon = new __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.icon({
            iconUrl: "./assets/icon/TreeIcon.png",
            iconSize: [15, 25],
            iconAnchor: [7.5156, 25],
            popupAnchor: [0, -20]
        });
        var insectIcon = new __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.icon({
            iconUrl: "./assets/icon/insectIcon.png",
            iconSize: [30, 30],
            iconAnchor: [15, 20],
            popupAnchor: [0, -20]
        });
        var plantIcon = new __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.icon({
            iconUrl: "./assets/icon/plantIcon.png",
            iconSize: [30, 30],
            iconAnchor: [15, 20],
            popupAnchor: [0, -20]
        });
        var meadowIcon = new __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.icon({
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
        var MUTreeLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/Trees.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile1 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    console.log(latlng, feature);
                    return __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker(latlng, {
                        icon: treeIcon
                    });
                },
                onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map
            });
            MUTreeLayer.addLayer(geoJsonFromExternalFile1);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load Trees json data");
        });
        //Accessing a FILE which contains GeoJSON 
        //This is where we are going to use the get http request to gather the GeoJSON and make it available
        // so that Leaflet can display it
        // We need to make a special LAYER for our GeoJson 
        // We are going to make a group for our overlay layer 
        var WildFlowerMeadowLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/meadow.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile2 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    console.log(latlng, feature);
                    return __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker(latlng, {
                        icon: meadowIcon
                    });
                },
                onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map
            });
            WildFlowerMeadowLayer.addLayer(geoJsonFromExternalFile2);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load Meadows json data");
        });
        //Accessing a FILE which contains GeoJSON 
        //This is where we are going to use the get http request to gather the GeoJSON and make it available
        // so that Leaflet can display it
        // We need to make a special LAYER for our GeoJson 
        // We are going to make a group for our overlay layer 
        var InsectsLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/insects.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile3 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    console.log(latlng, feature);
                    return __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker(latlng, {
                        icon: insectIcon
                    });
                },
                onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map
            });
            InsectsLayer.addLayer(geoJsonFromExternalFile3);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load Insects json data");
        });
        //Accessing a FILE which contains GeoJSON 
        //This is where we are going to use the get http request to gather the GeoJSON and make it available
        // so that Leaflet can display it
        // We need to make a special LAYER for our GeoJson 
        // We are going to make a group for our overlay layer 
        var BiodiversityHotspotsLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/10Sites.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile4 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, {
                onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map
            });
            BiodiversityHotspotsLayer.addLayer(geoJsonFromExternalFile4);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load Hotspot json data");
        });
        //Accessing a FILE which contains GeoJSON 
        //This is where we are going to use the get http request to gather the GeoJSON and make it available
        // so that Leaflet can display it
        // We need to make a special LAYER for our GeoJson 
        // We are going to make a group for our overlay layer 
        var AllPlantsLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/AllPlants.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile5 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    console.log(latlng, feature);
                    return __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker(latlng, {
                        icon: plantIcon
                    });
                },
                onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map
            });
            AllPlantsLayer.addLayer(geoJsonFromExternalFile5);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load Plant json data");
        });
        //Accessing a FILE which contains GeoJSON 
        //This is where we are going to use the get http request to gather the GeoJSON and make it available
        // so that Leaflet can display it
        // We need to make a special LAYER for our GeoJson 
        // We are going to make a group for our overlay layer 
        var MUGrassLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/Grass.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile6 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, {
                onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map
            });
            MUGrassLayer.addLayer(geoJsonFromExternalFile6);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load Grass json data");
        });
        //Accessing a FILE which contains GeoJSON 
        //This is where we are going to use the get http request to gather the GeoJSON and make it available
        // so that Leaflet can display it
        // We need to make a special LAYER for our GeoJson 
        // We are going to make a group for our overlay layer 
        var HabitatLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/Habitat.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile7 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, { onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map, style: style_for_geojson });
            HabitatLayer.addLayer(geoJsonFromExternalFile7);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load Habitatlayer json data");
        });
        //Accessing a FILE which contains GeoJSON 
        //This is where we are going to use the get http request to gather the GeoJSON and make it available
        // so that Leaflet can display it
        // We need to make a special LAYER for our GeoJson 
        // We are going to make a group for our overlay layer 
        var LyreenWalkLayer = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup();
        this.http.get('./assets/GeoJson/LyreenWalk.geojson').subscribe(function (data) {
            var geoJsonFromExternalFile8 = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.geoJSON(data, {
                onEachFeature: action_To_Perform_When_Feature_Is_Clicked_On_The_Map
            });
            LyreenWalkLayer.addLayer(geoJsonFromExternalFile8);
            // This ends the code to get the GeoJSON from a FILE
        }, function (err) {
            alert("failed to load 2.8km Walking Route json data");
        });
        // Create the information for the layer switcher so users know which background layer is on or off 
        var backgroundLayerNames = { "ESRI Aerial": Esri_WorldImagery, "OpenStreetMap Streets": OpenStreetMap_Mapnik };
        // Create the information for the layer switcher so users know which foreground layer is on or off 
        var overlayGeoLayerNames = {
            "Wild Flower Meadow": WildFlowerMeadowLayer,
            "Insects": InsectsLayer,
            "Biodiversity Hotspots": BiodiversityHotspotsLayer,
            "All Plants": AllPlantsLayer,
            "Trees": MUTreeLayer,
            "Grass": MUGrassLayer,
            "Habitat": HabitatLayer,
            "2.8km Walking Route": LyreenWalkLayer
        };
        // This creates the layer switcher in the top corner of your map container 
        // This allows you to switch between the layers - turning them on or off 
        __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.control.layers(backgroundLayerNames, overlayGeoLayerNames).addTo(map);
        // This is where Leaflet will go if you click on any of the objects which are in the
        // GeoJSON file
        function action_To_Perform_When_Feature_Is_Clicked_On_The_Map(feature, layer) {
            // does this clicked feature have any properties in its GeoJSON?
            // does it have any attributes?
            if (feature.properties) {
                // Each feature in the GeoJSON dataset has a Feature Object.
                // This object has a list of properties (an array). We get
                // Javascript to map these to a string. We put some HTML formatting in the string
                // This is then bound to the popup.
                // There is the option to access specific attributes (properties) by name
                // For example: feature.properties.place for the place attribute
                layer.bindPopup(Object.keys(feature.properties).map(function (k) {
                    return "<b>" + k + "</b>" + ": " + feature.properties[k];
                }).join("<br />"), {
                    maxHeight: 200
                });
            } // end if
        } // end of function action_To_Perform_When_Feature_Is_Clicked_On_The_Map
        function style_for_geojson(feature) {
            if (feature.properties.Fossitt_Code) {
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
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\maloc\Desktop\Final Year project\Biomap\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Maynooth University Biodiversity Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n    <div id="map" style="width: 100vw; height: 100%"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\maloc\Desktop\Final Year project\Biomap\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\maloc\Desktop\Final Year project\Biomap\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\maloc\Desktop\Final Year project\Biomap\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation_ngx__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\maloc\Desktop\Final Year project\Biomap\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\maloc\Desktop\Final Year project\Biomap\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map