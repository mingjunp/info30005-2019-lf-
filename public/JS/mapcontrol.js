/*
* @author Yang Zhao
* description: creat a map to #map node
* */

var map;
function initAutocomplete() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: -37.812326, lng: 144.961971}
    });


    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    // var markers = locations.map(function(location, i) {
    //     return new google.maps.Marker({
    //         position: location,
    //         label: labels[i % labels.length],
    //         icon: './images/restroom.png'
    //     });
    // });

    var allMarks = [];
    for(var i=0;i<locations.length;i++){
        var myMarker = new google.maps.Marker({
            position: locations[i],
            icon: '../images/restroom.png',
            map: map
        });
        allMarks.push(myMarker);
        var toiletInfo = "<h5>Toilet Name: </h5>"+allToilet[i].name+"<br/>"+ "<image src='../images/wheelchair.png'> : "+allToilet[i].wheelchair+"<br/>"+"<image src='../images/baby.png'> : "+allToilet[i].baby_facil+"<br/>"+"<image src='../images/male.png'> : "+allToilet[i].male+"<br/>"+"<image src='../images/female.png'> : "+allToilet[i].female+"<br/>"+"<br/>"+"<br/><a href='/toiletDetail?id="+ allToilet[i]._id +"'>check detail</a><br><a target='blank' href='https://www.google.com/maps/dir//"+allToilet[i].lat+","+ allToilet[i].lon+"/"+"'>open google map to go</a>";
        attachSecretMessage(myMarker, toiletInfo)
    }


    // Attaches an info window to a marker with the provided message. When the
    // marker is clicked, the info window will open with the secret message.
    function attachSecretMessage(marker, infoMessage) {
        var infowindow = new google.maps.InfoWindow({
            maxWidth: 200,
            content: infoMessage
        });

        marker.addListener('click', function() {
            infowindow.open(marker.get('map'), marker);
        });
    }

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent("Your are here!<img src='../images/3.png'>");
            // infoWindow.open(map);
            map.setCenter(pos);

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: '../images/3.png',
                // draggable: true,
                animation: google.maps.Animation.DROP,
            });
            //make icon toggle
            marker.addListener('click', function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            });


        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    //add listener for clicking filter button
    //and do some logical operation for filter
    google.maps.event.addDomListener(document.getElementById("female"), 'click', function() {
        for(var i=0;i<allMarks.length;i++){
            allMarks[i].setMap(null);
        }
        allMarks.slice(0,allMarks.length);
        var obj = document.getElementsByName("filter");
        var check_val = [];
        for(k in obj){
            if(obj[k].checked)
                check_val.push(obj[k].value);
        }
        var temAllToile = allToilet.concat();
        for(var i=0; i<check_val.length;i++){
            temAllToile = temAllToile.filter(function(item){
                return item[check_val[i]] != "no";
            });
        }
        for(var i=0;i<temAllToile.length;i++){
            var myMarker = new google.maps.Marker({
                position: {lat:Number(temAllToile[i].lat),lng:Number(temAllToile[i].lon)},
                icon: '../images/restroom.png',
                map: map
            });
            allMarks.push(myMarker);
            var toiletInfo = "<h5>Toilet Name: </h5>"+temAllToile[i].name+"<br/>"+ "<image src='../images/wheelchair.png'> : "+temAllToile[i].wheelchair+"<br/>"+"<image src='../images/baby.png'> : "+temAllToile[i].baby_facil+"<br/>"+"<image src='../images/male.png'> : "+temAllToile[i].male+"<br/>"+"<image src='../images/female.png'> : "+temAllToile[i].female+"<br/>"+"<br/>"+"<br/><a href='/toiletDetail?id="+ temAllToile[i]._id +"'>check detail</a><br><a target='blank' href='https://www.google.com/maps/dir//"+temAllToile[i].lat+","+ temAllToile[i].lon+"/"+"'>open google map to go</a>";
            attachSecretMessage(myMarker, toiletInfo)
        }
    });
    google.maps.event.addDomListener(document.getElementById("male"), 'click', function() {
        for(var i=0;i<allMarks.length;i++){
            allMarks[i].setMap(null);
        }
        allMarks.slice(0,allMarks.length);
        var obj = document.getElementsByName("filter");
        var check_val = [];
        for(k in obj){
            if(obj[k].checked)
                check_val.push(obj[k].value);
        }
        var temAllToile = allToilet.concat();
        for(var i=0; i<check_val.length;i++){
            temAllToile = temAllToile.filter(function(item){
                return item[check_val[i]] != "no";
            });
        }
        for(var i=0;i<temAllToile.length;i++){
            var myMarker = new google.maps.Marker({
                position: {lat:Number(temAllToile[i].lat),lng:Number(temAllToile[i].lon)},
                icon: '../images/restroom.png',
                map: map
            });
            allMarks.push(myMarker);
            var toiletInfo = "<h5>Toilet Name: </h5>"+temAllToile[i].name+"<br/>"+ "<image src='../images/wheelchair.png'> : "+temAllToile[i].wheelchair+"<br/>"+"<image src='../images/baby.png'> : "+temAllToile[i].baby_facil+"<br/>"+"<image src='../images/male.png'> : "+temAllToile[i].male+"<br/>"+"<image src='../images/female.png'> : "+temAllToile[i].female+"<br/>"+"<br/>"+"<br/><a href='/toiletDetail?id="+ temAllToile[i]._id +"'>check detail</a><br><a target='blank' href='https://www.google.com/maps/dir//"+temAllToile[i].lat+","+ temAllToile[i].lon+"/"+"'>open google map to go</a>";
            attachSecretMessage(myMarker, toiletInfo)
        }
    });
    google.maps.event.addDomListener(document.getElementById("wheelchair"), 'click', function() {
        for(var i=0;i<allMarks.length;i++){
            allMarks[i].setMap(null);
        }
        allMarks.slice(0,allMarks.length);
        var obj = document.getElementsByName("filter");
        var check_val = [];
        for(k in obj){
            if(obj[k].checked)
                check_val.push(obj[k].value);
        }
        var temAllToile = allToilet.concat();
        for(var i=0; i<check_val.length;i++){
            temAllToile = temAllToile.filter(function(item){
                return item[check_val[i]] != "no";
            });
        }
        for(var i=0;i<temAllToile.length;i++){
            var myMarker = new google.maps.Marker({
                position: {lat:Number(temAllToile[i].lat),lng:Number(temAllToile[i].lon)},
                icon: '../images/restroom.png',
                map: map
            });
            allMarks.push(myMarker);
            var toiletInfo = "<h5>Toilet Name: </h5>"+temAllToile[i].name+"<br/>"+ "<image src='../images/wheelchair.png'> : "+temAllToile[i].wheelchair+"<br/>"+"<image src='../images/baby.png'> : "+temAllToile[i].baby_facil+"<br/>"+"<image src='../images/male.png'> : "+temAllToile[i].male+"<br/>"+"<image src='../images/female.png'> : "+temAllToile[i].female+"<br/>"+"<br/>"+"<br/><a href='/toiletDetail?id="+ temAllToile[i]._id +"'>check detail</a><br><a target='blank' href='https://www.google.com/maps/dir//"+temAllToile[i].lat+","+ temAllToile[i].lon+"/"+"'>open google map to go</a>";
            attachSecretMessage(myMarker, toiletInfo)
        }
    });
    google.maps.event.addDomListener(document.getElementById("babyFacility"), 'click', function() {
        for(var i=0;i<allMarks.length;i++){
            allMarks[i].setMap(null);
        }
        allMarks.slice(0,allMarks.length);
        var obj = document.getElementsByName("filter");
        var check_val = [];
        for(k in obj){
            if(obj[k].checked)
                check_val.push(obj[k].value);
        }
        var temAllToile = allToilet.concat();
        for(var i=0; i<check_val.length;i++){
            temAllToile = temAllToile.filter(function(item){
                return item[check_val[i]] != "no";
            });
        }
        for(var i=0;i<temAllToile.length;i++){
            var myMarker = new google.maps.Marker({
                position: {lat:Number(temAllToile[i].lat),lng:Number(temAllToile[i].lon)},
                icon: '../images/restroom.png',
                map: map
            });
            allMarks.push(myMarker);
            var toiletInfo = "<h5>Toilet Name: </h5>"+temAllToile[i].name+"<br/>"+ "<image src='../images/wheelchair.png'> : "+temAllToile[i].wheelchair+"<br/>"+"<image src='../images/baby.png'> : "+temAllToile[i].baby_facil+"<br/>"+"<image src='../images/male.png'> : "+temAllToile[i].male+"<br/>"+"<image src='../images/female.png'> : "+temAllToile[i].female+"<br/>"+"<br/>"+"<br/><a href='/toiletDetail?id="+ temAllToile[i]._id +"'>check detail</a><br><a target='blank' href='https://www.google.com/maps/dir//"+temAllToile[i].lat+","+ temAllToile[i].lon+"/"+"'>open google map to go</a>";
            attachSecretMessage(myMarker, toiletInfo)
        }
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls.push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

}

//all toilet get from open melbourne
var allToilet;
$.ajax({url:"/api/toilets/getAllToilets",async:false,success:function(result){
        allToilet = result.data;
    }});

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

var toiletLocation = [];
for (var i=0; i<allToilet.length; i++){
    var tem={lat:0,lng:0};
    tem.lat=Number(allToilet[i].lat);
    tem.lng=Number(allToilet[i].lon);
    toiletLocation.push(tem);
}
var locations = toiletLocation;

// load google map
new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyAiziRhHD1URUINIQH3V3p1N9vsZzu3UUk&libraries=places&callback=initAutocomplete");
document.body.appendChild(new_element);