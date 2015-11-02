(function() {
    "use strict";

    function weather(lat, lon) {
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "1158a497c1b0fd3a9c7b2c16c3754758",
            lat: lat,
            lon: lon,
            units: "imperial",
            cnt: 3
        }).done(function(data) {
            console.log(data);
            var dataHTML;
            var cityName = data.city.name;
            $("h4").html(cityName);      
                data.list.forEach(function (day, i) {
                    var weatherDate = moment.unix(day.dt).format("dddd");
                    var weatherMonth = moment.unix(day.dt).format("MMMM Do");
                    dataHTML = "<p>" + weatherDate + "</p>";
                    dataHTML += "<p>" + weatherMonth + "</p>";
                    dataHTML += "<h3>" + day.temp.max + "&deg; / " + day.temp.min + "&deg;</h3>";
                    dataHTML += '<img src ="http://openweathermap.org/img/w/' + day.weather[0].icon + '.png">';
                    dataHTML += "<p><strong>" + day.weather[0].main + ": </strong>" + day.weather[0].description[0].toUpperCase() + day.weather[0].description.substring(1, day.weather[0].description.length) + "</p>";
                    dataHTML += "<p><strong>Humidity: </strong>" + day.humidity + "</p>";
                    dataHTML += "<p><strong>Wind: </strong>" + day.speed + "</p>";
                    dataHTML += "<p><strong>Pressure: </strong>" + day.pressure + "</p>";
                    $(".day" + (i + 1)).html(dataHTML);
                });
                initMap(lat, lon, cityName);
        }).fail(function(){
            alert("Failed to get current weather");
        });
    };
    weather(29.423017, -98.48527);      

    function initMap(latitude, longitude, cityName) {
        var latLng = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            zoom: 4,
            center: latLng,
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: true,
            title:"Drag me!",
        });
        google.maps.event.addListener(marker, 'dragend', function() {
            var latLng = marker.getPosition();
            var latitude = latLng.lat();
            var longitude = latLng.lng();
            weather(latitude, longitude);
        });
    }   

    $("form").submit(function(e) {
        e.preventDefault();
        var address = $("#latLongCity").val();
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({ "address": address }, function(results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                weather(latitude, longitude);
            }
            else {
                alert("Try again!");
            }
        });
    });

  
})();