// Function to draw your map
var drawMap = function() {
// Create map and set viewd
	var map = L.map('container');
	map.setView([47.739, -122.331], 10);

	// Create a tile layer variable using the appropriate url
  	var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
	// Add the layer to your map
	layer.addTo(map);

	//Execute your function to get data
	getData(map);
}

 // Function for getting data
var getData = function(map) {

  // Execute an AJAX request to get the data in data/response.js
 var data;
 $.ajax({
 	url:'data/response.json',
 	type: "get",
 	success:function(dat) {
 		data = dat
 		customBuild(data, map);

 	},
 	dataType: "json"
 })

 // When your request is successful, call your customBuild function
}

// Do something creative with the data here!  
var customBuild = function(dataSet, map) {
	dataSet.map(function(d) {
	console.log(d)
	var marker = L.marker([47.739, -122.331]).addTo(map); 


var circle = L.circle([d.lat, d.lng], 350, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity:0.5,
}).addTo(map)
})
	
var polygon = L.polygon([
	[47.762320, -122.205403],
	[47.7717, -122.2044],
	[47.610377, -122.200679],
	[47.606209, -122.332071], 
	[47.755653, -122.341518],

]).addTo(map);

var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("Police shootings closest to my city.")
		.openOn(map);
}

map.on('click', onMapClick).addTo(map);

}


