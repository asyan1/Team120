// Code for the Add Location page.

function initMap() 
{
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -35.9120467, lng: 145.1343136},
        zoom: 16
    });
            
    map.setCenter({lat: -37.9120467, lng: 145.1343136});
                            
    marker1 = new google.maps.Marker({
        position: {lat: -37.9128781, lng: 145.1362585},
        label: {text: "Sport" },   
        map: map,
        title: "Monash Sport"             
    });
    
    var geocoder = new google.maps.Geocoder();
    document.getElementById('submit').addEventListener('click', function(){geocodeAddress(geocoder,map);})
}

function geocodeAddress(geocoder, resultsMap) 
{
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) 
        {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } 
        else 
        {
            alert('Geocode was not successful for the following reason: ' + status);
        }
  });
}


