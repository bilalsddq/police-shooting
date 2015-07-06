// Function to draw your map
var drawMap() = function() {

  // Create map and set viewd 
 var map = L.map('container')
 map.setView([47.739, -122.331], 4);

  // Create an tile layer variable using the appropriate url
var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
})
  // Add the layer to your map
 layer.addTo(map);

  // Execute your function to get data
  getData.addTo(map);

// Function for getting data
var getData = function() {

  // Execute an AJAX request to get the data in data/response.js
 var data;
 $.ajax({
 	local: 'data/response.json'
 	type: "get",
 	success:function(dat) {
 		data = dat

 		data.map(function(d) {
 			var circle = new L.circle([d.latitude, d.longitude], 200, {color: 'red', opacity:.5}).addTo(map)
 		})
 	},
 datatype:"json"
}}
  // When your request is successful, call your customBuild function
customBuild.addTo(map);


// Do something creative with the data here!  
var customBuild = function() {
var marker = L.marker(47.739, -122.331]).addTo(map);

var circle = L.circle([47.739, -122.331], 200, {
	color: 'blue',
	fillColor: '#f03',
	fillOpacity:0.5,
}).addTo(map)

var polygon = L.polygon([
	[47.740, -122.329],
	[47.733, -122.327],
	[47.718, -122.311]
]).addTo(map);

var popup = L.popup()
	.setLatLng([47.739, -122.331])
	.setContent("Police Shootings Closest to my neighborhood")
	.openON(map);


function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("you clicked the map at " + e.latlng.toString())
		.openOn(map);
}

map.on('click', onMapClick);

var year = L.tileLayer(mapboxUrl, {id: 'bilalsdq', attribution: mapboxAttribution}),
	outcome = L.tileLayer(mapboxUrl, {id: 'bilalsdq', attribution: mapboxAttribution});

	var map = L.map('map', {
		center: [39.73, -104.99],
		zoom: 10,
		layers: [year, outcome]
	});

var baseMaps = {
	"Year": year,
	"Outcome": outcome
};

var overlayMaps = {
	"Race": race
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
  
}


