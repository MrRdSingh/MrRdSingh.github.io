var map = L.map('map_container', {
		center: [30,79.25],
		zoom: 7,
		maxZoom: 11,
		measureControl: true,
		zoomControl: false,
});

//------------------------------------------------------------------------------------------------------------------------

//adding zoomMin
map.addControl(new L.Control.Home())

//------------------------------------------------------------------------------------------------------------------------

//onEachFeature starts for state
function f_state_add_geojson(feature,layer){
		layer.on({
			click: function selectFeature(){
//create sidebar
				document.getElementById("info").style.width = "20vw";

//create table
				var table = document.createElement("TABLE");
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "State";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Name;
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Area";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = "53,483 sq. km.";
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Highest Elevation";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = "7,816 m (25,643 ft)";
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Capital";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = "Dehradun";
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Districts";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = "13";
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Population (Census 2011)";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = "100.86 lakh";
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Sub-Divisions";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = "1.Kumaon Division 2.Garhwal Division ";
//start table
				var dyTable = document.getElementById("dynamic_table");
				dyTable.innerHTML = "";
				dyTable.appendChild(table);
			}
		})
};

var var_state_style = {
	"color": "black",
	"fillColor": 'white',
 	"weight": 3,
 	"opacity": 1,
}

var stateBoundary = L.geoJSON(state_boundary_geojson,{
		style: var_state_style,
    onEachFeature: f_state_add_geojson,
}).addTo(map);
//states layer added

//------------------------------------------------------------------------------------------------------------------------

//state label starts

var var_state_label_style = {
	"color": "#28a745",
	"fillColor": '#28a745',
 	"weight": 1,
 	"fillOpacity": 1,
}

var stateLabel = L.geoJSON(state_label_geojson,{
		style: var_state_label_style,
}).addTo(map);

//------------------------------------------------------------------------------------------------------------------------

//tehsil boundary starts
function f_tehsil_add_geojson(feature,layer){
	layer.bindPopup(feature.properties.TALUK);
	layer.on({
			click: function selectFeature(){
//create sidebar
				document.getElementById("info").style.width = "20vw";

//create table
				var table = document.createElement("TABLE");
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Tehsil";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.TALUK;
				//add header data
								var row = table.insertRow(-1);
								var headerCell = document.createElement("TH");
								headerCell.innerHTML= "District";
								row.appendChild(headerCell);
				//add row cells
								var cell = row.insertCell(-1);
								cell.innerHTML = feature.properties.DIST;
//start table
				var dyTable = document.getElementById("dynamic_table");
				dyTable.innerHTML = "";
				dyTable.appendChild(table);
			}
	})
};

function f_tehsil_style(feature) {
	switch(feature.properties.OBJECTID){
            case 1: return{
																			"color": "black",
																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
																			"weight": 1,
																			"fillOpacity": 1,
																			};
						 break;
						 case 2: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 3: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 4: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 5: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 6: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 7: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 8: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 9: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 10: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 11: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 12: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 13: return{
 																			"color": "black",
 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case 14: return{
 																			"color": "black",
 																			"fillColor":"#"+((1<<24)*Math.random()|0).toString(16),
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
 						 case 15: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 16: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 17: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 18: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 19: return{
  																			"color": "black",
  																			"fillColor":"#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 20: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 21: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 22: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 23: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 24: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 25: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
 						 case 26: return{
  																			"color": "black",
  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
  																			"weight": 1,
  																			"fillOpacity": 1,
  																			};
  						 break;
							 case 27: return{
	 																			"color": "black",
	 																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
	 																			"weight": 1,
	 																			"fillOpacity": 1,
	 																			};
	 						 break;
	 						 case 28: return{
	  																			"color": "black",
	  																			"fillColor":"#"+((1<<24)*Math.random()|0).toString(16),
	  																			"weight": 1,
	  																			"fillOpacity": 1,
	  																			};
	  						 break;
	 						 case 29: return{
	  																			"color": "black",
	  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
	  																			"weight": 1,
	  																			"fillOpacity": 1,
	  																			};
	  						 break;
	 						 case 30: return{
	  																			"color": "black",
	  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
	  																			"weight": 1,
	  																			"fillOpacity": 1,
	  																			};
	  						 break;
	 						 case 31: return{
	  																			"color": "black",
	  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
	  																			"weight": 1,
	  																			"fillOpacity": 1,
	  																			};
	  						 break;
	 						 case 32: return{
	  																			"color": "black",
	  																			"fillColor": "#"+((1<<24)*Math.random()|0).toString(16),
	  																			"weight": 1,
	  																			"fillOpacity": 1,
	  																			};
	  						 break;
            }
    }


var tehsilBoundary = L.geoJSON(tehsil_boundary_geojson,{
		style: f_tehsil_style,
		onEachFeature: f_tehsil_add_geojson,
}).addTo(map);

//------------------------------------------------------------------------------------------------------------------------

//district boundary starts
function f_dist_add_geojson(feature,layer){
	layer.on({
			click: function selectFeature(){
//create sidebar
				document.getElementById("info").style.width = "20vw";

//create table
				var table = document.createElement("TABLE");
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "District";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.DISTRICT;
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Division";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Division;
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Area (sq. km.)";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Area;
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Tehsils";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Tehsils;
//start table
				var dyTable = document.getElementById("dynamic_table");
				dyTable.innerHTML = "";
				dyTable.appendChild(table);
			}
	})
};

function f_district_style(feature) {
	switch(feature.properties.DISTRICT){
            case "Uttarkashi": return{
																			"color": "black",
																			"fillColor": '#CB31CB',
																			"weight": 1,
																			"fillOpacity": 1,
																			};
						 break;
						 case "Tehri Garhwal": return{
 																			"color": "black",
 																			"fillColor": '#f1c40f',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Dehradun": return{
 																			"color": "black",
 																			"fillColor": '#e74c3c',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Haridwar": return{
 																			"color": "black",
 																			"fillColor": '#2ca25f',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Pauri Garhwal": return{
 																			"color": "black",
 																			"fillColor": '#A8EB12',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Rudraprayag": return{
 																			"color": "black",
 																			"fillColor": '#fa9fb5',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Chamoli": return{
 																			"color": "black",
 																			"fillColor": '#ffa600',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Pithoragarh": return{
 																			"color": "black",
 																			"fillColor": '#c51b8a',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Bageshwar": return{
 																			"color": "black",
 																			"fillColor": '#2ecc71',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Almora": return{
 																			"color": "black",
 																			"fillColor": '#ED0B0B',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Nainital": return{
 																			"color": "black",
 																			"fillColor": 'yellow',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Champawat": return{
 																			"color": "black",
 																			"fillColor": '#F2980B',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
						 case "Udham Singh Nagar": return{
 																			"color": "black",
 																			"fillColor": '#FF0090',
 																			"weight": 1,
 																			"fillOpacity": 1,
 																			};
 						 break;
            }
    }

var districtBoundary = L.geoJSON(district_boundary_geojson,{
		style: f_district_style,
		onEachFeature: f_dist_add_geojson,
}).addTo(map);

//------------------------------------------------------------------------------------------------------------------------

//district label starts

var var_district_label_style = {
	"color": "black",
	"fillColor": 'black',
 	"weight": 1,
 	"fillOpacity": 1,
}

var districtLabel = L.geoJSON(district_label_geojson,{
		style: var_district_label_style,
}).addTo(map);

//-------------------------------------------------------------------------------------------------------------------------

//river boundary starts
var var_river_style = {
	"color": "Blue",
 	"weight": 1,
 	"opacity": 1,
}

var rivers = L.geoJSON(river_geojson,{
		style: var_river_style,
}).addTo(map);

//------------------------------------------------------------------------------------------------------------------------

//river label starts

var var_river_label_style = {
	"color": "blue",
	"fillColor": 'blue',
 	"weight": 1,
 	"fillOpacity": 1,

}

var riverLabel = L.geoJSON(river_label_geojson,{
		style: var_river_label_style,
});

//------------------------------------------------------------------------------------------------------------------------

// highway starts
function f_highway_add_geojson(feature,layer){
	layer.bindPopup(feature.properties.Type);
};

function f_highway_style(feature) {
	switch(feature.properties.Type){
            case "National Highway": return{
																			"color": "black",
																			"weight": 3.5,
																			"opacity": 1,
																			"dashArray": 7,
																			};
						 break;
			 case "State Highway": return{
																			"color": "brown",
																			"weight": 3,
																			"opacity": 1,
																			"dashArray": 7,
																			};
						 break;
	}
}

var highway = L.geoJSON(highway_geojson,{
		style: f_highway_style,
		onEachFeature: f_highway_add_geojson,
}).addTo(map);

//------------------------------------------------------------------------------------------------------------------------

//dams start
function f_onEachFeature(feature, layer){
		layer.bindPopup(feature.properties.Dam);
		layer.on({
			click: function selectFeature(){
//create sidebar
				document.getElementById("info").style.width = "20vw";

//create table
				var table = document.createElement("TABLE");
//add header data
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Dam";
				row.appendChild(headerCell);
//add row cells
				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Dam;
//manually adding rows ROW-2
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "River";
				row.appendChild(headerCell);

				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.River;
				//manually adding rows ROW-3
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Type";
				row.appendChild(headerCell);

				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Type;
				//manually adding rows ROW-4
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Length of Dam (m)";
				row.appendChild(headerCell);

				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Length;
				//manually adding rows ROW-5
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Height of Dam (m)";
				row.appendChild(headerCell);

				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Height;
				//manually adding rows ROW-6
				var row = table.insertRow(-1);
				var headerCell = document.createElement("TH");
				headerCell.innerHTML= "Reservoir Area (sq. km.)";
				row.appendChild(headerCell);

				var cell = row.insertCell(-1);
				cell.innerHTML = feature.properties.Reservoir;

//start table
				var dyTable = document.getElementById("dynamic_table");
				dyTable.innerHTML = "";
				dyTable.appendChild(table);
				/*
					document.getElementById('td1').innerHTML = feature.properties.Name;
					document.getElementById('td2').innerHTML = feature.properties.River;
					document.getElementById('td3').innerHTML = feature.properties.District;
					document.getElementById('td4').innerHTML = feature.properties.Basin;
					document.getElementById('td5').innerHTML = feature.properties.Length;
					document.getElementById('td6').innerHTML = feature.properties.heigthAboveFoundation;*/
			}
		});
};

var damIcon = L.icon({
		iconUrl:'images/dam.png',
		iconSize: [35,40],
		iconAnchor: [0,25],
		popupAnchor: [12,-15]
});

var f_pointToLayer = function (feature, latlng){
		return L.marker(latlng,{icon:damIcon});
};

var damsUttarakahand = L.geoJSON(dams_uttarakhand_geojson,{
		pointToLayer: f_pointToLayer,
    onEachFeature: f_onEachFeature,
}).addTo(map);
//.addTo(map) is used to show map by default
//dams layer added

//------------------------------------------------------------------------------------------------------------------------

//dam label starts

var var_dam_label_style = {
	"color": "#ED0B0B",
	"fillColor": '#ED0B0B',
 	"weight": 1,
 	"fillOpacity": 1,

}

var damLabel = L.geoJSON(dam_label_geojson,{
		style: var_dam_label_style,
});

//------------------------------------------------------------------------------------------------------------------------

//Satellite map
var mapboxMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 8,
		attribution:'',
		id: 'mapbox.streets'
	}).addTo(map);

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//always last
//layer control

//create layer groups to control with single box
var riverGroup = L.layerGroup([rivers, riverLabel]);
var districtGroup = L.layerGroup([districtBoundary, districtLabel]);
var damGroup = L.layerGroup([damsUttarakahand,damLabel]);

districtGroup.addTo(map);
riverGroup.addTo(map);
damGroup.addTo(map);

var baseMaps = {
		"State Boundary": stateBoundary,
};

var overlayMaps = {
		"Districts": districtGroup,
		"Tehsil Boundary": tehsilBoundary,
		"Dams": damGroup,
		"Rivers": riverGroup,
		"Highways": highway,
};

//------------------------------------------------------------------------------------------------------------------------
/*
//map loading based on zoom level
map.on('zoomend', function (e) {
    zoom_based_layerchange();
});

function clean_map7() {
    map.eachLayer(function (layer) {
        if (layer instanceof L.GeoJSON)
        //Do marker specific actions here
        {
            map.removeLayer(layer);
        }
        console.log(layer);
    });
}

function clean_map9() {
    map.eachLayer(function (stateBoundary) {
        if (stateBoundary instanceof L.GeoJSON)
        //Do marker specific actions here
        {
            map.removeLayer(stateBoundary);
        }
        console.log(stateBoundary);
    });
}

function clean_map10() {
    map.eachLayer(function (districtBoundary) {
        if (districtBoundary instanceof L.GeoJSON)
        //Do marker specific actions here
        {
            map.removeLayer(districtBoundary);
        }
        console.log(districtBoundary);
    });
}

function zoom_based_layerchange() {
    //console.log(map.getZoom());

    var currentZoom = map.getZoom();
    switch (currentZoom) {
        case 7:
            clean_map7();
            stateBoundary.addTo(map); //show state boundary
						rivers.addTo(map);
						state_highway.addTo(map);
            break;
        case 9:
            clean_map9();
						districtBoundary.addTo(map); //show district boundary
						damsUttarakahand.addTo(map);
						state_highway.addTo(map);
						rivers.addTo(map);
            break;
				case 10:
            clean_map10();
						tehsilBoundary.addTo(map); //show tehil boundary
						damsUttarakahand.addTo(map);
						state_highway.addTo(map);
						rivers.addTo(map);
            break;
				default:
            // do nothing
            break;
    }
}
*/
//------------------------------------------------------------------------------------------------------------------------

L.control.layers(baseMaps, overlayMaps).addTo(map);
L.control.scale().addTo(map);
L.control.coordinates().addTo(map);
L.Control.boxzoom().addTo(map);
