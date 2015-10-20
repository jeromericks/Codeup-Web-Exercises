function initMap() {
    var mapOptions = {
        zoom: 18,
        center: {
            lat:  29.4284595,
            lng: -98.492433
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



