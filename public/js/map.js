var platform = new H.service.Platform({
    apikey: 'YOUR_API_KEY' // Replace with your HERE Maps API key
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(
    document.getElementById("map"),
    defaultLayers.vector.normal.map,
    {
        center: { lat: 28.7041, lng: 77.1025 }, // Center on Delhi
        zoom: 6,
        pixelRatio: window.devicePixelRatio || 1
    }
);

window.addEventListener("resize", () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Add Marker
function addMarkersToMap(map) {
    var delhiMarker = new H.map.Marker({ lat: 28.7041, lng: 77.1025 });
    map.addObject(delhiMarker); // Marker for Delhi
}

addMarkersToMap(map);
